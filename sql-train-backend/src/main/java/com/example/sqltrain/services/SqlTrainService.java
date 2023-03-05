package com.example.sqltrain.services;

import com.example.sqltrain.dto.TaskDto;
import com.example.sqltrain.dto.UserFeedbackDto;
import com.example.sqltrain.exceptions.QueryException;
import com.example.sqltrain.models.Task;
import com.example.sqltrain.repositories.TasksRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class SqlTrainService {
    @Value("${sql.train.db}")
    String sqlTrainDatabaseUrl;

    TasksRepository tasksRepository;

    public SqlTrainService(TasksRepository tasksRepository){
        this.tasksRepository = tasksRepository;
    }

    public UserFeedbackDto checkSolution(Integer taskId, String query){
        String solution = tasksRepository.findById(taskId).orElseThrow(NoSuchElementException::new).getSolution();

        List<List<String>> correctTable = runQuery(solution);
        List<List<String>> userQueryTable = runQuery(query);

        var correctTableData = correctTable.subList(1, correctTable.size());
        var userQueryTableData = userQueryTable.subList(1, userQueryTable.size());
        var userColumnNames = userQueryTable.get(0);

        return new UserFeedbackDto(correctTableData.equals(userQueryTableData), userQueryTableData, userColumnNames);
    }

    public String getSolution(Integer taskId){
        return tasksRepository.findById(taskId).orElseThrow(NoSuchElementException::new).getSolution();
    }

    public List<TaskDto> getAllTasks(){
        return tasksRepository.findAll().stream().sorted(Comparator.comparing(Task::getTaskId)).map(task -> new TaskDto(task.getTaskId().toString(), task.getDescription())).toList();
    }

    private List<List<String>> runQuery(String query){
        List<List<String>> result = new ArrayList<>();
        String url = sqlTrainDatabaseUrl;

        try (Connection connection = DriverManager.getConnection(url);
             Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery(query)) {

            List<String> columns = new ArrayList<>();
            ResultSetMetaData rsmd = resultSet.getMetaData();;
            for (int i = 1; i <= rsmd.getColumnCount(); ++i){
                columns.add(rsmd.getColumnName(i));
            }
            result.add(columns);

            while(resultSet.next()){
                result.add(new ArrayList<>());
                for (int i = 1; i <= resultSet.getMetaData().getColumnCount(); i++){
                    result.get(result.size() - 1).add(resultSet.getString(i));
                }
            }
        } catch (SQLException e) {
            throw new QueryException(e.getMessage());
        }

        return result;
    }
}

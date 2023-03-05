package com.example.sqltrain.controllers;

import com.example.sqltrain.dto.TaskDto;
import com.example.sqltrain.dto.UserFeedbackDto;
import com.example.sqltrain.services.SqlTrainService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// TODO: fix @CrossOrigin
@RestController
@CrossOrigin("*")
public class SqlTrainController {
    private SqlTrainService sqlTrainService;

    public SqlTrainController(SqlTrainService sqlTrainService){
        this.sqlTrainService = sqlTrainService;
    }

    @GetMapping("/submit/{taskId}/{query}")
    public UserFeedbackDto submitSolution(@PathVariable Integer taskId, @PathVariable String query){
        return sqlTrainService.checkSolution(taskId, query);
    }

    @GetMapping("/getSolution/{taskId}")
    public String getTaskSolution(@PathVariable Integer taskId){
        return sqlTrainService.getSolution(taskId);
    }

    @GetMapping("/getAllTasks")
    public List<TaskDto> getAllTasks(){
        var a = sqlTrainService.getAllTasks();
        return a;
    }
}

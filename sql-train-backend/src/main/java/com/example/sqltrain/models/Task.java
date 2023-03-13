package com.example.sqltrain.models;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks", schema = "public")
public class Task {
    @Id
    @Column(name = "task_id")
    private Integer taskId;
    private String description;
    private String solution;

    @Enumerated(EnumType.STRING)
    private DatabaseName databaseName;

    public Task(Integer taskId, String description, String solution, DatabaseName databaseName) {
        this.taskId = taskId;
        this.description = description;
        this.solution = solution;
        this.databaseName = databaseName;
    }

    public Task() {
    }

    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setSolutions(String solution) {
        this.solution = solution;
    }

    public void setDatabaseName(DatabaseName databaseName){
        this.databaseName = databaseName;
    }

    public Integer getTaskId() {
        return taskId;
    }

    public String getDescription() {
        return description;
    }

    public String getSolution() {
        return solution;
    }

    public DatabaseName getDatabaseName(){
        return databaseName;
    }
}

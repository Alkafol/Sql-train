package com.example.sqltrain.dto;

public class TaskDto {
    private String taskId;
    private String description;

    public TaskDto(String taskId, String description) {
        this.taskId = taskId;
        this.description = description;
    }

    public String getTaskId() {
        return taskId;
    }

    public String getDescription() {
        return description;
    }
}

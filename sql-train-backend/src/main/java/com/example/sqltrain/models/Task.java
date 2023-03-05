package com.example.sqltrain.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tasks", schema = "public")
public class Task {
    @Id
    @Column(name = "task_id")
    private Integer taskId;
    private String description;
    private String solution;

    public Task(Integer taskId, String description, String solution) {
        this.taskId = taskId;
        this.description = description;
        this.solution = solution;
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

    public Integer getTaskId() {
        return taskId;
    }

    public String getDescription() {
        return description;
    }

    public String getSolution() {
        return solution;
    }
}

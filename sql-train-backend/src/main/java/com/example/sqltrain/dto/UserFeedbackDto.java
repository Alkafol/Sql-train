package com.example.sqltrain.dto;

import java.util.List;

public class UserFeedbackDto {
    public boolean isCorrect;
    public List<List<String>> userSolutionOutput;
    public List<String> columnNames;

    public UserFeedbackDto(boolean isCorrect, List<List<String>> userSolutionOutput, List<String> columnNames) {
        this.isCorrect = isCorrect;
        this.userSolutionOutput = userSolutionOutput;
        this.columnNames = columnNames;
    }
}

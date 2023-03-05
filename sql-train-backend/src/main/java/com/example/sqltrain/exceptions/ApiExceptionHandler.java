package com.example.sqltrain.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(value = {QueryException.class})
    public ResponseEntity<Object> handleQueryException(QueryException e){
        return new ResponseEntity<>(e.getMessage().replace("Позиция", "Position"), HttpStatus.BAD_REQUEST);
    }
}

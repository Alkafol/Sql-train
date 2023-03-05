package com.example.sqltrain.exceptions;

public class QueryException extends RuntimeException {

    public QueryException(String message){
        super(message);
    }
}

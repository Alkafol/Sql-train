package com.example.sqltrain.aop;

import org.aspectj.lang.annotation.Pointcut;

public class Pointcuts {

    @Pointcut("execution(* com.example.sqltrain.controllers.SqlTrainController.submitSolution(..))")
    public void submitSolutionPointcut(){}
}

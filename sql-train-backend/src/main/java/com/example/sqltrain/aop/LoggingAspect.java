package com.example.sqltrain.aop;

import com.example.sqltrain.exceptions.QueryException;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Component
@Aspect
public class LoggingAspect {
    Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Around("Pointcuts.submitSolutionPointcut()")
    public Object aroundSubmitSolution(ProceedingJoinPoint joinPoint) throws Throwable {
        Object[] arguments = joinPoint.getArgs();
        String query = "";

        for (Object arg : arguments){
            if (arg instanceof String){
                query = (String) arg;
            }
        }

        query = query.replace('\n', ' ');
        LocalDateTime currentTime = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedCurrentTime = currentTime.format(formatter);

        try {
            Object result = joinPoint.proceed();

            if (query.toLowerCase().contains("select")){
                logger.info("OK | " + formattedCurrentTime + " | " + query);
            }
            else{
                logger.info("SUSPICIOUS | " + formattedCurrentTime + " | " + query);
            }

            return result;
        }
        catch (QueryException e){
            logger.info("ERROR | " + formattedCurrentTime + " | " + query);
            throw e;
        }
    }
}

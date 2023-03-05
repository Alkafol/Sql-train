package com.example.sqltrain.repositories;

import com.example.sqltrain.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TasksRepository extends JpaRepository<Task, Integer> {
}

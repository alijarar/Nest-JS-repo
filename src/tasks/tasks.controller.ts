import { TasksService } from './tasks.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './tasks.model';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    return this.taskService.createTask(createTaskDTO);
  }
}

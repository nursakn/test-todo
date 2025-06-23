import type {TaskDto} from "../api/dto/task.dto.ts";
import type {CreateTaskViewModel} from "../models/create-task.model.ts";
import type {CreateTaskDto} from "../api/dto/create-task.dto.ts";
import type {UpdateTaskDto} from "../api/dto/update-task.dto.ts";
import type {DeleteTaskDto} from "../api/dto/delete-task.dto.ts";
import type {TaskViewModel} from "../models/task.model.ts";

export const tasksTransformer = {
  taskFromDto(taskDto: TaskDto): TaskViewModel {
    const {
      id,
      title,
      description,
      done,
    } = taskDto;
    return {
      id,
      title,
      description,
      done,
    }
  },
  taskToDto(task: CreateTaskViewModel): CreateTaskDto {
    const {
      title,
      description,
    } = task;
    return {
      title,
      description,
    }
  },
  updateTaskToDto(task: TaskViewModel): UpdateTaskDto {
    const {
      id,
      title,
      description,
      done,
    } = task;
    return {
      id,
      title,
      description,
      done,
    }
  },
  deleteTaskToDto(task: TaskViewModel): DeleteTaskDto {
    const { id} = task;
    return { id }
  }
}

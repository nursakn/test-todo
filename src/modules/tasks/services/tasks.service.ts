import {tasksApi} from "../api/tasks.api.ts";
import {tasksTransformer} from "../transformers/task.transformer.ts";
import type {TaskViewModel} from "../models/task.model.ts";
import type {CreateTaskViewModel} from "../models/create-task.model.ts";

export const tasksService = {
  async getTasks(): Promise<TaskViewModel[]> {
    const dtos = await tasksApi.getAllTasks();

    return dtos.map(tasksTransformer.taskFromDto);
  },

  async createTask(task: CreateTaskViewModel) {
    const dto = tasksTransformer.taskToDto(task);

    return tasksApi.createTask(dto);
  },

  async deleteTask(task: TaskViewModel) {
    const dto = tasksTransformer.deleteTaskToDto(task);

    return tasksApi.deleteTask(dto);
  },

  async updateTaskDoneStatus(task: TaskViewModel) {
    const dto = tasksTransformer.updateTaskToDto({
      ...task,
      done: !task.done,
    });

    return tasksApi.updateTaskDoneStatus(dto);
  },
};

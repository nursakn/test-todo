import { apiClient } from "../../../shared/api-client.ts"
import type {TaskDto} from "./dto/task.dto.ts";
import type {UpdateTaskDto} from "./dto/update-task.dto.ts";
import type {CreateTaskDto} from "./dto/create-task.dto.ts";
import type {DeleteTaskDto} from "./dto/delete-task.dto.ts";

export const tasksApi = {
  apiClient,
  async getAllTasks() {
    return this.apiClient.get<TaskDto[]>('/tasks')
      .then(response => response.data);
  },
  async createTask(task: CreateTaskDto) {
    return this.apiClient.post('/tasks', {
      ...task,
    }).then(response => response.data);
  },
  async updateTaskDoneStatus(updateTaskDto: UpdateTaskDto) {
    const { id, done, title, description } = updateTaskDto;
    return this.apiClient.put(`/tasks/${id}`, {
      title,
      description,
      done,
    }).then(response => response.data);
  },
  async deleteTask(deleteTaskDto: DeleteTaskDto) {
    const { id } = deleteTaskDto;

    return this.apiClient.delete(`/tasks/${id}`)
      .then(response => response.data);
  }
}

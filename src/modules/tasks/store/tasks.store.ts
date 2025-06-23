import {defineStore} from "pinia";
import {computed, ref} from "vue";
import type {TaskViewModel} from "../types/task.type.ts";
import type {CreateTaskViewModel} from "../models/create-task.model.ts";
import {tasksService} from "../services/tasks.service.ts";

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<TaskViewModel[]>([]);

  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  async function loadTasks() {
    try {
      isLoading.value = true;
      onBeforeTasksLoadedCbArray.forEach(cb => cb(tasks.value));
      tasks.value = await tasksService.getTasks()
      onTasksLoadedCbArray.forEach(cb => cb(tasks.value));
    } catch {
      error.value = 'Error loading tasks';
      onLoadErrorCbArray.forEach(cb => cb(error.value!));
    } finally {
      isLoading.value = false;
    }
  }

  async function createTask(task: CreateTaskViewModel) {
    await tasksService.createTask(task);
  }

  async function deleteTask(task: TaskViewModel) {
    await tasksService.deleteTask(task);
    await loadTasks();
  }

  async function updateTaskDoneStatus(task: TaskViewModel) {
    await tasksService.updateTaskDoneStatus(task);
    await loadTasks();
  }

  // Custom additional callbacks
  const onTasksLoadedCbArray = new Array<(tasks: TaskViewModel[]) => void>();
  const onBeforeTasksLoadedCbArray = new Array<(prevTasks: TaskViewModel[]) => void>();
  const onLoadErrorCbArray = new Array<(error: string) => void>();

  function onTasksLoaded(cb: (tasks: TaskViewModel[]) => void) {
    onTasksLoadedCbArray.push(cb);
  }

  function onBeforeTasksLoaded(cb: (prevTasks: TaskViewModel[]) => void) {
    onBeforeTasksLoadedCbArray.push(cb);
  }

  function onLoadError(cb: (error: string) => void) {
    onLoadErrorCbArray.push(cb);
  }

  return {
    tasks: computed(() => tasks),
    isLoading: computed(() => isLoading),
    error: computed(() => error),
    loadTasks,
    createTask,
    onTasksLoaded,
    onBeforeTasksLoaded,
    onLoadError,
    deleteTask,
    updateTaskDoneStatus,
  }
})

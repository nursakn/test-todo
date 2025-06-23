<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
import {useTasksStore} from "../store/tasks.store.ts";
import {onBeforeMount} from "vue";

const {
  isLoading,
  loadTasks,
  error,
  tasks,
  deleteTask,
  updateTaskDoneStatus,
} = useTasksStore();

onBeforeMount(() => {
  loadTasks();
});
</script>

<template>
  <button :disabled="isLoading" @click="loadTasks">reload</button>

  <p>
    isLoading=
    <span v-if="isLoading">
      loading spinner =)
    </span>
  </p>
  <template v-if="error">
    {{ error }}
  </template>

  <task-item
    v-for="task in tasks"
    :task="task"
    :key="task.id"
    @toggle="updateTaskDoneStatus"
    @delete="deleteTask"
  />

</template>

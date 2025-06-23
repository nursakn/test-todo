<script setup lang="ts">
import TaskList from "../components/TaskList.vue";
import TaskForm from "../components/TaskForm.vue";
</script>

<template>
  <div class="tasks-page">
    <task-form />
    <task-list />
  </div>
</template>

<style>
.tasks-page {
  display: flex;
  flex-direction: column;
  
  gap: 1rem;
}
</style>
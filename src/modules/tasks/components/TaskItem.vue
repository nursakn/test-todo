<script setup lang="ts">
import type {TaskViewModel} from "../models/task.model.ts";

const { task } = defineProps<{
  task: TaskViewModel;
}>();

const emit = defineEmits<{
  (e: 'delete', task: TaskViewModel): void;
  (e: 'toggle', done: TaskViewModel): void;
}>();

function handleToggle(e: Event) {
  e.preventDefault();
  emit('toggle', task);
}

function handleDelete() {
  emit('delete', task);
}
</script>

<template>
  <article class="task">
    <label for="done">
      done
      <input
        name="done"
        type="checkbox"
        :checked="task.done"
        @change="handleToggle"
      />
    </label>
    {{ task.done }}
    <div class="task-info">
      <h3>{{ task.title }}</h3>
      <p>{{ task.description }}</p>
    </div>
    <button @click="handleDelete">delete</button>
  </article>
</template>

<style scoped>
.task {
  border: 1px solid #ccc;
  border-radius: 8px;

  display: flex;
  align-items: center;

  padding-left: 16px;
  padding-right: 16px;
}

.task-info {
  flex: 1;

  display: flex;
  flex-direction: column;
}
</style>

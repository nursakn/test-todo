<script setup lang="ts">
import {useTasksStore} from "../store/tasks.store.ts";
import {reactive, ref} from "vue";
import type {CreateTaskViewModel} from "../models/create-task.model.ts";

const tasksStore = useTasksStore();

const formValues = reactive<CreateTaskViewModel>({
  title: '',
  description: '',
});

const formError = ref<string | null>(null);

function validateForm(): string | null {
  if (!formValues.title) {
    return 'title is required';
  }

  if (!formValues.description) {
    return 'description is required';
  }

  return null;
}

function handleSubmit() {
  const error = validateForm();

  if (error) {
    formError.value = error;
    return;
  }

  formError.value = null;
  tasksStore.createTask(formValues);
}
</script>

<template>
  <form class="task-form" @submit.prevent="handleSubmit">
    <label for="title">
      title
    </label>
    <input name="title" v-model="formValues.title" />
    <label for="description">
      description
    </label>
    <input name="description" v-model="formValues.description" />
    <p v-if="formError" class="form-error">Error: {{ formError }}</p>
    <button type="submit">create</button>
  </form>
</template>

<style>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-error {
  color: red;
}
</style>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h2>{{ taskStore.selectedTask ? "Modification" : "Création" }}</h2>
    <div class="field">
      <input type="text" v-model="title" placeholder="Titre" />
    </div>
    <div class="field">
      <textarea
        cols="30"
        rows="10"
        v-model="text"
        placeholder="Ma tâche..."
      ></textarea>
    </div>
    <button type="submit">Envoyer</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTasksStore } from "@/stores/task";
import { v4 as uuid } from "uuid";

const title = ref("");
const text = ref("");
const taskStore = useTasksStore();

const handleSubmit = () => {
  const task = {
    id: taskStore.selectedTask ? taskStore.selectedTask.id : uuid(),
    completed: false,
    title: title.value,
    text: text.value,
  };

  if (taskStore.selectedTask) {
    taskStore.selectedTask = null;
  }

  taskStore.tasks.push(task);

  title.value = "";
  text.value = "";
};

taskStore.$subscribe((mutation) => {
  const selectedTask = mutation.events.target.selectedTask;
  if (selectedTask) {
    title.value = selectedTask.title;
    text.value = selectedTask.text;
  }
});
</script>

<style lang="scss" scoped>
$color: rgb(29, 28, 28);
.form {
  box-sizing: border-box;
  border: 1px solid $color;
  padding: 15px;

  .field {
    margin: 20px 0;

    input,
    textarea {
      width: 100%;
      background-color: rgba($color: white, $alpha: 0.8);
      border: none;
      box-sizing: border-box;
      padding: 8px 15px;
      border-radius: 3px;
    }
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: rgb(43, 198, 43);
    padding: 8px 20px;
    color: white;

    &:hover {
      background-color: rgb(34, 161, 34);
    }
  }
}
</style>

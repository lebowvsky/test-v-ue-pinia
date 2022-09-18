<template>
  <section class="stats-section">
    <div class="stat done">Done : {{ taskStore.completedTasks }}</div>
    <div class="stat todo">To do : {{ taskStore.pendingTasks }}</div>
    <div class="stat total">Total : {{ allTasks }}</div>
  </section>
</template>

<script setup lang="ts">
import { useTasksStore } from "@/stores/task";
import { computed } from "vue";

const taskStore = useTasksStore();
const allTasks = computed(() => taskStore.tasks.length);
</script>

<style lang="scss" scoped>
$color: rgb(29, 28, 28);
.stats-section {
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  .stat {
    border: 1px solid $color;
    padding: 20px;
    min-width: 25%;
    max-width: 30%;
  }
}
</style>

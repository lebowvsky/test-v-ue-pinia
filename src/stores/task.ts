import { defineStore } from "pinia";
import "pinia";
import { Task } from "@/definitions/task";

export const useTasksStore = defineStore("tasks", {
  state() {
    return {
      tasks: [] as Task[],
      selectedTask: null as Task | null,
    };
  },
  actions: {
    removeTask(taskId: string) {
      this.tasks = this.tasks.filter((task) => task.id != taskId);
    },
  },
  getters: {
    completedTasks(): number {
      return this.tasks.filter((task: Task) => task.completed).length;
    },
    pendingTasks(): number {
      return this.tasks.length - this.completedTasks;
    },
  },
});

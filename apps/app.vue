<template>
  <div>
    <CardTaskList />
  </div>
</template>

<script setup lang="ts">
import { useToDoStore } from '~/stores/toDo'
const store = useToDoStore();
onMounted(() => {
  store.fetchTasks()
})
</script>

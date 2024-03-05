<template>
    <div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header bg-primary text-white">
                            <h5 class="card-title mb-0">List</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li v-for="(task, index) in taskList" :key="task.id" class="list-group-item"> {{ task.name
                                }}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header bg-warning">
                            <h5 class="card-title mb-0">To Do</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li v-for="(task, index) in toDoList" :key="task.id" class="list-group-item">{{ task.name }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-header bg-success text-white">
                            <h5 class="card-title mb-0">Done</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li v-for="(task, index) in doneList" :key="task.id" class="list-group-item">{{ task.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable from 'vuedraggable';

const tasks = reactive([
    { id: 1, name: 'Task 1', status: 'todo' },
    { id: 2, name: 'Task 2', status: 'none' },
    { id: 3, name: 'Task 3', status: 'done' },
]);

function taskChanged(event: any) {
    // Handle task change here
    console.log('Task changed:', event);
}

const taskList = tasks.filter(task => task.status === 'none');
const toDoList = tasks.filter(task => task.status === 'todo');
const doneList = tasks.filter(task => task.status === 'done');
</script>

<style>
/* Add custom styles here */
</style>

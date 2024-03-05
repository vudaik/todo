<template>
    <div class="card text-center vh-100 d-flex flex-column justify-content-center">

        <div class="card-body d-flex justify-content-between">

            <!-- Task List -->
            <!-- <div class="card mx-auto" style="width: 30%;" @dragover="handleDragOver($event, 'taskList')">

                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="text-start">TASK LIST</span>
                    <div class="d-flex justify-content-end">
                        <NuxtLink to="" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD TASK
                        </NuxtLink>
                        <div class="modal fade" id="exampleModal" tabindex="-1" a ria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">CREATE NEW TASK</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <TaskModel />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-outline-success">CREATE</button>
                                        <button type="button" class="btn btn-outline-secondary"
                                            data-bs-dismiss="modal">CLOSE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body droptarget">
                    <div style="height: calc(100vh - 140px); overflow-y: auto;">
                        <ul class="list">
                            <li v-for="task in taskList" :key="task.id">
                                <button type="button" class="btn btn-outline-dark w-100 text-start task-title"
                                    draggable="true" @dragstart="handleDragStart($event, task)"> {{ task.title
                                    }}</button>
                                <TaskDetail :task="task" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div> -->

            <!-- To Do List -->
            <div class="card mx-auto" style="width: 45%;" @dragover="handleDragOver($event, 'toDoList')">

                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="text-start">TO DO LIST</span>
                    <div class="d-flex justify-content-end">
                        <NuxtLink to="" class="" data-bs-toggle="modal" data-bs-target="#addTaskModal">ADD TASK
                        </NuxtLink>
                        <div class="modal fade" id="addTaskModal" tabindex="-1" a ria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">CREATE NEW TASK</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <TaskModel />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-outline-success">CREATE</button>
                                        <button type="button" class="btn btn-outline-secondary"
                                            data-bs-dismiss="modal">CLOSE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body">

                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Searching ..." v-model="toDoTaskSearch">
                    </div>

                    <div style="height: calc(100vh - 140px); overflow-y: auto;">
                        <ul class="list">
                            <li v-for="task in filteredToDoList" :key="task.id">
                                <!-- <TaskDetail :task="task" /> -->
                                <button type="button" class="btn btn-outline-dark w-100 text-start task-title"
                                    draggable="true" @dragstart="handleDragStart($event, task)"> {{ task.title
                                    }}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Done List -->
            <div class="card mx-auto" style="width: 45%;" @dragover="handleDragOver($event, 'doneList')">

                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="text-start">DONE LIST</span>
                </div>

                <div class="card-body">

                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Searching ..." v-model="doneTaskSearch">
                    </div>

                    <div style="height: calc(100vh - 140px); overflow-y: auto;">
                        <ul class="list">
                            <li v-for="task in filteredDoneList" :key="task.id">
                                <!-- <TaskDetail :task="task" /> -->
                                <button type="button" class="btn btn-outline-dark w-100 text-start task-title"
                                    draggable="true" @dragstart="handleDragStart($event, task)">
                                    {{
                task.title
                                    }}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import {
    toDoTaskSearch,
    doneTaskSearch,
} from '~/utils/ToDo'
</script>


<style scoped>
.list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.list li {
    margin-top: 10px;
    padding: 10px;
    cursor: grab;
    border-radius: 5px;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

.list li:hover {
    transform: scale(1.03);
}

.list li.dragging {
    opacity: 0.7;
    cursor: grabbing;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2), 0px 0px 20px rgba(0, 0, 0, 0.1);
}
</style>

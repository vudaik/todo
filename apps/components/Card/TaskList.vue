<!-- TaskList.vue -->
<template>
    <div class="card text-center vh-100 d-flex flex-column justify-content-center">

        <div class="card-body d-flex justify-content-between">

            <!-- To Do List -->
            <div class="card mx-auto" style="width: 45%;" @dragover="handleDragOver($event, 'toDoList')">

                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="text-start">TO DO LIST</span>
                    <div class="d-flex justify-content-end">
                        <NuxtLink to="" class="" data-bs-toggle="modal" data-bs-target="#addTaskModal"
                            @click="openCreateTaskModal">ADD TASK
                        </NuxtLink>
                        <div class="modal fade show" :style="{ 'display': isCreateTaskModalOpen ? 'block' : 'none' }"
                            id="addTaskModal" tabindex="-1" a ria-labelledby="exampleModalLabel" aria-hidden="true"
                            v-if="isCreateTaskModalOpen">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">CREATE NEW
                                            TASK</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close" @click="closeCreateTaskModal"></button>
                                    </div>
                                    <div class="modal-body">
                                        <TaskModel :detailTask="createTask" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-outline-success"
                                            @click="createNewTaskEvent(createTask)">CREATE</button>
                                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                                            @click="closeCreateTaskModal">CLOSE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card-body">

                    <InputSearchInput :value="toDoTaskSearch" :onUpdateSearchValue="handleUpdateToDoTaskSearch" />

                    <div style="height: calc(100vh - 140px); overflow-y: auto;">
                        <ul class="list">
                            <li v-for="task in filteredToDoList" :key="task.id">
                                <ButtonToDoTask :todoTask="task" />
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

                    <InputSearchInput :value="doneTaskSearch" :onUpdateSearchValue="handleUpdateDoneTaskSearch" />

                    <div style="height: calc(100vh - 140px); overflow-y: auto;">
                        <ul class="list">
                            <li v-for="task in filteredDoneList" :key="task.id">
                                <ButtonDoneTask :doneTask="task" />
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
    doneTaskSearch
} from '~/utils/ToDo'

const createTask = reactive({ id: 0, userID: 0, title: '', completed: false })
const isCreateTaskModalOpen = ref<boolean>(false)

const openCreateTaskModal = () => {
    console.log('create task modal')
    isCreateTaskModalOpen.value = true
}

const closeCreateTaskModal = () => {
    isCreateTaskModalOpen.value = false
}
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

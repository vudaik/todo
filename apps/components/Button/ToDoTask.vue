<template>
    <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-outline-dark w-100 text-start task-title" draggable="true"
            data-bs-toggle="modal" :data-bs-target="'#' + todoTask.id" @dragstart="handleDragStart($event, todoTask)"
            @click="openToDoTaskModal">
            {{
                todoTask.title
            }}
        </button>

        <Teleport to="body">
            <div class="modal fade show" data-bs-backdrop="static"
                :style="{ 'display': isToDoTaskModalOpen ? 'block' : 'none' }" :id="todoTask.id + ''" tabindex="-1"
                aria-labelledby="taskDetailModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="taskDetailModalLabel">TASK DETAILS</h5>
                        </div>
                        <div class="modal-body">
                            <TaskModel :detailTask="todoTask" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary "
                                >UPDATE</button>
                                <!-- @click="updateTaskEvent(todoTask, userIDModify, titleIDModify)"  -->
                            <button type="button" class="btn btn-outline-primary "
                                >DONE</button>
                                <!-- @click="doneTaskEvent(todoTask, userIDModify, titleIDModify)" -->
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
                                @click="closeToDoTaskModal">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
import type { Task } from '~/utils/ToDo'
import type { ref } from 'vue'

// const userIDModify = ref<number>(0)
// const titleIDModify = ref<string>('')
const props = defineProps<{ todoTask: Task }>()
// , userIDModify: number, titleIDModify: string
const isToDoTaskModalOpen = ref<boolean>(false)

const openToDoTaskModal = () => {
    console.log(props.todoTask.id, props.todoTask.userID, props.todoTask.title, props.todoTask.completed, isToDoTaskModalOpen.value)
    isToDoTaskModalOpen.value = true

}
const closeToDoTaskModal = () => {
    isToDoTaskModalOpen.value = false
}
</script>

<style></style>

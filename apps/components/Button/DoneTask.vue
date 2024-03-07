<!-- DoneTask.vue -->
<template>
    <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-outline-dark w-100 text-start task-title" draggable="true"
            data-bs-toggle="modal" :data-bs-target="'#' + doneTask.id" @dragstart="handleDragStart($event, doneTask)"
            @click="openDoneTaskModal">
            {{ doneTask.title }}
        </button>

        <Teleport to="body">
            <div class="modal fade show" :style="{ 'display': isDoneTaskModalOpen ? 'block' : 'none' }"
                :id="doneTask.id + ''" tabindex="-1" aria-labelledby="taskDetailModalLabel" aria-hidden="true"
                v-if="isDoneTaskModalOpen">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="taskDetailModalLabel">TASK DETAILS</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                @click="closeDoneTaskModal"></button>
                        </div>
                        <div class="modal-body">
                            <CardTaskModel :detailTask="doneTask" :readOnlyStatus="status" />
                        </div>
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ doneTask: Task }>()

const isDoneTaskModalOpen = ref<boolean>(false)
const status = ref<boolean>(true)

const openDoneTaskModal = () => {
    isDoneTaskModalOpen.value = true
}

const closeDoneTaskModal = () => {
    isDoneTaskModalOpen.value = false
}
</script>

<style></style>

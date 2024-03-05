<!-- Task  Detail -->

<template>
    <div class="input-group">
        <!-- <input type="text" data-bs-toggle="modal" data-bs-target="#taskDetails" class="form-control"
            :placeholder="task.title" aria-label="Recipient's username with two button addons" readonly> -->
        <button type="button" class="btn btn-outline-dark w-100 text-start"> {{ task.title }}</button>

        <!-- <button class="btn btn-outline-primary" type="button" @click="startTask(task)">START</button>
        <button class="btn btn-outline-success" type="button" @click="doneTask(task)">DONE</button>
        <button class="btn btn-outline-danger" type="button" @click="deleteTask(task)">DELETE</button> -->

        <!-- <div class="modal fade" id="taskDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">TASK DETAILS</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <TaskModel />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary ">UPDATE</button>
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">CLOSE</button>
                    </div>
                </div>
            </div>
        </div> -->

    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    task: {}
});

// const startTask = (task?: object) => {
//     alert('click ' + task.title)
// }

// const doneTask = (task?: object) => {
//     alert('click ' + task.title)
// }

// const deleteTask = (task?: object) => {
//     alert('click ' + task.title)
// }

</script>
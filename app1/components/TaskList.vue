
 

<template>
    <div class="card text-center vh-100 d-flex flex-column justify-content-center">

        <div class="card-header d-flex justify-content-between align-items-center">
            <span class="text-start">TO DO APP</span>
        </div>

        <div class="card-body d-flex justify-content-between">
            <div class="card mx-auto" style="width: 45%;">

                <div class="card-header d-flex justify-content-between align-items-center">
                    <span class="text-start">TODO LIST</span>
                    <div class="d-flex justify-content-end">
                        <!-- <NuxtLink to="/jjj" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD TASK</NuxtLink> -->
                        <div @click="onClick" data-bs-toggle="modal" data-bs-target="#exampleModal" >ADD TASK</div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">CREATE NEW TASK</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <Task />
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
                    <TaskDetail />
                </div>
            </div>

            <div class="card mx-auto" style="width: 45%;">
                <div class="card-header text-start">
                    DONE
                </div>
                <div class="card-body">

                </div>
            </div>
        </div>

    </div>
</template>


<script setup lang="ts">
    const onClick = () => {
        alert('ádsad')
    }
</script>

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
                        <NuxtLink to="" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD TASK
                        </NuxtLink>
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
                    <div style="height: calc(100vh - 170px); overflow-y: auto;">
                        <ul class="list">
                            <li v-for="todo in data" :key="todo.id">
                                <TaskDetail :title="todo.title" />
                            </li>
                        </ul>
                    </div>
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

const dataPath: string = 'https://jsonplaceholder.typicode.com/todos'
const data = ref([])
const getData = async () => {
    try {
        const response = await fetch(dataPath);
        if (!response.ok) {
            console.log('Network response was not ok')
            throw new Error('Network response was not ok');
        }
        const dt = await response.json();
        data.value = dt;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
onMounted(() => {
    getData();
})

</script>

<style scoped>
.list {
    list-style-type: none;
}

.list li {
    margin-top: 10px;
}
</style>
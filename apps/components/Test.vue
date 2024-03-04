<!-- Main.vue -->

<template>
    <div>
        <ul class="task-list">
            <li v-for="todo in data" :key="todo.id">
                <TaskDetail :title="todo.title" />
            </li>
        </ul>
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
.task-list {
    list-style-type: none;
    /* Loại bỏ dấu chấm đầu dòng */
}

.task-list li {
    margin-top: 10px;
    /* Cách nhau 10px */
}
</style>
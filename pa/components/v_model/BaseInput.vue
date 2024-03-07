<template>
    <div>
        <div>Input name: </div>
        <input v-model="inputName" type="text">
        <input v-model="inputName1" type="text">
    </div>
</template>

<script setup lang="ts">
const inputName = defineModel('a')
const inputName1 = defineModel('b')
</script>

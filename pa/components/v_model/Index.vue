<template>
    <VModelBaseInput v-model:a="name" v-model:b="name1" />
    {{ name }} - {{ name1 }}
</template>

<script setup lang="ts">
const name = ref('')
const name1 = ref('')
</script>

<style scoped></style>
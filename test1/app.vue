

<template>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
</template>

<script setup lang="ts">
    const message = ref('')
</script>
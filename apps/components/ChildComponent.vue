<template>
    <div class="card" style="background-color: yellow;">
        <p>đây là compo con</p>
        <p>message: {{ message }}</p>
        <p>chillMessage: {{ chillMessage }}</p>
        <input type="text" v-model="chillMessage">
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    message: String
}>()

const chillMessage = ref('')
props.message = chillMessage
</script>
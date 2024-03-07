<template>
    <div class="card" style="background-color: yellow;">
        <p>đây là compo con</p>
        <p>message: {{ message }}</p>
        <p>chillMessage: {{ chillMessage }}</p>
        <input @input="onchange" type="text" v-model="chillMessage">
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    message: String
}>()

const emit = defineEmits()

const chillMessage = ref('')
const onchange = () => emit('chillChange', chillMessage.value)

</script>
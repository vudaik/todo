<template>
    <div class="card" style="background-color: brown;">
        <p> tin nhắn ở compo cha {{ parentMessage }}</p>
        <input type="text" v-model="parentMessage">
        <ChildComponent :message="parentMessage" />
    </div>
</template>

<script setup lang="ts">

const parentMessage = ref('')
const parentEvent = () => {
    return 'hahahah'
}
</script>
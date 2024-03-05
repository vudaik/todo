<template>
    <div>
        <h1>Age Checker</h1>
        <div>
            <p>Current Age: {{ person.age }}</p>
            <button @click="validate">Increase Age</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const MAX_AGE = 35;
const person = reactive({
    name: 'John',
    age: 30
});
const validate = () => {
    if (person.age < MAX_AGE) {
        person.age += 1
    }
    else {
        console.log(`Warning: Age cannot exceed ${MAX_AGE}`);
    }
}
</script>

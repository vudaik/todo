<template>
    <div class="input-group">
        <input type="text" class="form-control" placeholder="Searching ..." :value="searchValue"
            @input="updateSearchValue">
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    value: string;
    onUpdateSearchValue: Function;
}>()

const searchValue = ref(props.value)

function updateSearchValue(event: Event) {
    searchValue.value = (event.target as HTMLInputElement).value
    // Gọi props function để cập nhật giá trị mới của search
    props.onUpdateSearchValue(searchValue.value)
}
</script>

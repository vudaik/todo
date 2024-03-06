<template>
    <div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">User ID</span>
            </div>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                v-model="detailTask.userID" :value="">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Title</span>
            </div>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                v-model="detailTask.title">
        </div>

    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ detailTask: Task, userIDModify: number, titleIDModify: string }>()
</script>


<style scoped>
.input-group.mb-3 {
    transition: margin 0.2s;
    margin-left: 0;
}

.input-group.mb-3:hover {
    margin-left: -10px;
}

.input-group-prepend {
    width: 110px;
}

.input-group-prepend span {
    margin-right: 10px;
}
</style>
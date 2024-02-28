<template>
    <div>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">ID</span>
            </div>
            <input type="text" class="form-control" placeholder="Identified in the job list" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">User ID</span>
            </div>
            <input type="text" class="form-control" placeholder="User identification in the system" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Title</span>
            </div>
            <input type="text" class="form-control" placeholder="Short definition of job details" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Complete</span>
            </div>
            <input type="text" class="form-control" placeholder="Job status" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
    </div>
</template>


<style>
.input-group.mb-3 {
    transition: margin 0.2s;
    margin-left: 0;
}

.input-group.mb-3:hover {
    margin-left: -10px;
}

.input-group-prepend {
    width: 110px;
    /* Đặt chiều rộng cố định cho các phần tử input-group-prepend */
}

.input-group-prepend span {
    margin-right: 10px;
    /* Thụt vào từ bên phải một chút */
}
</style>
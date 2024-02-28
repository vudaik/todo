<template>
    <div class="input-group">
        <input type="text" data-bs-toggle="modal" data-bs-target="#taskDetails" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons"  readonly>
        <button class="btn btn-outline-success" type="button">DONE</button>
        <button class="btn btn-outline-danger" type="button">DELETE</button>

        <div class="modal fade" id="taskDetails" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">TASK DETAILS</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <Task />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-primary">UPDATE</button>
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


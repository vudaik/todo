import axios from 'axios';



const taskList = reactive<Task[]>([])
const toDoList = reactive<Task[]>([])
const doneList = reactive<Task[]>([])
export const doneTaskSearch = ref('')
export const toDoTaskSearch = ref('')


const dataPath: string = 'https://jsonplaceholder.typicode.com/todos'
var draggedTask = ref<Task>() // không thể để reactive() ???? -> tìm hiểu thêm



interface Task {
    id: number;
    userID: number;
    title: string;
    completed: boolean;
}


const createTask = (params: Partial<Task> = {}): Task => {
    return reactive<Task>({
        id: params.id || 0,
        userID: params.userID || 0,
        title: params.title || '',
        completed: params.completed || false
    });
}


const fetchTasks = async (list: Task[]) => {
    try {
        const response = await axios.get(dataPath);
        const todos = response.data;

        toDoList.splice(0);
        taskList.splice(0); // Xóa tất cả các phần tử trong taskList
        doneList.splice(0); // Xóa tất cả các phần tử trong doneList

        todos.forEach((todo: any) => {
            const task = createTask({ id: todo.id, userID: todo.userId, title: todo.title, completed: todo.completed })
            if (task.completed === true) {
                doneList.push(task); // Thêm vào danh sách doneList nếu nhiệm vụ đã hoàn thành
            }
            else if (task.completed === false) {
                toDoList.push(task); // Thêm vào danh sách toDoList không phụ thuộc vào trạng thái hoàn thành
            }
            else {
                taskList.push(task); // Thêm vào danh sách taskList nếu nhiệm vụ chưa hoàn thành
            }
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchTasks(toDoList);


const pushTask = (list: Task[], task: Task) => {
    list.push(task);
}


const removeFromOriginalList = (task: Task) => {
    // Find and remove the task from the original list
    if (taskList.includes(task)) {
        removeFromList(taskList, task);
    } else if (toDoList.includes(task)) {
        removeFromList(toDoList, task);
    } else if (doneList.includes(task)) {
        removeFromList(doneList, task);
    }
}


const removeFromList = (list: Task[], task: Task) => {
    const index = list.findIndex(item => item === task);
    if (index !== -1) {
        list.splice(index, 1);
    }
}


// Export Event


export const filteredToDoList = computed(() => {
    const filteredList = toDoList
        .filter(task => task.title.toLowerCase().includes(toDoTaskSearch.value.toLowerCase()));
    return filteredList.sort((a, b) => a.title.localeCompare(b.title));
});


export const filteredDoneList = computed(() => {
    const filteredList = doneList
        .filter(task => task.title.toLowerCase().includes(doneTaskSearch.value.toLowerCase()));
    return filteredList.sort((a, b) => a.title.localeCompare(b.title));
});


export const handleDragStart = (event: DragEvent, task: Task) => {
    draggedTask.value = task
    event.dataTransfer?.setData('text/plain', 'This text may be dragged')
    console.log('đang kéo', draggedTask.value.title)
}


export const handleDragOver = (event: DragEvent, listName: string) => {
    event.preventDefault();
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
        console.log('Đang kéo xuống:', listName);

        if (draggedTask.value) {
            removeFromOriginalList(draggedTask.value);
            switch (listName) {
                case 'taskList':
                    pushTask(taskList, draggedTask.value);
                    break;
                case 'toDoList':
                    pushTask(toDoList, draggedTask.value);
                    break;
                case 'doneList':
                    pushTask(doneList, draggedTask.value);
                    break;
                default:
                    break;
            }
        }
    }
}





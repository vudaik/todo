import axios from 'axios'

const DATA_PATH: string = 'https://jsonplaceholder.typicode.com/todos'
const toDoList = reactive<Task[]>([])
const doneList = reactive<Task[]>([])
var draggedTask = ref<Task>() // không thể để reactive() ???? -> tìm hiểu thêm
export const doneTaskSearch = ref('')
export const toDoTaskSearch = ref('')


export interface Task {
    id: number
    userID: number
    title: string
    completed: boolean
}


const getID = () => { return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000 }


const createTask = (params: Partial<Task> = {}): Task => {
    return reactive<Task>({
        id: getID(),
        userID: params.userID || 0,
        title: params.title || '',
        completed: params.completed || false
    });
}


const fetchTasks = async (list: Task[]) => {
    try {
        const response = await axios.get(DATA_PATH);
        const todos = response.data;

        toDoList.splice(0);
        doneList.splice(0); // Xóa tất cả các phần tử trong doneList

        todos.forEach((todo: any) => {
            const task = createTask({ id: todo.id, userID: todo.userId, title: todo.title, completed: todo.completed })
            if (task.completed === true) {
                doneList.push(task); // Thêm vào danh sách doneList nếu nhiệm vụ đã hoàn thành
            }
            else {
                toDoList.push(task); // Thêm vào danh sách toDoList không phụ thuộc vào trạng thái hoàn thành
            }
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchTasks(toDoList);  // học vòng đời rồi đặt get data trong nó


const pushTask = (list: Task[], task: Task) => { list.push(task) }


const removeFromOriginalList = (task: Task) => {
    if (toDoList.includes(task)) {
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


export const createNewTaskEvent = (task: Task, _userID: number, _title: string) => { 
    task.id = getID()
    task.userID = _userID
    task.title = _title
    task.completed = false
    console.log('create ', task.id, task.userID, task.title, task.completed)
    pushTask(toDoList, task) 
}


export const updateTaskEvent = (task: Task, _userID: number, _title: string) => {
    task.userID = _userID
    task.title = _title
    console.log('update ', task.id, task.userID, task.title, task.completed)
}


export const doneTaskEvent = (task: Task, _userID: number, _title: string) => {
    task.completed = true
    task.userID = _userID
    task.title = _title
    console.log('done ', task.id, task.userID, task.title, task.completed)
    removeFromList(toDoList, task)
    pushTask(doneList, task)
}


export const handleUpdateToDoTaskSearch = (newValue: string) => { toDoTaskSearch.value = newValue }


export const handleUpdateDoneTaskSearch = (newValue: string) => { doneTaskSearch.value = newValue }




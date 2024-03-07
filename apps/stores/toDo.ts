import { defineStore } from 'pinia'; 
import axios from 'axios';

const DATA_PATH: string = 'https://jsonplaceholder.typicode.com/todos'; 

export interface Task {
    id: number;
    userID: number;
    title: string;
    completed: boolean;
}

export const useToDoStore = defineStore({
    id: 'toDo', 
    state: () => ({
        toDoList: [] as Task[], 
        doneList: [] as Task[], 
        draggedTask: null as Task | null, 
        doneTaskSearch: '', 
        toDoTaskSearch: '', 
    }),
    getters: {
        // Getter to filter and sort the to-do tasks list
        filteredToDoList(state) {
            return state.toDoList.filter(task => task.title.toLowerCase().includes(state.toDoTaskSearch.toLowerCase()))
                .sort((a, b) => a.title.localeCompare(b.title));
        },
        // Getter to filter and sort the done tasks list
        filteredDoneList(state) {
            return state.doneList.filter(task => task.title.toLowerCase().includes(state.doneTaskSearch.toLowerCase()))
                .sort((a, b) => a.title.localeCompare(b.title));
        },
    },
    actions: {
        
        async fetchTasks() {
            try {
                const response = await axios.get(DATA_PATH);
                const todos = response.data;

                this.toDoList.splice(0);
                this.doneList.splice(0); 

                todos.forEach((todo: any) => {
                    const task = this.createTask({
                        id: todo.id,
                        userID: todo.userId,
                        title: todo.title,
                        completed: todo.completed
                    });
                    if (task.completed === true) {
                        this.pushTask(this.doneList, task); 
                    } else {
                        this.pushTask(this.toDoList, task); 
                    }
                });
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        },

        createTask(params: Partial<Task> = {}): Task {
            return {
                id: this.getID(),
                userID: params.userID || 0,
                title: params.title || '',
                completed: params.completed || false
            }
        },

        pushTask(list: Task[], task: Task) {
            list.push(task);
        },

        removeFromOriginalList(task: Task) {
            if (this.toDoList.includes(task)) {
                this.removeFromList(this.toDoList, task);
            } else if (this.doneList.includes(task)) {
                this.removeFromList(this.doneList, task);
            }
        },
        
        removeFromList(list: Task[], task: Task) {
            const index = list.findIndex(item => item === task);
            if (index !== -1) {
                list.splice(index, 1);
            }
        },

        // Updating the search keyword for the to-do tasks list
        handleUpdateToDoTaskSearch(newValue: string) {
            this.toDoTaskSearch = newValue;
        },

        handleUpdateDoneTaskSearch(newValue: string) {
            this.doneTaskSearch = newValue;
        },

        handleDragStart(event: DragEvent, task: Task) {
            this.draggedTask = task;
            event.dataTransfer?.setData('text/plain', 'This text may be dragged');
            console.log('Dragging', this.draggedTask?.title);
        },

        handleDragOver(event: DragEvent, listName: string) {
            event.preventDefault();
            if (event.dataTransfer && this.draggedTask) {
                event.dataTransfer.dropEffect = 'move';
                console.log('Dragging over:', listName);

                this.draggedTask.completed = !this.draggedTask.completed
                this.removeFromOriginalList(this.draggedTask);
                switch (listName) {
                    case 'toDoList':
                        this.pushTask(this.toDoList, this.draggedTask);
                        break;
                    case 'doneList':
                        this.pushTask(this.doneList, this.draggedTask);
                        break;
                    default:
                        break;
                }
            }
        },

        getID(): number {
            return Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
        },

        createNewTaskEvent(task: Task, _userID: number, _title: string) {
            task.id = this.getID(); 
            task.userID = _userID;
            task.title = _title;
            task.completed = false;
            console.log('Creating task:', task.id, task.userID, task.title, task.completed);
            this.pushTask(this.toDoList, task); 
        },

        updateTaskEvent(task: Task, _userID: number, _title: string) {
            task.userID = _userID
            task.title = _title
            console.log('update ', task.id, task.userID, task.title, task.completed)
        },

        doneTaskEvent (task: Task, _userID: number, _title: string) {
            task.completed = true
            task.userID = _userID
            task.title = _title
            console.log('done ', task.id, task.userID, task.title, task.completed)
            this.removeFromList(this.toDoList, task)
            this.pushTask(this.doneList, task)
        }
    },
});

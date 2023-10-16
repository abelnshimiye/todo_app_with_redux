import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
    tasks: [],
    loading: false,
    error: null
}

// creating a Silce to combine create reduce and create actions
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        // action: function
        apiRequested: (state, action) => {
            state.loading = true;
        },
        apiRequestFailed: (state, action) => {
            state.loading = false;
        },
        getTasks: (state, action) => {
            state.tasks = action.payload;
            state.loading = false;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            state.tasks.splice(index, 1);
        },
        completed: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            state.tasks[index].completed = action.payload.completed;
        }
    },
 
})

export const {apiRequested, apiRequestFailed ,getTasks, addTask, removeTask, completed} = taskSlice.actions
export default taskSlice.reducer;



// Action creators
const url = "/tasks"

export const loadTasks = () => apiCallBegan({
        url,
        onStart: apiRequested.type,
        onSuccess: getTasks.type,
        onError: apiRequestFailed.type
})


export const addNewTask = (task) => 
apiCallBegan({
    url,
    method: "POST",
    data: task,
    onSuccess: addTask.type,
})


export const updatedCompleted = task => apiCallBegan({
    url:`${url}/${task.id}`,
    method: "PATCH",
    data: task,
    onSuccess: completed.type
})


export const deleteTask = task => apiCallBegan({
    url:`${url}/${task.id}`,
    method: "DELETE",
    onSuccess: removeTask.type
})





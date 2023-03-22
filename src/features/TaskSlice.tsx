import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = [
    { task: "Create a task", completed: false, id: uuidv4() },
];

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        deleteTask: (state, action) => {
            const { id } = action.payload;
            const checkTask = state.find((task) => task.id === id);
            if (checkTask) return state.filter((task) => task.id !== id);
        },
        updateTask: (state, action) => {
            const { task, completed, id } = action.payload;
            const checkTask = state.find((task) => task.id === id);
            if (checkTask) {
                checkTask.task = task;
                checkTask.completed = completed;
            }
        },
        markAsCompleteTask: (state, action) => {
            const { completed, id } = action.payload;
            const checkTask = state.find((task) => task.id === id);
            if (checkTask) checkTask.completed = completed;
        },
    },
});

export const { addTask, deleteTask, updateTask, markAsCompleteTask } =
    taskSlice.actions;
export default taskSlice.reducer;

//src/store/slices/dayTasks.slice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DayTypeMap, TaskType} from "../../models/dayTasksType";
import { produce } from 'immer';

interface AddTaskPayload {
    date: string;
    task: TaskType;
}

interface RemoveTaskPayload {
    date: string;
    taskId: string;
}
const dayTasks = new Map<string, TaskType[]>([
    ['2024-01-25', [
        {
            id: '1',
            text: 'Task 1 for 2024-01-25',
            labelColor: ['blue'],
            labelText: ['Important']
        },
        {
            id: '2',
            text: 'Task 2 for 2024-01-25',
            labelColor: ['red'],
            labelText: ['Urgent']
        }
    ]],
    ['2024-01-26', [
        {
            id: '3',
            text: 'Task 1 for 2024-01-26',
            labelColor: ['green'],
            labelText: ['Work']
        }
    ]]
]);
const initialState: DayTypeMap = dayTasks;

export const dayTasksSlice = createSlice({
    name: 'dayTasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<AddTaskPayload>) => {
            const { date, task } = action.payload;
            produce(state, (draft) => {
                const tasks = draft.get(date) || [];
                draft.set(date, [...tasks, task]);
            });
        },
        removeTask: (state, action: PayloadAction<RemoveTaskPayload>) => {
            const { date, taskId } = action.payload;
            produce(state, (draft) => {
                const tasks = draft.get(date);
                if (tasks) {
                    const filteredTasks = tasks.filter(task => task.id !== taskId);
                    draft.set(date, filteredTasks);
                }
            });
        },
    },
});

export const dayTasksActions = dayTasksSlice.actions
export const dayTasksReducer = dayTasksSlice.reducer
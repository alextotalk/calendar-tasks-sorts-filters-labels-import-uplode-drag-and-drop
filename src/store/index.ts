import {configureStore} from '@reduxjs/toolkit'
import {holidaysAPI} from "./holidaysAPI/fetchHoliday.API";
import {setupListeners} from "@reduxjs/toolkit/query";
import {dayTasksReducer} from "./slices/dayTasks.slice";


export const store = configureStore({
  reducer: {

      [holidaysAPI.reducerPath]: holidaysAPI.reducer,
      dayTasks: dayTasksReducer,

  },
    // Adding the API middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(holidaysAPI.middleware),
 })


setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

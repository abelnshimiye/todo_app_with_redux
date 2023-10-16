import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employe";
import taskReducer from "./task";
import error from "./middleware/error";
import api from "./middleware/api";



const store = configureStore({
    reducer: {
        tasks: taskReducer,
        employees: employeeReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
         api, 
         error,
        ],
    // order of this middleware matters
});

export default store;

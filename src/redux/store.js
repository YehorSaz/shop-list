import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {itemReducer} from "./slices";


const rootReducer = combineReducers({
        item: itemReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}
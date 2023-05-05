import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    itemForEdit: null,
    trigger: null
}

const slice = createSlice({
    name: 'itemSlice',
    initialState,
    reducers: {

        setItem: (state, action) => {
            state.items = action.payload;
        },
        create: (state, action) => {
            state.items.push({item: action.payload.item, id: state.items.length + 1})
        },
        changeTrigger: state => {
            state.trigger = !state.trigger;
        },
        deleteItem: (state, action) => {
            const itemIndex = state.items.findIndex(value => value.id === action.payload)
            state.items.splice(itemIndex, 1)
        },
        editItem: (state, action) => {
            state.itemForEdit = action.payload;
        },
        updateItem:(state, action) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            state.items[itemIndex].item = action.payload.item
            }
        }
    }
);

const {reducer: itemReducer, actions} = slice;

const itemActions = {
    ...actions
}

export {
    itemReducer,
    itemActions
}
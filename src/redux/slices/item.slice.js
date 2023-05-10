import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    itemForEdit: null,
    trigger: null,
    count: null,
    idForSort: null,
    classNames: []
}

const slice = createSlice({
        name: 'itemSlice',
        initialState,
        reducers: {

            addClassName: (state, action) => {
                if (!state.classNames.includes(action.payload)) {
                    state.classNames.push(action.payload)
                }
            },
            removeClassName: (state, action) => {
                const dellClass = state.classNames.findIndex(value => value === action.payload);
                state.classNames.splice(dellClass, 1)
            },

            setItem: (state, action) => {
                state.items = action.payload;
            },
            createItem: (state, action) => {
                state.items.push({item: action.payload.item, id: state.items.length + 1})
                state.count++
            },
            changeTrigger: state => {
                state.trigger = !state.trigger;
            },
            deleteItem: (state, action) => {
                const itemIndex = state.items.findIndex(value => value.id === action.payload)
                state.items.splice(itemIndex, 1)
                state.count--
            },
            editItem: (state, action) => {
                state.itemForEdit = action.payload;
            },
            updateItem: (state, action) => {
                const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
                state.items[itemIndex].item = action.payload.item
            },
            itemCountDec: state => {
                state.count--
            },
            itemCountInc: state => {
                state.count++
            },
            sortItem: (state, action) => {
                state.idForSort = action.payload;
            },
            deleteAll: (state) => {
                state.items.splice(0, state.items.length)
                state.count = null
                state.classNames = []
            },
            resetTrigger: state => {
                state.trigger = null
            },


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
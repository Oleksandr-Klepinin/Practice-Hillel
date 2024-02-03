import slice from "./slice.js";
import { v4 as uuidv4 } from 'uuid';

const getData = () => {
    return (dispatch) => {
        const data = JSON.parse(localStorage.getItem('items'));
        dispatch(slice.actions.setItems(data));
        dispatch(slice.actions.setLoading(false));
    };
};

const setData = (event) => (dispatch, getState) => {
    event.preventDefault();
    const state = getState();
    dispatch(slice.actions.setLoading(true));
    const newItem = {
        id: uuidv4(),
        text: event.target.text_input.value
    };
    setTimeout(() => {
        dispatch(slice.actions.addItem(newItem));
        dispatch(slice.actions.setLoading(false));
    }, 0);
    localStorage.setItem('items', JSON.stringify([...state.todo.items, newItem]));
};

const removeItem = (itemId) => (dispatch, getState) => {
    const state = getState();
    const updatedItems = state.todo.items.filter(item => item.id !== itemId);
    dispatch(slice.actions.setItems(updatedItems));
    localStorage.setItem('items', JSON.stringify(updatedItems));
};

export {
    getData,
    setData,
    removeItem
};
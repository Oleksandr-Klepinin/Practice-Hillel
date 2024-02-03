export const logger = (store) => {
    console.log('store', store);
    return (dispatch) => {
        console.log('dispatch', dispatch);
        return (action) => {
            console.log('before', store.getState());
            console.log('action', action);
            const res = dispatch(action);
            console.log('after', store.getState());
            return res;
        }
    }
}
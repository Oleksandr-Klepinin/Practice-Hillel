import { useDispatch } from 'react-redux';
import { deleteItemAsyncAction } from "../../engine/todo/saga/asyncActions.js";

export function ListItem(props) {
    const dispatch = useDispatch();
    const { children } = props;

    const onDelete = () => {
        dispatch(deleteItemAsyncAction(children));
    };

    return (
        <li className="list_component">
            <label htmlFor={name} className="list_component_text">{children}</label>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}
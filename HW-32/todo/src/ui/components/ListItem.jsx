import { useDispatch } from "react-redux";
import { removeItem } from "../../engine/todo/thunks.js";

export function ListItem(props) {
    const { id, children } = props;
    const dispatch = useDispatch();

    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };

    return (
        <li className="list_component">
            <label className="list_component_text">{children}</label>
            <button onClick={() => handleRemoveItem(id)}>Remove</button>
        </li>
    );
}
import {useSelector} from "react-redux";
import {ListItem} from "./ListItem.jsx";
import selectors from "../../engine/todo/selectors.js";

export function List() {
    const items = useSelector(selectors.items);
    return (
        <>
            <br/>
            <h1>Todos</h1>
            {
                items.length === 0
                    ? <span>No data</span>
                    : (
                        <ul className="list">
                            {items.map((item, index) => <ListItem key={index}>{item}</ListItem>)}
                        </ul>
                    )
            }
        </>
    )
}
import {useDispatch, useSelector} from "react-redux";
import {ListItem} from "./ListItem.jsx";
import selectors from "../../engine/todo/redux/selectors.js";
import {useEffect} from "react";
import {getDataAsyncAction} from "../../engine/todo/saga/asyncActions.js";


export function List() {
    const items = useSelector(selectors.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAsyncAction())
    }, []);
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
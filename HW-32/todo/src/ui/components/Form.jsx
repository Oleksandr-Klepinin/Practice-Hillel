import { useState } from 'react';
import { Button } from "./Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import selectors from "../../engine/todo/selectors.js";
import { setData } from "../../engine/todo/thunks.js";

export function Form() {
    const dispatch = useDispatch();
    const loading = useSelector(selectors.loading);
    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(setData(event));
        setInputValue('');
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <input
                className="form-control form-control-lg"
                name="text_input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <Button className="btn-primary" disabled={loading}>Send</Button>
        </form>
    )
}
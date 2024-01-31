import {useDispatch} from "react-redux"
import Button from "./Button.jsx";
import Content from "./Content.jsx";
import counterSlice from "../../engine/slice/counter.js";

export default function () {
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(counterSlice.actions.increment())
    }
    const onDecrement = () => {
        dispatch(counterSlice.actions.decrement())
    }
    return (
        <div>
            <Content />
            <p>
                <Button onClick={onIncrement}>+</Button>
                <Button onClick={onDecrement}>-</Button>
            </p>
        </div>
    )
}
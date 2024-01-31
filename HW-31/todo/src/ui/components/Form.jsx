import {Button} from "./Button.jsx";
import {useDispatch} from "react-redux";
import slice from "../../engine/todo/slice.js";
export function Form() {
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(slice.actions.setLoading(true))
        setTimeout(() => {
            dispatch(slice.actions.addItem(event.target.text_input.value))
            dispatch(slice.actions.setLoading(false))
        },0)
    }
    return (
        <form className="form" onSubmit={onSubmit}>
            <input className="form-control form-control-lg" name="text_input" type="text"/>
            <Button className="btn-primary">Send</Button>
        </form>
    )
}
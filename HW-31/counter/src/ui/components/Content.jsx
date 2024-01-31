import { useSelector} from "react-redux";
import {selectorsValue} from "../../engine/slice/counter.js";

export default function () {
    const counterState = useSelector(selectorsValue)
    return (
        <p>
            Value: <span>{counterState}</span>
        </p>
    )
}
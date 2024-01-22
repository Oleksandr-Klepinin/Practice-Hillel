import {useContext} from "react";
import {ThemeContext} from "../helpers/context.js";

function ChangeColor() {
    const [ color, setColor ] = useContext(ThemeContext);
    const handleClick = () => {
        setColor({
            colorBg: color.colorBg === 'white' ? 'black' : 'white',
            colorFont: color.colorFont === 'black' ? 'white' : 'black'
        })
    }

    return <button style={{color: color.colorFont}} onClick={handleClick}>Toggle Color</button>
}

export default ChangeColor;
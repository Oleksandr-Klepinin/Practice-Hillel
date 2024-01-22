import routers from "../helpers/routers.js";
import Link from "./Link.jsx";
import Logo from "./Logo.jsx";
import ChangeColor from "./ChangeColor.jsx";
import {useContext} from "react";
import {ThemeContext} from "../helpers/context.js";

function Header() {
    const [color] = useContext(ThemeContext)

    return (
        <header style={{ background: color.colorBg}} className="flex justify-between">
            <Logo />
            <ul className="flex gap-9 flex-grow-1">
                <li className="m-2">
                    <Link to={routers.main}>Home</Link>
                </li>
                <li className="m-2">
                    <Link to={routers.about}>About</Link>
                </li>
                <li className="m-2">
                    <Link to={routers.todo}>TodoList</Link>
                </li>
                <li className="m-2">
                    <Link to={routers.contact}>Contact</Link>
                </li>
            </ul>
            <ChangeColor/>
        </header>
    )
}

export default Header
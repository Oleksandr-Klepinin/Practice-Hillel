import Link from "./Link.jsx";
import routers from "../helpers/routers.js";
import {useContext} from "react";
import {ThemeContext} from "../helpers/context.js";

function Footer() {
    const [color] = useContext(ThemeContext)

    return (
        <footer style={{ background: color.colorBg}} className="bg-white rounded-lg m-4">
            <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                  <Link href="tel:+38(073)999-29-07">+38 (073)
                    999-29-07</Link>
              </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="px-1">
                        <Link to={routers.main}>Home</Link>
                    </li>
                    <li className="px-1">
                        <Link to={routers.about}>About</Link>
                    </li>
                    <li className="px-1">
                        <Link to={routers.todo}>TodoList</Link>
                    </li>
                    <li className="px-1">
                        <Link to={routers.contact}>Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
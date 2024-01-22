import {ThemeContext} from "../helpers/context.js";
import {useContext} from "react";

function Contact() {
    const [color] = useContext(ThemeContext)

    return (
        <main>
            <div style={{background: color.colorBg, color: color.colorFont}} className="text-center">
                <h1 className="text-2xl font-bold mb-4">Contact Information:</h1>
                <p>Tel: <a href="tel:+38(073)999-29-07" target="_blank" rel="noreferrer"
                           className="text-blue-500 hover:text-red-500 transition-colors duration-300">+38 (073)
                    999-29-07</a></p>
                <p>E-mail: <a href="mailto:aleksandrklepinin29@gmail.com" target="_blank" rel="noreferrer"
                              className="text-blue-500 hover:text-red-500 transition-colors duration-300">aleksandrklepinin29@gmail.com</a>
                </p>
                <p>Skype: <a href="skype:aleksandrklepinin29?call" target="_blank" rel="noreferrer"
                             className="text-blue-500 hover:text-red-500 transition-colors duration-300">aleksandrklepinin29</a>
                </p>
            </div>
        </main>
    )
}

export default Contact;
import {ThemeContext} from "../helpers/context.js";
import {useContext} from "react";

function Index() {
    const [color] = useContext(ThemeContext)

    return (
        <main>
            <section style={{ background: color.colorBg}} className="relative flex-grow isolate overflow-hidden bg-white px-6 md:px-12 py-12">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img className="mx-auto h-[20rem]"
                         src="/photo.jpg" alt="photo"/>
                    <figure className="mt-10">
                        <blockquote style={{color: color.colorFont}}
                            className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p>“I want to get a Junior Front-End Developer position because I believe that I can apply my knowledge and experience for effective development in this area.”</p>
                        </blockquote>
                    </figure>
                </div>
            </section>
        </main>
    )
}

export default Index;
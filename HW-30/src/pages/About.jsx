import {ThemeContext} from "../helpers/context.js";
import {useContext} from "react";

function About() {
    const [color] = useContext(ThemeContext)

    return (
        <main>
            <div style={{background: color.colorBg, color: color.colorFont}} className="ml-20">
                <section>
                    <h2 className="text-2xl font-bold m-2">Work experience</h2>
                    <h3>«Grand Dominie Limited» (06/2022 – now)</h3>
                    <p>Outreach Specialist</p>
                    <h3>«Loostdorf» LLC (03/2017 - 06/2022)</h3>
                    <p>Supervisor</p>
                    <h3>«Gorizont» LLC (11/2015 - 02/2017)</h3>
                    <p>Regional Manager</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold m-2">Education</h2>
                    <p>07/2006 - 07/2012</p>
                    <p>National Technical University “KPI”</p>
                    <p>Specialty: Department of International Business and Finance</p>
                    <p>Master&apos;s Degree of Economic</p>
                </section>
                <section>
                <h2 className="text-2xl font-bold m-2">Languages</h2>
                    <p>Ukrainian - advanced;</p>
                    <p>Russian - native;</p>
                    <p>English - intermediate;</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold m-2">Hobby</h2>
                    <p>Sport, psychology, fishing, foreign languages, traveling.</p>
                </section>
            </div>
        </main>
    )
}

export default About;
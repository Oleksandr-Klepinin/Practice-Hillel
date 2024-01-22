import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Index from './pages/Index.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import TodoList from './pages/TodoList.jsx'
import { ThemeContext } from "./helpers/context.js";
import routers from "./helpers/routers.js";

function App() {
    const [color, setColor] = useState({
        colorFont: 'black',
        colorBg: 'white'
    });

    return (
        <ThemeContext.Provider value={[color, setColor]}>
            <BrowserRouter>
                <div style={{background: color.colorBg}}>
                    <div className="container mx-auto flex flex-col justify-between h-[100vh]">
                        <Header/>
                        <Routes>
                            <Route path={routers.main} element={<Index />} />
                            <Route path={routers.about} element={<About />} />
                            <Route path={routers.todo} element={<TodoList />} />
                            <Route path={routers.contact} element={<Contact />} />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </ThemeContext.Provider>
    )
}

export default App;
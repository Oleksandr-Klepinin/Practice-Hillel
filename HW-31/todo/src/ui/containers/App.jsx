import { Provider } from "react-redux";
import {Form} from "../components/Form.jsx";
import {List} from "../components/List.jsx";
import { store } from "../../shared/store.js";
import {Footer} from "../components/Footer.jsx";

function App() {
    return (
        <Provider store={store}>
            <div className="container p-1"
                 style={{backgroundColor: 'blueviolet', maxWidth: '700px', margin: 'auto', padding: '10px'}}>
                <h1>TODO</h1>
                <Form/>
                <List/>
                <Footer />
            </div>
        </Provider>
    )
}

export default App

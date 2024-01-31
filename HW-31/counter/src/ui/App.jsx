import { Provider } from 'react-redux';
import Wrapper from "./components/Wrapper.jsx";
import { store} from "../engine/store.js";
import './styles.css';

function App() {
  return (
    <Provider store={store}>
        <Wrapper />
    </Provider>
  )
}

export default App

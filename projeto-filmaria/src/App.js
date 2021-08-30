import Routes from "./routes";
import './styles.css'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'


//let url = `https://sujeitoprogramador.com/r-api/?api=filmes/`;

function App() {
  return (
    <div className="app">
      
      <Routes></Routes>
      <ToastContainer autoClose={3000}></ToastContainer>
    </div>
  );
}

export default App;

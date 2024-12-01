import logo from './logo.svg';
import './App.css';
import Testcomponent from "./components/Testcomponent"
import NavBar from './components/NavBar';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      {/* <Testcomponent></Testcomponent> */}
      <NavBar></NavBar>
      <Products></Products>
    </div>
  );
}

export default App;

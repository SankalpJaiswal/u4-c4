import logo from "./logo.svg";
import "./App.css";
import { MainRoutes } from "./Routes/MainRoutes";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <MainRoutes />

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
  
        </Routes>
      </header>
    </div>
  );
}

export default App;

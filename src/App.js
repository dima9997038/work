import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import TestOauth2 from "./components/TestOauth2";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aas" element={<TestOauth2/>}/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;

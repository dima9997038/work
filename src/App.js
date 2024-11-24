import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import TestOauth2 from "./components/TestOauth2";

function App() {
    const url = window.location.href;
    const pathname = window.location.pathname;
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    return (
        <div>
            <h1>Start</h1>
            You are currently accessing <b>{url}</b><br />
            Pathname: <b>{pathname}</b><br />
            Protocol: <b>{protocol}</b><br />
            Hostname: <b>{hostname}</b>
        </div>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Home/>}/>
        //         <Route path="/aas" element={<TestOauth2/>}/>
        //
        //     </Routes>
        // </BrowserRouter>
    );
}

export default App;

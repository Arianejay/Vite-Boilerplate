import React from "react";
import "./stylesheets/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HomeRedux from "./pages/HomeRedux";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<HomeRedux />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

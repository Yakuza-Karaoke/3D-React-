import React from "react"
import ReactDOM from "react-dom/client"
import "./style/style.css"

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Main from "./pages/main.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Main />} />
                {/* <Route path="" element={} />
                <Route path="" element={} />
                <Route path="" element={} />
                <Route path="" element={} />
                <Route path="" element={} />
                <Route path="" element={} /> */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
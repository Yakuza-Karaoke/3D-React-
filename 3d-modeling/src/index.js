import React from "react"
import ReactDOM from "react-dom/client"
import "./style/style.css"

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Main from "./pages/main.js"
import Deadline from "./pages/deadlines"
import Guarantee from "./pages/guarantee"
import Order from "./pages/order"
import Contacts from "./pages/contacts"
import MaterialType from "./pages/material-type"
import ServicePrize from "./pages/service-prize"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/deadlines" element={<Deadline />} />
                <Route path="/guarantee" element={<Guarantee />} />
                <Route path="/order" element={<Order />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/material-type" element={<MaterialType />} />
                <Route path="/service-prize" element={<ServicePrize />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
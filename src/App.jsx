import React from "react";
import ReactDOM from 'react-dom/client'
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantsMenu from "./components/RestaurantMenu";

// Header section

function App(){
    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
                <Route path="/city/delhi/:id" element={<RestaurantsMenu/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
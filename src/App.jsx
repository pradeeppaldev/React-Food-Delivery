import React from "react";
import ReactDOM from 'react-dom/client'
import Header from "./components/Header";
import FoodOption from "./components/FoodOption";
import GroceryOption from "./components/GroceryOption";
import DineOption from "./components/DineOption";
import Restaurant from "./components/Restaurant";

// Header section

function App(){
    return(
        <>
        <Header></Header>
        <FoodOption></FoodOption>
        <GroceryOption></GroceryOption>
        <DineOption></DineOption>
        <Restaurant></Restaurant>
        </>
    )
}

export default App;
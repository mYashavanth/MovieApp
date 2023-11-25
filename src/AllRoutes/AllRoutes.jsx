import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Details from "../Pages/Details";

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:id" element={<Details/>}/>
        </Routes>
        </>
    )
}
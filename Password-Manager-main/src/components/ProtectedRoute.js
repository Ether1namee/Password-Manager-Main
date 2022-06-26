import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./Authentication/Login";

function ProtectedRoute(){
    const isLoggedIn = useSelector(state => state.loggedIn)
    

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
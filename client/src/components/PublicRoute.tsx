
import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
type childType = {
    children: React.ReactNode;
};

const PublicRoute:React.FC<childType> = ({ children }) => {
    const [cookies] = useCookies(["token"]);
    if (cookies?.token) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};

export default PublicRoute;

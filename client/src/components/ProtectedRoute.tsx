import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import {  useSelector } from "react-redux";
import { RootState } from "../types/redux";
type ProtectedRouteType = {
    children: ReactNode;
};
function ProtectedRoute({ children }: ProtectedRouteType) {
    const { user } = useSelector((state: RootState) => state.userSlice);

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;

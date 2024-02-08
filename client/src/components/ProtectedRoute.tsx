/* eslint-disable react/prop-types */
// import React from "react";
import {
    Navigate,
    //  useNavigate
} from "react-router-dom";
import { ReactNode, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import { useCookies } from "react-cookie";
import { RootState } from "../types/redux";
import { useQuery } from "@tanstack/react-query";
type ProtectedRouteType = {
    children: ReactNode;
};
function ProtectedRoute({ children }: ProtectedRouteType) {
    const [cookies] = useCookies();

    const { user } = useSelector((state: RootState) => state.userSlice);
    const dispatch = useDispatch();

    useQuery({
        queryKey: ["get-user-info-by-id"],
        queryFn: async () => {
            dispatch(showLoading());
                AxiosConnection.post("/api/user/get-user-info-by-id")
                    .then((response) => {
                        if (response.data.success) {
                            dispatch(setUser(response.data.data));
                            dispatch(hideLoading());
                        }
                    })
                    .catch((error) => dispatch(hideLoading()));
        },
    });

    if (cookies?.token) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;
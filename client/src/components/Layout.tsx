/* eslint-disable react/prop-types */
import { ReactNode, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { useWindowSize } from "@uidotdev/usehooks";
// import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./SID_BAR/Sidebar";

import UserProfileButton from "../pages/User/UserProfileButton";
import { RootState } from "../types/redux";
type LayoutType = {
    children: ReactNode;
};
function Layout({ children }: LayoutType) {
    const { width } = useWindowSize();
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const { user } = useSelector((state: RootState) => state.userSlice);

    const navigate = useNavigate();

    return (
        <>
            <div
                className={`page-wrapper chiller-theme
         ${width && width < 768 && collapsed && "toggled"}
        ${(width && width >= 768 && collapsed) || (width && width >= 768 && "toggled")}`}>
                <Sidebar setCollapsed={setCollapsed} collapsed={collapsed} />

                <div className="content">
                    <main className="page-content pl-[250px] ">
                        <div className="header">
                            <i className="ri-close-fill header-action-icon" onClick={() => setCollapsed(!collapsed)} />

                            <div className="d-flex align-items-center px-4">
                                {user && user.unseenNotifications && (
                                    <Badge count={user.unseenNotifications.length}>
                                        <i
                                            onClick={() => navigate("/notifications")}
                                            className="ri-notification-line header-action-icon pl-3"></i>
                                    </Badge>
                                )}

                                <Link className="anchor mx-2" to="/profile">
                                    <UserProfileButton />
                                </Link>
                            </div>
                        </div>

                        <div className="body">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Layout;

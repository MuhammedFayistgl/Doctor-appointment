/* eslint-disable react/prop-types */
import { ReactNode, useState } from "react";
import "../layout.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import { useWindowSize } from "@uidotdev/usehooks";
// import { FaBarsStaggered } from "react-icons/fa6";
import Sidebar from "./SID_BAR/Sidebar";

import UserProfileButton from "../pages/User/UserProfileButton";
import { RootState } from "../types/redux";
type LayoutType = {
	children:ReactNode
}
function Layout({ children }:LayoutType) {
	const { width } = useWindowSize();
	const [collapsed, setCollapsed] = useState(true);
	const [widthTogle, setwidthTogle] = useState(`toggled`);
	const { user } = useSelector((state:RootState) => state.userSlice);

	const navigate = useNavigate();

	// /apply-doctor

	return (
		<>
			{/* <div className="main">
				<div className="d-flex layout"> */}
			{/* <div className="sidebar">
						<div className="sidebar-header">
							<h1 className="logo">SH</h1>
							<h1 className="role">{role}</h1>
						</div>

						<div className="menu">
							{menuToBeRendered.map((menu, i) => {
								const isActive = location.pathname === menu.path;
								return (
									<div key={i} className={`d-flex menu-item ${isActive && "active-menu-item"}`}>
										<Link to={menu.path}>
											<i className={menu.icon}></i>
										</Link>
										{!collapsed && <Link to={menu.path}>{menu.name}</Link>}
									</div>
								);
							})}
							<div className={`d-flex menu-item `}>
								<Alertdialogs coll={collapsed} />
							</div>
						</div>
					</div> */}
			<div className={`page-wrapper chiller-theme ${collapsed || width > 640 ? widthTogle : ""}`}>
				{/* <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
					<FaBarsStaggered style={{ color: "#ffff", fontSize: 25 }} onClick={() =>{ setCollapsed(true),setwidthTogle('toggled')}} />
				</a> */}
				<Sidebar collapsed={collapsed} setCollapsed={setCollapsed} setwidthTogle={setwidthTogle} />

				<div className="content">
					<main className="page-content">
						<div className="header">
							{!collapsed && (
								<i
									className="ri-close-fill header-action-icon"
									onClick={() => {
										setCollapsed(!collapsed), setwidthTogle("toggled");
									}}
								></i>
							)}

							<div className="d-flex align-items-center px-4">
								<Badge count={user?.unseenNotifications.length} onClick={() => navigate("/notifications")}>
									<i className="ri-notification-line header-action-icon pl-3"></i>
								</Badge>

								<Link className="anchor mx-2" to="/profile">
									<UserProfileButton user={user} />
								
								
								</Link>
							</div>
						</div>

						<div className="body">{children}</div>
					</main>
				</div>
			</div>
			{/* </div>
			</div> */}
		</>
	);
}

export default Layout;

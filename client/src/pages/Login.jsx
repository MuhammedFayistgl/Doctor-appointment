import React from "react";
// import { Button, Form, Input } from "antd";
// import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import { useCookies } from "react-cookie";
import { FaUserDoctor } from "react-icons/fa6";
import { Form, Button } from "rsuite";
import { InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";

import "./style.css";

function Login() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie, removeCookie] = useCookies("token");
	const [visible, setVisible] = React.useState(false);
	const [formValue, setFormValue] = React.useState({});
	const location = useLocation();
	const handleChange = () => {
		setVisible(!visible);
	};
	const onFinish = async (values) => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.post("api/user/login", values);
			dispatch(hideLoading());
			if (response.data.success) {
				setCookie("token", response.data.data);
				toast.success(response.data.message);
				navigate("/");
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			dispatch(hideLoading());
			toast.error("Something went wrong");
		}
	};
	// ${geturlendpoint === 'login' && "active"}
	return (
		<>
			<div className="wrapper fadeInDown">
				<div id="formContent">
					{/* Tabs Titles */}
					<Link to={"/login"} className={location.pathname === `/login` ? `active h2`  :`inactive h2 underlineHover`}>
						{" "}
						Sign In{" "}
					</Link>
					<Link to={"/register"} className={location.pathname === `/register` ? `active h2`  :`inactive h2 underlineHover`}>
					Register
					</Link>

					{/* Icon  */}
					<div className="fadeIn first" style={{ marginBottom: 18 }}>
						<FaUserDoctor className="DoctorSvg" fontSize={100} />
					</div>

					{/* Login Form  */}
					<Form layout="inline" onChange={setFormValue} formValue={formValue}>
						<Form.Group controlId="username-8">
							<Form.Control placeholder="Username" name="email" />
						</Form.Group>

						<Form.Group controlId="password-8">
							<InputGroup inside>
								<Form.Control name="password" type={visible ? "text" : "password"} />
								<InputGroup.Button onClick={handleChange}>{visible ? <EyeIcon /> : <EyeSlashIcon />}</InputGroup.Button>
							</InputGroup>
						</Form.Group>
						<Button
							onClick={() => onFinish(formValue)}
							color="cyan"
							appearance="ghost"
							style={{ marginBottom: 20, width: 223 }}
							Type="submit"
						>
							Login
						</Button>
					</Form>

					{/* Remind Passowrd */}
					<div id="formFooter">
						<a className="underlineHover a" href="#">
							Forgot Password?
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
{
	// <div className="authentication">
	// 	<div className="authentication-form card p-3">
	// 		<h1 className="card-title">Welcome Back</h1>
	// 		<Form layout="vertical" onFinish={onFinish}>
	// 			<Form.Item label="Email" name="email">
	// 				<Input placeholder="Email" value={"USER@gmail.com"} />
	// 			</Form.Item>
	// 			<Form.Item label="Password" name="password">
	// 				<Input placeholder="Password" type="password" value={123456} />
	// 			</Form.Item>
	// 			<Button className="primary-button my-2 full-width-button" htmlType="submit">
	// 				LOGIN
	// 			</Button>
	// 			<Link to="/register" className="anchor mt-2">
	// 				CLICK HERE TO REGISTER
	// 			</Link>
	// 		</Form>
	// 	</div>
	// </div>;
}

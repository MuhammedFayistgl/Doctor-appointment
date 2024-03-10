import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
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

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [visible, setVisible] = React.useState(false);
    const [formValue, setFormValue] = React.useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const handleChange = () => {
        setVisible(!visible);
    };
    const onFinish = async () => {
        AxiosConnection.post("api/user/login", formValue)
            .then((response) => {
                if (response.data.success) {
                    setCookie("token", response?.data?.data);
                    navigate("/");
                    toast.success(response?.data?.message);
                } else {
                    toast.error(response?.data?.message);
                }
            })
            .catch((error) => {
                toast.error("Something went wrong");
            });
    };
    // ${geturlendpoint === 'login' && "active"}
    return (
        <>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    {/* Tabs Titles */}
                    <Link to={"/login"} className={location.pathname === `/login` ? `active h2` : `inactive h2 underlineHover`}>
                        {" "}
                        Sign In{" "}
                    </Link>
                    <Link to={"/register"} className={location.pathname === `/register` ? `active h2` : `inactive h2 underlineHover`}>
                        Register
                    </Link>

                    {/* Icon  */}
                    <div className="fadeIn first" style={{ marginBottom: 18 }}>
                        <FaUserDoctor className="DoctorSvg" fontSize={100} />
                    </div>

                    {/* Login Form  */}
                    <div>Admin@gmail.com</div>
                    <div>123456</div>
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
                        <Button onClick={() => onFinish()} color="cyan" appearance="ghost" style={{ marginBottom: 20, width: 223 }}>
                            Login
                        </Button>
                    </Form>

                    {/* Remind Password */}
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

// import React from "react";

import toast from "react-hot-toast";

import React from "react";
// import { Button, Form, Input } from "antd";
// import React from "react";

import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";

import { FaUserDoctor } from "react-icons/fa6";
import { Form, Button } from "rsuite";
import { InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";

import "./style.css";
type FormDataType = {
    name: string;
    email: string;
};
function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [visible, setVisible] = React.useState(false);
    const [formValue, setFormValue] = React.useState({});
    const handleChange = () => {
        setVisible(!visible);
    };
    const onFinish = async () => {
        try {
            dispatch(showLoading());
            const response = await AxiosConnection.post("/api/user/register", formValue);
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message);
                navigate("/login");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error("Something went wrong");
        }
    };

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
                    <Form layout="inline" onChange={setFormValue} formValue={formValue}>
                        <Form.Group controlId="username-8">
                            <Form.Control placeholder="Username" name="name" />
                        </Form.Group>
                        <Form.Group controlId="username-8">
                            <Form.Control placeholder="Email" name="email" />
                        </Form.Group>
                        <Form.Group controlId="password-8">
                            <InputGroup inside>
                                <Form.Control placeholder="Password" name="password" type={visible ? "text" : "password"} />
                                <InputGroup.Button onClick={handleChange}>{visible ? <EyeIcon /> : <EyeSlashIcon />}</InputGroup.Button>
                            </InputGroup>
                        </Form.Group>
                        <Button
                            onClick={() => onFinish()}
                            color="cyan"
                            appearance="ghost"
                            style={{ marginBottom: 20, width: 223 }}
                            >
                            Register
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

export default Register;
//  <div className="authentication">
//       <div className="authentication-form card p-3">
//         <h1 className="card-title">Nice To Meet U</h1>
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item label="Name" name="name">
//             <Input placeholder="Name" />
//           </Form.Item>
//           <Form.Item label="Email" name="email">
//             <Input placeholder="Email" />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <Input placeholder="Password" type="password" />
//           </Form.Item>

//           <Button
//             className="primary-button my-2 full-width-button"
//             htmlType="submit"
//           >
//             REGISTER
//           </Button>

//           <Link to="/login" className="anchor mt-2">
//             CLICK HERE TO LOGIN
//           </Link>
//         </Form>
//       </div>
//     </div>

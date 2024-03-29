// import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import DoctorForm from "../../components/DoctorForm";
import moment from "moment";
import { AxiosConnection } from "../../utils/AxiosINSTENCE";
import { RootState } from "../../types/redux";
import { DoctorsType } from "../../types/DoctorsType";

function Profile() {
	const { user } = useSelector((state:RootState) => state.userSlice);
	const params = useParams();
	const [doctor, setDoctor] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onFinish = async (values:DoctorsType) => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.post("/api/doctor/update-doctor-profile", {
				
				...values,
				userId: user?._id,
				timings: [moment(values.timings[0]).format("HH:mm"), moment(values.timings[1]).format("HH:mm")],
			});
			dispatch(hideLoading());
			if (response.data.success) {
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

	const getDoctorData = async () => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.post(
				"/api/doctor/get-doctor-info-by-user-id",
				{
					userId: params.userId,
					token:document.cookie,
				},
				// {
				// 	headers: {
				// 		Authorization: `Bearer ${localStorage.getItem("token")}`,
				// 	},
				// }
			);

			dispatch(hideLoading());
			if (response.data.success) {
				setDoctor(response.data.data);
			}
		} catch (error) {
			console.log(error);
			dispatch(hideLoading());
		}
	};

	useEffect(() => {
		getDoctorData();
	}, []);
	return (
		<Layout>
			<h1 className="page-title">Doctor Profile</h1>
			<hr />
			{doctor && <DoctorForm onFinish={onFinish}  />}
		</Layout>
	);
}

export default Profile;

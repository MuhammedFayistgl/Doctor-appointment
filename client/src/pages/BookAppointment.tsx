import { Button, Col, DatePicker, Row, TimePicker } from "antd";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
// import DoctorForm from "../components/DoctorForm";
import moment from "moment";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import { ToastProvider, useToasts } from "react-toast-notifications";

function BookAppointment() {
	const [isAvailable, setIsAvailable] = useState(false);
	const navigate = useNavigate();
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const { user } = useSelector((state) => state.user);
	const [doctor, setDoctor] = useState(null);
	const params = useParams();
	const dispatch = useDispatch();
	const { addToast } = useToasts();

	const getDoctorData = async () => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.post("/api/doctor/get-doctor-info-by-id", {
				doctorId: params.doctorId,
				token: document.cookie,
			});

			dispatch(hideLoading());
			if (response.data.success) {
				setDoctor(response.data.data);
			}
		} catch (error) {
			console.log(error);
			dispatch(hideLoading());
		}
	};
	const checkAvailability = async () => {
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.post("/api/user/check-booking-avilability", {
				token: document.cookie,
				doctorId: params.doctorId,
				date: date,
				time: time,
			});
			dispatch(hideLoading());
			if (response.data.success) {
				toast.success(response.data.message);
				setIsAvailable(true);
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			toast.error("Error booking appointment");
			dispatch(hideLoading());
		}
	};
	const bookNow = async () => {
		setIsAvailable(false);
		try {
			dispatch(showLoading());
			const response = await AxiosConnection.post("/api/user/book-appointment", {
				doctorId: params.doctorId,
				userId: user._id,
				doctorInfo: doctor,
				userInfo: user,
				date: date,
				time: time,
			});

			dispatch(hideLoading());
			if (response.data.success) {
				addToast("May you get well", { appearance: "success" }), toast.success(response.data.message);
				navigate("/appointments");
			}
		} catch (error) {
			toast.error("Error booking appointment");
			dispatch(hideLoading());
		}
	};

	useEffect(() => {
		getDoctorData();
	}, []);
	return (
		<Layout>
			{doctor && (
				<div>
					<h1 className="page-title">
						{doctor.firstName} {doctor.lastName}
					</h1>
					<hr />
					<Row gutter={20} className="mt-5" align="middle">
						<Col span={8} sm={24} xs={24} lg={8}>
							<img
								src={"../../public/photo_6073515195055060811_y-removebg-preview.png"}
								alt=""
								width="100%"
								height="400"
								style={{ minWidth: "fit-content", minHeight: "fit-content" }}
							/>
						</Col>
						<Col span={8} sm={24} xs={24} lg={8}>
							<h1 className="normal-text">
								<b>Timings :</b> {doctor.timings[0]} - {doctor.timings[1]}
							</h1>
							<p>
								<b>Phone Number : </b>
								{doctor.phoneNumber}
							</p>
							<p>
								<b>Address : </b>
								{doctor.address}
							</p>
							<p>
								<b>Fee per Visit : </b>
								{doctor.feePerCunsultation}
							</p>
							<p>
								<b>Website : </b>
								{doctor.website}
							</p>
							<div className="d-flex flex-column pt-2 mt-2">
								<DatePicker
									format="DD-MM-YYYY"
									onChange={(value) => {
										setDate(moment(value).format("DD-MM-YYYY"));
										setIsAvailable(false);
									}}
								/>
								<TimePicker
									format="HH:mm"
									className="mt-3"
									onChange={(value) => {
										setIsAvailable(false);
										setTime(moment(value).format("HH:mm"));
									}}
								/>
								{!isAvailable && (
									<Button className="primary-button mt-3 full-width-button" onClick={checkAvailability}>
										Check Availability
									</Button>
								)}

								{isAvailable && (
									<Button className="primary-button mt-3 full-width-button" onClick={bookNow}>
										Book Now
									</Button>
								)}
							</div>
						</Col>
					</Row>
				</div>
			)}
		</Layout>
	);
}

export default BookAppointment;

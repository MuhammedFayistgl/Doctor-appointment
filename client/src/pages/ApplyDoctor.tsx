// import { Button, Col, Form, Input, Row, TimePicker } from "antd";
// import React from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DoctorForm from "../components/DoctorForm";
import moment from "moment";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import { GiStethoscope } from "react-icons/gi";
import { RootState } from "../types/redux";
import { DoctorsType } from "../types/DoctorsType";
function ApplyDoctor() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.userSlice);
  const navigate = useNavigate();

  const onFinish = async (values: DoctorsType) => {


    try {
      dispatch(showLoading());
      const response = await AxiosConnection.post("/api/user/apply-doctor-account", {
        token: document.cookie,
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

  return (
    <Layout>
      <h1 className="page-title">
        {" "}
        <GiStethoscope /> Apply Doctor
      </h1>
      <hr />

      <DoctorForm onFinish={onFinish}  />
    </Layout>
  );
}


export default ApplyDoctor;

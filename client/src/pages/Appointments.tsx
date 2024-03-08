import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import { showLoading, hideLoading } from "../redux/alertsSlice";
// import { toast } from "react-hot-toast";
import { Table } from "antd";
import moment from "moment";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import { CustomTag } from "../components/CustomTag";
import { PiPhoneCallFill } from "react-icons/pi";
import type { TableColumnsType } from "antd";
import { AppointmentsType } from "../types/userType";
function Appointments() {
    const [appointments, setAppointments] = useState([]);
    const dispatch = useDispatch();
    const getAppointmentsData = async () => {
        try {
            dispatch(showLoading());
            const response = await AxiosConnection.get("/api/user/get-appointments-by-user-id");
            dispatch(hideLoading());
            if (response.data.success) {
                setAppointments(response.data.data);
            }
        } catch (error) {
            dispatch(hideLoading());
        }
    };

    const columns: TableColumnsType<AppointmentsType> = [
        {
            title: "Id",
            dataIndex: "_id",
        },
        {
            title: "Doctor",
            dataIndex: "name",
            render: (text, record) => (
                <span>
                    {record.doctorInfo.firstName} {record.doctorInfo.lastName}
                </span>
            ),
        },
        {
            title: "Phone",
            dataIndex: "phoneNumber",
            render: (text, record) => (
                <span style={{ color: "#0087BA" }}>
                    <PiPhoneCallFill style={{ fontSize: 20 }} /> {record.doctorInfo.phoneNumber}
                </span>
            ),
        },
        {
            title: "Date & Time",
            dataIndex: "createdAt",
            render: (text, record) => (
                <span>
                    {moment(record.date).format("DD-MM-YYYY")} {moment(record.time).format("HH:mm")}
                </span>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (text, record) => <CustomTag status={record?.status} />,
        },
    ];
    useEffect(() => {
        getAppointmentsData();
    }, []);
    return (
        <Layout>
            <h1 className="page-title">Appointments</h1>
            <hr />
            <Table columns={columns} dataSource={appointments} />
        </Layout>
    );
}

export default Appointments;

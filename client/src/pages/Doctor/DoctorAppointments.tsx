import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
import { toast } from "react-hot-toast";
import { Table } from "antd";
import moment from "moment";
import { AxiosConnection } from "../../utils/AxiosINSTENCE";
import type { TableColumnsType } from "antd";
import { AppointmentsType } from "../../types/userType";
function DoctorAppointments() {
    const [appointments, setAppointments] = useState([]);
    const dispatch = useDispatch();
    const getAppointmentsData = async () => {
        try {
            dispatch(showLoading());
            const resposne = await AxiosConnection.get("/api/doctor/get-appointments-by-doctor-id");
            dispatch(hideLoading());
            if (resposne.data.success) {
                setAppointments(resposne.data.data);
            }
        } catch (error) {
            dispatch(hideLoading());
        }
    };
    console.log("appointments====", appointments);

    const changeAppointmentStatus = async (record: AppointmentsType, status: string) => {
        try {
            dispatch(showLoading());
            const resposne = await AxiosConnection.post("/api/doctor/change-appointment-status", {
                appointmentId: record._id,
                status: status,
                token: document.cookie,
            });
            dispatch(hideLoading());
            if (resposne.data.success) {
                toast.success(resposne.data.message);
                getAppointmentsData();
            }
        } catch (error) {
            toast.error("Error changing doctor account status");
            dispatch(hideLoading());
        }
    };
    const columns: TableColumnsType<AppointmentsType> = [
        {
            title: "Id",
            dataIndex: "_id",
        },
        {
            title: "Patient",
            dataIndex: "name",
            render: (text, record) => <span>{record.userInfo.name}</span>,
        },
        {
            title: "Phone",
            dataIndex: "phoneNumber",
            render: (text, record) => <span>{record.doctorInfo.phoneNumber}</span>,
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
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (text, record) => (
                <div className="d-flex">
                    {record.status === "pending" && (
                        <div className="d-flex">
                            <h1 className="anchor px-2" onClick={() => changeAppointmentStatus(record, "approved")}>
                                Approve
                            </h1>
                            <h1 className="anchor" onClick={() => changeAppointmentStatus(record, "rejected")}>
                                Reject
                            </h1>
                        </div>
                    )}
                </div>
            ),
        },
    ];
    useEffect(() => {
        getAppointmentsData();
    }, []);
    return (
        <Layout>
            <h1 className="page-header">Appointments</h1>
            <hr />
            <Table columns={columns} dataSource={appointments} />
        </Layout>
    );
}

export default DoctorAppointments;

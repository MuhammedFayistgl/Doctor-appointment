/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { showLoading, hideLoading } from "../../redux/alertsSlice";
// import { Table } from "antd";
import moment from "moment";
import { AxiosConnection } from "../../utils/AxiosINSTENCE";
import { MdMarkEmailUnread } from "react-icons/md";
import { FcOvertime } from "react-icons/fc";
import { GiStethoscope } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import { BsFillHeartPulseFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { Table } from "antd";
import { UserType } from "../../types/userType";
import type { TableColumnsType } from "antd";
// +++++++++++++
// import { Table, Button } from "rsuite";
function Userslist() {
    // const { Column, HeaderCell, Cell } = Table;

    const [users, setUsers] = useState([]);
    const dispatch = useDispatch();
    const getUsersData = async () => {
        try {
            const response = await AxiosConnection.get("/api/admin/get-all-users");

            if (response.data.success) {
                setUsers(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsersData();
    }, []);

    const columns: TableColumnsType<UserType> = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Role",
            render: (record) => (
                <span>
                    {record?.isAdmin ? (
                        <GrUserAdmin style={{ fontSize: 20, color: "green" }} />
                    ) : record?.isDoctor ? (
                        <GiStethoscope />
                    ) : (
                        <BsFillHeartPulseFill style={{ fontSize: 20, color: "deeppink" }} />
                    )}
                </span>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
            render: (record) => (
                <span>
                    <MdMarkEmailUnread style={{ fontSize: 20, marginRight: 8, color: "#4caf50" }} />
                    {record.email}
                </span>
            ),
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            render: (record) => (
                <span>
                    <FcOvertime style={{ fontSize: 20, marginRight: 8 }} />
                    {moment(record.createdAt).format("DD-MM-YYYY")}
                </span>
            ),
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (record) => (
                <div className="d-flex">
                    <h1 className="anchor">Block</h1>
                </div>
            ),
        },
    ];

    return (
        <Layout>
            <h1 className="page-header">Users List</h1>
            <hr />
            <Table columns={columns} dataSource={users} />
        </Layout>
    );
}

export default Userslist;

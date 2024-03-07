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
// +++++++++++++
import { Table, Button } from "rsuite";
function Userslist() {
    const { Column, HeaderCell, Cell } = Table;

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

    return (
        <Layout>
            <h1 className="page-header">Users List</h1>
            <hr />
            {/* <Table columns={columns} dataSource={users} /> */}
            <Table
                height={400}
                width={850}
                data={users}
                onRowClick={(rowData) => {
                    console.log(rowData);
                }}>
                <Column width={250} align="center" fixed>
                    <HeaderCell>Name</HeaderCell>
                    <Cell dataKey="name" />
                </Column>
                <Column width={50}>
                    <HeaderCell>Role</HeaderCell>
                    <Cell dataKey="actions">
                        {(Role) =>
                            Role?.isAdmin ? (
                                <GrUserAdmin style={{ fontSize: 20, color: "green" }} />
                            ) : Role?.isDoctor ? (
                                <GiStethoscope />
                            ) : (
                                <BsFillHeartPulseFill style={{ fontSize: 20, color: "deeppink" }} />
                            )
                        }
                    </Cell>
                </Column>
                <Column width={200}>
                    <HeaderCell>Email</HeaderCell>
                    <Cell dataKey="email">
                        {(email) => (
                            <span>
                                <MdMarkEmailUnread style={{ fontSize: 20, marginRight: 8, color: "#4caf50" }} />
                                email
                            </span>
                        )}
                    </Cell>
                </Column>

                <Column width={250}>
                    <HeaderCell>Created At</HeaderCell>
                    <Cell dataKey="createdAt">
                        {(data) => (
                            <span>
                                <FcOvertime style={{ fontSize: 20, marginRight: 8 }} />
                                {moment(data?.createdAt).format("DD-MM-YYYY")}
                            </span>
                        )}
                    </Cell>
                </Column>

                <Column width={100} fixed="right">
                    <HeaderCell>Actions</HeaderCell>

                    <Cell style={{ padding: "6px" }}>
                        {(rowData) => (
                            <div className="d-flex">
                                <h1 className="anchor">Block</h1>
                            </div>
                        )}
                    </Cell>
                </Column>
            </Table>
        </Layout>
    );
}

export default Userslist;

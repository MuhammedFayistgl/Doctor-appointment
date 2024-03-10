import { useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import Pagnation from "../components/Pagnation";
import CardLayout from "../components/Card/Dr_Card/CardLayout";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { DoctorsType } from "../types/DoctorsType";
import { setDoctors } from "../redux/DoctorSlice";
import { RootState } from "../types/redux";
import CardPlaceHolder from "../components/PliceHolder/CardPlaceHolder";
import toast from "react-hot-toast";
function Home() {
    const [page, setPage] = useState(1);
    const [perPage] = useState(10);
    /**  */
    const end = page * perPage;
    const start = end - perPage;
    const { doctors } = useSelector((state: RootState) => state.Doctors);
    const dispatch = useDispatch();


    const { data, isLoading, error } = useQuery({
        queryKey: ["api-user-get-all-approved-doctors"],
        queryFn: () => AxiosConnection.get("api/user/get-all-approved-doctors"),
    });

    if (data?.data?.success) dispatch(setDoctors(data?.data?.doctors));
    if (error) toast.error(error?.message);

    return (
        <Layout>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                    height: "-webkit-fill-available",
                    position: "relative",
                }}>
                <div
                    style={{
                        // overflow: "scroll",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 9,
                        justifyContent: "space-evenly",
                    }}>
                    {isLoading ? (
                        <CardPlaceHolder />
                    ) : (
                        doctors?.slice(start, end).map((doctor, i) => <CardLayout key={i} doctor={doctor} />)
                    )}
                </div>
                <div style={{ display: "flex", placeContent: "center", position: "fixed", bottom: 0, left: 0, right: 0 }}>
                    <Pagnation setpage={setPage} length={Math.ceil(doctors?.length / 4)} />
                </div>
            </div>
        </Layout>
    );
}

export default Home;

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { AxiosConnection } from "../utils/AxiosINSTENCE";
import Pagnation from "../components/Pagnation";
import CardLayout from "../components/Card/Dr_Card/CardLayout";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { DoctorsType } from "../types/DoctorsType";
import { setDoctors } from "../redux/DoctorSlice";
import { RootState } from "../types/redux";
import CardPlaceHolder from "../components/PliceHolder/CardPlaceHolder";
function Home() {
    const [page, setpage] = useState(1);
    const [perpage] = useState(4);
    /**  */
    const end = page * perpage;
    const start = end - perpage;
    const { doctors } = useSelector((state: RootState) => state.Doctors);

    const dispatch = useDispatch();
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      })
    useQuery({
        queryKey: ["api-user-get-all-approved-doctors"],
        queryFn: async () => {
            dispatch(showLoading());
            AxiosConnection.get("api/user/get-all-approved-doctors")
                .then((response) => {
                    if (response?.data?.success) {
                        dispatch(hideLoading());
                        dispatch(setDoctors(response.data.data));
                    }
                })
                .catch((error) => dispatch(hideLoading()));
        },
    });

    return (
        <Layout>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                    height: "-webkit-fill-available",
                }}>
                <div
                    style={{
                        overflow: "scroll",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 9,
                        justifyContent: "space-evenly",
                    }}>
                    {doctors ? doctors?.slice(start, end).map((doctor, i) => <CardLayout key={i} doctor={doctor} />) : <CardPlaceHolder />}
                </div>
                <div style={{ display: "flex", placeContent: "center" }}>
                    <Pagnation setpage={setpage} length={Math.ceil(doctors?.length / 4)} />
                </div>
            </div>
        </Layout>
    );
}

export default Home;

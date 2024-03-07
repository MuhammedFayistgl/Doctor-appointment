/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import CardAvathar from "./CardAvathar";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { useNavigate } from "react-router-dom";
import { DoctorsType } from "../../../types/DoctorsType";
import { useState } from "react";

type CardLayoutType = {
    doctor: DoctorsType;
};
const CardLayout = ({ doctor }: CardLayoutType) => {
    const [first, setfirst] = useState(false)
    const navigate = useNavigate();
    console.log('layout child',first);
    return (
        <Box
            // onClick={() => navigate(`/book-appointment/${doctor?._id}`)}
            onClick = {()=> setfirst(!first )}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
                backgroundColor: "white",
                borderRadius: 2,
                padding: 2,
                minWidth: 240,
                overflow: "scroll",
                maxWidth: 240,
            }}>
            <CardAvathar />
            <CardBody doctor={doctor} />
            <CardFooter doctor={doctor} />
        </Box>
    );
};

export default CardLayout;

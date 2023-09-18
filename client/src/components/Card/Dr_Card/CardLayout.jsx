/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import CardAvathar from "./CardAvathar";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import { useNavigate } from "react-router-dom";

const CardLayout = ({ doctor }) => {
	const navigate = useNavigate();
	return (
		<Box
			onClick={() => navigate(`/book-appointment/${doctor?._id}`)}
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
			}}
		>
			<CardAvathar doctor={doctor} />
			<CardBody doctor={doctor} />
			<CardFooter doctor={doctor} />
		</Box>
	);
};

export default CardLayout;

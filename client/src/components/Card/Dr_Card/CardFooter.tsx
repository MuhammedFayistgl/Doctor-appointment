/* eslint-disable react/prop-types */
import { Box, Button } from "@mui/material";

import { Rate } from "rsuite";
import { DoctorsType } from "../../../types/DoctorsType";

type CardFooter ={
	doctor : DoctorsType
}
const CardFooter = ({doctor}:CardFooter) => {
	return (
		<>
			<Box sx={{display:'flex',flexDirection:'column',gap:1}}>
				<Rate defaultValue={4} size="xs" readOnly />
				<Button
					sx={{
						backgroundColor: "#d5c9f0",
						color: "#470c99",
						"&:hover": {
							background: "#987bd4",
						},
					}}
					variant="contained"
                    size="small"
				>
					Appointment
				</Button>
			</Box>
		</>
	);
};

export default CardFooter;

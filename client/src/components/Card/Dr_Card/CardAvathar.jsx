/* eslint-disable react/prop-types */

import { FaUserDoctor } from "react-icons/fa6";
import { Avatar } from "rsuite";
// {doctor} prop
const CardAvathar = () => {
	return (
		<div>
			<Avatar style={{ minWidth: 80, minHeight: 80, padding: 5, backgroundColor: "white" }} circle alt="@SevenOutman">
				<FaUserDoctor color="rgb(5,84,73)" style={{ backgroundColor: "white" }} fontSize={100} />
			</Avatar>
		</div>
	);
};

export default CardAvathar ;

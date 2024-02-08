/* eslint-disable react/prop-types */

import { DoctorsType } from "../../../types/DoctorsType";

type CardBody = {
	doctor:DoctorsType
}
const CardBody = ({ doctor }:CardBody) => {
	return (
		<>
			<strong color="black">{doctor?.firstName}</strong>
			<div>
				<span color="#fd7e14">Spec : </span>
				<span>{doctor?.specialization}</span>
			</div>
		</>
	);
};

export default CardBody;

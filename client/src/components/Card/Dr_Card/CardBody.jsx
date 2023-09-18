/* eslint-disable react/prop-types */
const CardBody = ({ doctor }) => {
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

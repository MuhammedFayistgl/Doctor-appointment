import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Pagnation = () => {
	return (
		<Stack spacing={2}>
			<Pagination count={10} variant="outlined" shape="rounded" />
		</Stack>
	);
};

export default Pagnation;

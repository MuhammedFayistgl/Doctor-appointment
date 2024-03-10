import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

type PagnationProps = {
    length: number;
    setpage: (page: number) => void;
};
const Pagnation = ({ length, setpage }: PagnationProps) => {
    return (
        <Stack spacing={2}>
            <Pagination count={length} variant="outlined" shape="rounded" onChange={(e, v) => setpage(v)} />
        </Stack>
    );
};

export default Pagnation;

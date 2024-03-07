import { Box } from "@mui/material";
import React from "react";
import { Placeholder } from "rsuite";

const CardPlaceHolder = () => {
    // setTimeout(() => {
    //     window.location.reload(false)
    // }, 3000)
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                padding: 2,
                minWidth: 230,
                overflow: "hidden",
            }}>
            <Placeholder.Paragraph graph="image" active />
            <Placeholder.Graph height={150} style={{ marginTop: 20 }} width={200} active />
        </Box>
    );
};

export default CardPlaceHolder;

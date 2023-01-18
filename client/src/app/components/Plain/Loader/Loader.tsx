import { Box } from "@mui/material";
import { GridLoader } from "react-spinners";

export const Loader = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        bgcolor: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GridLoader color="#fff" size={25} />
    </Box>
  );
};

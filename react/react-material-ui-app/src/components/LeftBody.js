import React from "react";
import { Box } from "@mui/material";

const LeftBody = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { sx: "none", sm: "block" },
        backgroundColor: 'primary.main'
      }}
    >
      LeftBody
    </Box>
  );
};

export default LeftBody;

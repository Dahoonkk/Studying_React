import { Edit } from "@mui/icons-material";
import {
  Box,
  Fab,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Create = () => {
  return (
    <Tooltip title="Create"
        sx={{ position: "fixed", bottom: 20, right: 30}}
    >
    <IconButton>
      <Fab color="#00bcd4">
        <Edit />
      </Fab>
    </IconButton>
    </Tooltip>
  );
};

export default Create;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

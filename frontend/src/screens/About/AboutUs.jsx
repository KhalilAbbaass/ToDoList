// src/screens/AboutUs.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutUs() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        This is a sample ToDoList app built with React and MUI. Here you can add tasks, 
        manage your tasks, and customize your settings.
      </Typography>
    </Box>
  );
}

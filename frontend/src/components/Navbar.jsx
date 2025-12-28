import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar({ username }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        bgcolor: "#0D1B2A",
      }}
    >
      <Typography variant="h6" sx={{ color: "#FFC300" }}>
        Hello {username}
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          component={Link}
          to="/about"
          variant="contained"
          sx={{ bgcolor: "#FFC300", color: "#0D1B2A" }}
        >
          About Us
        </Button>
        <Button
          component={Link}
          to="/settings"
          variant="contained"
          sx={{ bgcolor: "#FFC300", color: "#0D1B2A" }}
        >
          Settings
        </Button>
      </Box>
    </Box>
  );
}

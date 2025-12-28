import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";

export default function SettingsScreen() {
  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>
        Account
      </Typography>
      <Button fullWidth sx={{ my: 1 }} variant="outlined">
        View Profile
      </Button>
      <Button fullWidth sx={{ my: 1 }} variant="outlined">
        Change Password
      </Button>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" sx={{ mt: 3 }}>
        App
      </Typography>
      <Button fullWidth sx={{ my: 1 }} variant="outlined">
        Notification Settings
      </Button>
      <Button fullWidth sx={{ my: 1 }} variant="outlined">
        Language
      </Button>

      <Divider sx={{ my: 3 }} />

      <Button fullWidth sx={{ my: 1 }} color="error" variant="contained">
        Log Out
      </Button>
    </Box>
  );
}

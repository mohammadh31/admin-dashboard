import {
  Box,
  Button,
  capitalize,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

const ProfileForm = () => {
  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manger",
      label: "Manger",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  return (
    <Box
      component="form"
      sx={{
        gap: 3,
        display: "flex",
        flexDirection: "column",
      }}
      width="95%"
      mx="auto"
      noValidate
      autoComplete="off"
    >
      <Stack flexDirection="row" gap={3}>
        <TextField sx={{ flex: 1 }} label="First Name" variant="filled" />
        <TextField sx={{ flex: 1 }} label="Last Name" variant="filled" />
      </Stack>

      <TextField label="Email" variant="filled" />
      <TextField label="Contact Number" variant="filled" />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField
        variant="filled"
        select
        label="Role"
        defaultValue="User"
        // helperText="Please select your currency"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box
        sx={{
          textAlign: "right",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          Current New User
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;

import React from "react";
import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

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

const ProfileForm = () => {
  const {
    // @ts-ignore
    // @ts-ignore
    register,
    handleSubmit,
    // @ts-ignore
    watch,
    // @ts-ignore
    formState: { errors },
    // @ts-ignore
  } = useForm();
  // @ts-ignore
  const onSubmit = () => console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
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
        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          helperText={
            Boolean(errors.firstName)
              ? "This field is required & min 3 character"
              : null
          }
          error={Boolean(errors.firstName)}
          {...register("firstName", { required: true, minLength: 2 })}
        />
        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          helperText={
            Boolean(errors.lastName)
              ? "This field is required & min 3 character"
              : null
          }
          error={Boolean(errors.lastName)}
          {...register("lastName", { required: true, minLength: 2 })}
        />
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

import React from "react";
import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

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

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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

      <TextField
        label="Email"
        variant="filled"
        helperText={
          Boolean(errors.email) ? "Please provide a valid email address" : null
        }
        error={Boolean(errors.email)}
        {...register("email", {
          required: true,
          pattern: regEmail,
        })}
      />
      <TextField
        label="Contact Number"
        variant="filled"
        helperText={
          Boolean(errors.contactNumber)
            ? "Please provide a valid phone number"
            : null
        }
        error={Boolean(errors.contactNumber)}
        {...register("contactNumber", {
          required: true,
          pattern: phoneRegExp,
        })}
      />
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
          onClick={handleClick}
        >
          Current New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default ProfileForm;

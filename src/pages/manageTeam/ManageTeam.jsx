import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
function ManageTeam() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            mx="auto"
            mt={1}
            borderRadius={1}
            width={110}
            padding={1}
            display={"flex"}
            justifyContent="space-evenly"
            sx={{
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : theme.palette.success.dark,
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlined
                fontSize="small"
                // @ts-ignore
                sx={{ color: theme.palette.common.white }}
              />
            ) : access === "Manager" ? (
              <SecurityOutlined
                fontSize="small"
                sx={{ color: theme.palette.common.white }}
              />
            ) : (
              <LockOpenOutlined
                fontSize="small"
                sx={{ color: theme.palette.common.white }}
              />
            )}

            <Typography fontSize={14} sx={{ color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box mx="auto" sx={{ height: 600, width: "95%" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}

export default ManageTeam;

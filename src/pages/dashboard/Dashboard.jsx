import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";

const Dashboard = () => {
  return (
    <Stack direction={"column"} gap={2} padding={2}>
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "6px 8px", textTransform: "capitalize" }}
        >
          <DownloadOutlined />
          downlaod reports
        </Button>
      </Box>
      <Row1 />
      <Row2 />
      <Row3 />
    </Stack>
  );
};

export default Dashboard;

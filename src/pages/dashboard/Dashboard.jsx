import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/Header";

const Dashboard = () => {
  return (
    <Stack direction={"column"} gap={2} padding={2}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          isDashboard={true}
          title={"dashboard"}
          subTitle={"welcom to your dashboard"}
        />
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
      </Stack>

      <Row1 />
      <Row2 />
      <Row3 />
    </Stack>
  );
};

export default Dashboard;

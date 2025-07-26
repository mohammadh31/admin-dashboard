import React from "react";
import Line from "./Line";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";

const LineChart = () => {
  return (
    <Box>
      <Header title={"line chart"} subTitle={"welcome to line chart page"} />
      <Line />;
    </Box>
  );
};

export default LineChart;

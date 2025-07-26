import React from "react";
import Pie from "./Pie";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";

const PieChart = () => {
  return (
    <Box>
      <Header title={"pieChart"} subTitle={"welcome to pieChart page"} />
      <Pie />;
    </Box>
  );
};

export default PieChart;

import React from "react";
import Bar from "./Bar";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";
// import { data } from "./data";

const BarChart = () => {
  return (
    <Box>
      <Header title={"barChart"} subTitle={"welcom to barChart page"} />
      <Bar />;
    </Box>
  );
};

export default BarChart;

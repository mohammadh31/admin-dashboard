import React from "react";
import Geo from "./Geo";
import { Box } from "@mui/material";
import { Header } from "../../components/Header";

const GeographyChart = () => {
  return (
    <Box>
      <Header title={"geography"} subTitle={"somple geography chart"} />
      <Geo />;
    </Box>
  );
};

export default GeographyChart;

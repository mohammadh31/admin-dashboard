import React from "react";
import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

// ------------------------------------------------
const data = [
  {
    id: "React",
    label: "React",
    value: 272,
    color: "hsl(107, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 543,
    color: "hsl(64, 70%, 50%)",
  },
  {
    id: "sass",
    label: "sass",
    value: 401,
    color: "hsl(41, 70%, 50%)",
  },
  {
    id: "haskell",
    label: "haskell",
    value: 434,
    color: "hsl(172, 70%, 50%)",
  },
  {
    id: "nue",
    label: "nue",
    value: 333,
    color: "hsl(219, 70%, 50%)",
  },
];
// ------------------------------------------------

const Pie = () => {
  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: "circle",
          },
        ]}
      />
    </Box>
  );
};

export default Pie;

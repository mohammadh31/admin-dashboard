import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

// ------------------------------------------------
const data = [
  {
    id: "make",
    label: "make",
    value: 459,
    color: "hsl(280, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 162,
    color: "hsl(178, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 375,
    color: "hsl(184, 70%, 50%)",
  },
  {
    id: "c",
    label: "c",
    value: 415,
    color: "hsl(88, 70%, 50%)",
  },
  {
    id: "stylus",
    label: "stylus",
    value: 205,
    color: "hsl(147, 70%, 50%)",
  },
];
// ------------------------------------------------

const Pie = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: isDashboard ? "220px" : "75vh" }}>
      <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={
          isDashboard
            ? { top: 0, right: 10, bottom: 10, left: 0 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashboard ? 0.7 : 0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 9]] }}
        enableArcLinkLabels={isDashboard ? false : true}
        // enableArcLabels={isDashboard ? false : true}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 56,
                  itemWidth: 100,
                  itemHeight: 18,
                  symbolShape: "circle",
                },
              ]
        }
        theme={{
          text: {
            fontSize: 11,
            fill: "black",
            outlineWidth: 0,
            outlineColor: "#ffffff",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "#ffffff",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "#ffffff",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            // wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
      />
    </Box>
  );
};

export default Pie;

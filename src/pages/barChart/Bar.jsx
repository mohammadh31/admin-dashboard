import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";

// -------------------------------
const data = [
  {
    year: 2019,
    Spain: 900,
    France: 1400,
    Germany: 1700,
  },

  {
    year: 2020,
    Spain: 1000,
    France: 1500,
    Germany: 1800,
  },

  {
    year: 2021,
    Spain: 1100,
    France: 1600,
    Germany: 1900,
  },

  {
    year: 2022,
    Spain: 1200,
    France: 1700,
    Germany: 2000,
  },

  {
    year: 2023,
    Spain: 1260,
    France: 1709,
    Germany: 2080,
  },
];

// -------------------------------

const Bar = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveBar /* or Bar for fixed dimensions */
        data={data}
        indexBy="year"
        labelSkipWidth={12}
        labelSkipHeight={12}
        colors={{ scheme: "paired" }}
        borderColor={{ from: "color", modifiers: [] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            translateX: 120,
            itemsSpacing: 3,
            itemWidth: 100,
            itemHeight: 16,
          },
        ]}
        keys={["Spain", "France", "Germany"]}
        axisBottom={{ legend: "( Year )", legendOffset: 60 }}
        axisLeft={{ legend: "salary / month", legendOffset: -60 }}
        margin={{ top: 80, right: 130, bottom: 90, left: 130 }}
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

export default Bar;

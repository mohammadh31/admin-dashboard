import React from "react";
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    data: [
      {
        x: "plane",
        y: 180,
      },
      {
        x: "helicopter",
        y: 30,
      },
      {
        x: "boat",
        y: 78,
      },
      {
        x: "train",
        y: 250,
      },
      {
        x: "subway",
        y: 264,
      },
      {
        x: "bus",
        y: 211,
      },
      {
        x: "car",
        y: 25,
      },
      {
        x: "moto",
        y: 244,
      },
      {
        x: "bicycle",
        y: 161,
      },
      {
        x: "horse",
        y: 158,
      },
      {
        x: "skateboard",
        y: 279,
      },
      {
        x: "others",
        y: 15,
      },
    ],
  },
  {
    id: "france",
    data: [
      {
        x: "plane",
        y: 118,
      },
      {
        x: "helicopter",
        y: 32,
      },
      {
        x: "boat",
        y: 172,
      },
      {
        x: "train",
        y: 200,
      },
      {
        x: "subway",
        y: 224,
      },
      {
        x: "bus",
        y: 77,
      },
      {
        x: "car",
        y: 50,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 55,
      },
      {
        x: "horse",
        y: 157,
      },
      {
        x: "skateboard",
        y: 241,
      },
      {
        x: "others",
        y: 264,
      },
    ],
  },
  {
    id: "us",
    data: [
      {
        x: "plane",
        y: 221,
      },
      {
        x: "helicopter",
        y: 280,
      },
      {
        x: "boat",
        y: 17,
      },
      {
        x: "train",
        y: 239,
      },
      {
        x: "subway",
        y: 217,
      },
      {
        x: "bus",
        y: 111,
      },
      {
        x: "car",
        y: 199,
      },
      {
        x: "moto",
        y: 114,
      },
      {
        x: "bicycle",
        y: 16,
      },
      {
        x: "horse",
        y: 189,
      },
      {
        x: "skateboard",
        y: 180,
      },
      {
        x: "others",
        y: 256,
      },
    ],
  },
  {
    id: "germany",
    data: [
      {
        x: "plane",
        y: 143,
      },
      {
        x: "helicopter",
        y: 245,
      },
      {
        x: "boat",
        y: 145,
      },
      {
        x: "train",
        y: 152,
      },
      {
        x: "subway",
        y: 212,
      },
      {
        x: "bus",
        y: 44,
      },
      {
        x: "car",
        y: 78,
      },
      {
        x: "moto",
        y: 277,
      },
      {
        x: "bicycle",
        y: 6,
      },
      {
        x: "horse",
        y: 247,
      },
      {
        x: "skateboard",
        y: 79,
      },
      {
        x: "others",
        y: 34,
      },
    ],
  },
  {
    id: "norway",
    data: [
      {
        x: "plane",
        y: 53,
      },
      {
        x: "helicopter",
        y: 110,
      },
      {
        x: "boat",
        y: 0,
      },
      {
        x: "train",
        y: 75,
      },
      {
        x: "subway",
        y: 70,
      },
      {
        x: "bus",
        y: 137,
      },
      {
        x: "car",
        y: 124,
      },
      {
        x: "moto",
        y: 119,
      },
      {
        x: "bicycle",
        y: 263,
      },
      {
        x: "horse",
        y: 119,
      },
      {
        x: "skateboard",
        y: 108,
      },
      {
        x: "others",
        y: 149,
      },
    ],
  },
];

const Line = () => {
  const theme = useTheme();

  return (
    <Box sx={{ height: "75vh" }}>
      <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        curve="cardinal"
        axisBottom={{ legend: "Transportation", legendOffset: 45 }}
        axisLeft={{ legend: "Count", legendOffset: -50 }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "seriesColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: "circle",
          },
        ]}
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
              strokeWidth: 0,
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

export default Line;

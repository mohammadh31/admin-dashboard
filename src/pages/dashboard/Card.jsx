import React from "react";
import {
  Paper,
  Stack,
  IconButton,
  Typography,
  useTheme,
  Box,
} from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const Card = ({ icon, title, subTitle, increase, data, scheme }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        flexGrow: 1,
        // minWidth: "330",
        display: "flex",
        justifyContent: "space-between",
        padding: 1.5,
        borderRadius: 2,
      }}
    >
      <Stack direction={"column"} gap={1}>
        {icon}
        <Typography variant="body1" color={theme.palette.text.primary}>
          {title}
        </Typography>
        <Typography variant="body1" color={theme.palette.text.primary}>
          {subTitle}
        </Typography>
      </Stack>
      <Stack direction={"column"} textAlign={"center"}>
        <Box height={"70px"} width={"70px"}>
          <ResponsivePie /* or Pie for fixed dimensions */
            data={data}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            colors={{ scheme: scheme }}
            innerRadius={0.7}
            padAngle={0.6}
            cornerRadius={2}
            activeOuterRadiusOffset={8}
            enableArcLabels={false}
            enableArcLinkLabels={false}
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
        <Typography variant="body1" color={theme.palette.text.primary}>
          {increase}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Card;

import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/pieChart/Pie";
import React from "react";
import Bar from "../barChart/Bar";
import Geo from "../geographyChart/Geo";

const Row3 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
      <Paper
        sx={{
          minWidth: "300px",
          textAlign: "center",
          flexGrow: "1",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          p={"30px 30px 30px 30px"}
          textTransform={"capitalize"}
        >
          campaing
        </Typography>
        <Pie isDashboard={true} />
        <Typography
          maxWidth={"70%"}
          variant="h6"
          align="center"
          m={"auto"}
          sx={{ mt: "15px" }}
        >
          $48,352 revenue generated
        </Typography>
        <Typography
          variant="body2"
          px={0.7}
          py={3}
          m={"auto"}
          maxWidth={"90%"}
          align="center"
        >
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          minWidth: "300px",
          textAlign: "center",
          flexGrow: "1",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          p={"30px 30px 30px 30px"}
          textTransform={"capitalize"}
        >
          sales quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>
      <Paper
        sx={{
          minWidth: "300px",
          textAlign: "center",
          flexGrow: "1",
        }}
      >
        <Typography
          variant="h6"
          color={theme.palette.secondary.main}
          p={"30px 30px 30px 30px"}
          textTransform={"capitalize"}
        >
          geography based traffic
        </Typography>
        <Geo isDashboard={true} />
      </Paper>
    </Stack>
  );
};

export default Row3;

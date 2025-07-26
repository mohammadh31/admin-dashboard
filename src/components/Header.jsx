import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

export const Header = ({ isDashboard = false, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box mb={isDashboard ? null : 3}>
      <Typography
        fontWeight={"bold"}
        variant="h5"
        textTransform={"uppercase"}
        color={theme.palette.info.main}
      >
        {title}
      </Typography>{" "}
      <Typography
        variant="body2"
        textTransform={"capitalize"}
        color={theme.palette.text.primary}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};

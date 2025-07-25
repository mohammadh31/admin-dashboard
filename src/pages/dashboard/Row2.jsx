import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Line from "../lineChart/Line";
import React from "react";
import { GetAppOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
      <Paper
        sx={{ flexGrow: 1, padding: 1.5, borderRadius: 2, minWidth: "68vw" }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              variant="h6"
              color={theme.palette.secondary.main}
              textTransform={"capitalize"}
            >
              revenue generated
            </Typography>
            <Typography variant="body2" color={theme.palette.text.primary}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{}}>
              <GetAppOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      {/* -------------------------------------------------- */}

      <Stack flexGrow={1} gap={2} maxHeight={370} overflow={"auto"}>
        {/* -------------------------------------------------- */}
        <Paper>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            p={1.2}
            color={theme.palette.secondary.main}
            textTransform={"capitalize"}
          >
            recent transactions
          </Typography>
        </Paper>
        {/* -------------------------------------------------- */}

        {Transactions.map((item) => {
          return (
            <Paper
              key={item.txId}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1.2,
              }}
            >
              <Box>
                <Typography
                  variant="body1"
                  color={theme.palette.secondary.main}
                >
                  {item.user}
                </Typography>
                <Typography variant="body2" color={theme.palette.text.primary}>
                  User
                </Typography>
              </Box>
              <Typography variant="body1" color={theme.palette.text.primary}>
                {item.date}
              </Typography>
              <Typography
                variant="body2"
                bgcolor={theme.palette.error.main}
                color={theme.palette.text.primary}
                borderRadius={1.4}
                p={1}
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Row2;

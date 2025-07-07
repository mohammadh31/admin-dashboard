import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { useState } from "react";
import { useMemo } from "react";
import { getDesignTokens } from "./themes";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        // @ts-ignore
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function PersistentDrawerLeft() {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //-------------- theme mode --------------------//
  const [mode, setmyMode] = useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = useMemo(() => createTheme(getDesignTokens({ mode })), [mode]);
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          setmyMode={setmyMode}
        />
        <SideBar
          open={open}
          DrawerHeader={DrawerHeader}
          handleDrawerClose={handleDrawerClose}
        />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
      </Box>
    </ThemeProvider>
  );
}

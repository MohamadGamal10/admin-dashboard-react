import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { getDesignTokens } from "../theme";
import { Outlet } from "react-router";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

// const theme = createTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           main: '#1976d2', // Custom light mode primary
//           contrastText: '#fff',
//         },
//         background: {
//           default: '#f5f5f5',
//           paper: '#ffffff',
//         }
//       }
//     },
//     dark: {
//       palette: {
//         primary: {
//           main: '#bb86fc', // Custom dark mode primary
//           contrastText: '#000',
//         },
//         background: {
//           default: '#121212',
//           paper: '#1e1e1e',
//         }
//       }
//     }
//   }
// });

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode") || "light"
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <TopBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />

        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

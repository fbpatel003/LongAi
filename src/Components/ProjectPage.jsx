import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MicrowaveRoundedIcon from "@mui/icons-material/MicrowaveRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import Button from "@mui/material/Button";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded";
import MainProjectPage from "./MainProjectPage";

function ProjectPage() {
  const drawerWidth = 240;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          style={{ background: "white", color: "black" }}
          position="fixed"
          open={open}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <span style={{ fontSize: "smaller" }}>KeyWord Explorer </span>
            {">"}
            <span style={{ fontSize: "smaller", color: "grey" }}>
              {" "}
              KeyWord Overview
            </span>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 350 75"
            style={{
              enableBackground: "new 0 0 256 54",
              position: "absolute",
              paddingLeft: "10px",
            }}
            xmlSpace="preserve"
          >
            <style
              type="text/css"
              dangerouslySetInnerHTML={{ __html: "\n\t.st0{fill:#6200EA;}\n" }}
            />
            <path
              className="st0"
              d="M9,15.1c0-0.2,0-0.3,0.1-0.5c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.2,0.4-0.3s0.3-0.1,0.5-0.1h13.7  c0.3,0,0.6,0.1,0.9,0.4c0.2,0.2,0.4,0.5,0.4,0.9c0,0.3-0.1,0.6-0.4,0.9c-0.2,0.2-0.5,0.4-0.9,0.4H10.3c-0.2,0-0.3,0-0.5-0.1  c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.2-0.3-0.3-0.4C9.1,15.4,9,15.2,9,15.1z M40.4,28.5H10.3c-0.3,0-0.6,0.1-0.9,0.4S9,29.4,9,29.7  c0,0.3,0.1,0.6,0.4,0.9s0.5,0.4,0.9,0.4h30.2c0.3,0,0.6-0.1,0.9-0.4s0.4-0.5,0.4-0.9c0-0.3-0.1-0.6-0.4-0.9S40.8,28.5,40.4,28.5z   M40.4,35.8H10.3c-0.3,0-0.6,0.1-0.9,0.4C9.2,36.4,9,36.7,9,37c0,0.3,0.1,0.6,0.4,0.9c0.2,0.2,0.5,0.4,0.9,0.4h30.2  c0.3,0,0.6-0.1,0.9-0.4c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.1-0.6-0.4-0.9C41.1,35.9,40.8,35.8,40.4,35.8z M23.9,43.1H10.3  c-0.3,0-0.6,0.1-0.9,0.4S9,44,9,44.3c0,0.3,0.1,0.6,0.4,0.9s0.5,0.4,0.9,0.4h13.7c0.3,0,0.6-0.1,0.9-0.4c0.2-0.2,0.4-0.5,0.4-0.9  c0-0.3-0.1-0.6-0.4-0.9C24.6,43.2,24.2,43.1,23.9,43.1L23.9,43.1z M47.2,8.8c-0.2,1.5-1.1,4.6-5.2,8.2c-0.7,0.6-1.4,1.1-2.1,1.6  L39,21.5c0,0,0,0.1-0.1,0.1l-2.6,1.9c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0s0,0,0-0.1l-0.7-3c-0.5,0-1.1,0-1.6-0.2  l-4.1,3.1c-0.2,0.2-0.5,0.3-0.8,0.3H10.5L7,25.3c0,0,0,0.1,0,0.1c0,0.7-0.2,1.4-0.7,1.9c-0.4,0.5-1,0.9-1.7,1.1s-1.4,0.1-2-0.2  c-0.6-0.3-1.1-0.8-1.4-1.4c-0.3-0.6-0.4-1.3-0.2-2C1.2,24,1.6,23.4,2.2,23c0.5-0.4,1.2-0.6,1.9-0.6c0.7,0,1.3,0.3,1.9,0.7l3.8-1.8  c0.2-0.1,0.3-0.1,0.5-0.1h18.4l3.7-2.8c-0.1-0.4-0.1-0.7,0-1.1L29.5,16c0,0,0,0-0.1-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1  c0,0,0-0.1,0.1-0.1l2.3-2.2l0.1,0l2.9-0.4c0.5-0.6,1.1-1.1,1.7-1.6C42.8,6.6,47,7.8,47.2,7.9c0,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1  C47.3,8.3,47.3,8.6,47.2,8.8z M41.4,13.9c0-0.3-0.1-0.6-0.3-0.9c-0.2-0.3-0.4-0.5-0.7-0.6c-0.3-0.1-0.6-0.2-0.9-0.2  c-0.3,0-0.6,0.2-0.9,0.4c-0.3,0.2-0.5,0.5-0.6,0.8c-0.1,0.3-0.1,0.6-0.1,1c0.1,0.3,0.2,0.6,0.4,0.9c0.2,0.2,0.5,0.4,0.8,0.5  c0.3,0.1,0.5,0.1,0.8,0c0.3-0.1,0.5-0.2,0.8-0.3c0.2-0.2,0.4-0.4,0.5-0.6C41.4,14.5,41.4,14.2,41.4,13.9L41.4,13.9z"
            />
            <path className="st0" d="M71.2,37.9v4.8H56V16.9h5.9v21H71.2z" />
            <path
              className="st0"
              d="M100.2,29.8c0,1.8-0.3,3.5-0.9,5.2c-0.6,1.6-1.5,3-2.7,4.2c-1.2,1.2-2.6,2.2-4.1,2.8c-3.5,1.3-7.3,1.3-10.8,0  c-1.6-0.6-3-1.6-4.2-2.8c-1.2-1.2-2.1-2.6-2.7-4.2c-0.6-1.7-1-3.4-0.9-5.2c0-1.8,0.3-3.5,0.9-5.2c0.6-1.6,1.5-3,2.7-4.2  c1.2-1.2,2.6-2.1,4.1-2.8c1.7-0.7,3.5-1,5.4-1c1.8,0,3.7,0.3,5.4,1c1.6,0.6,3,1.6,4.1,2.8c1.2,1.2,2.1,2.6,2.7,4.2  C99.9,26.3,100.2,28,100.2,29.8z M94.2,29.8c0-1.2-0.1-2.3-0.5-3.4c-0.3-0.9-0.8-1.8-1.4-2.6c-0.6-0.7-1.4-1.3-2.2-1.6  c-1-0.4-2-0.6-3-0.6c-1,0-2.1,0.2-3,0.6c-0.9,0.4-1.6,0.9-2.2,1.6c-0.6,0.8-1.1,1.6-1.4,2.6c-0.3,1.1-0.5,2.3-0.5,3.4  c0,1.2,0.1,2.3,0.5,3.5c0.3,0.9,0.8,1.8,1.4,2.6c0.6,0.7,1.4,1.3,2.2,1.6c1,0.4,2,0.6,3,0.6c1,0,2.1-0.2,3-0.6  c0.9-0.4,1.6-0.9,2.2-1.6c0.6-0.8,1.1-1.6,1.4-2.6C94,32.1,94.2,31,94.2,29.8L94.2,29.8z"
            />
            <path
              className="st0"
              d="M127.5,16.9v25.8h-3.1c-0.4,0-0.8-0.1-1.1-0.2c-0.4-0.2-0.7-0.4-0.9-0.8l-11.9-15.4c0,0.5,0.1,0.9,0.1,1.3  c0,0.4,0,0.8,0,1.2v13.8h-5.2V16.9h3.1c0.2,0,0.4,0,0.6,0c0.2,0,0.3,0.1,0.5,0.1c0.1,0.1,0.3,0.2,0.4,0.3c0.2,0.1,0.3,0.3,0.4,0.5  l12.1,15.5c-0.1-0.5-0.1-1-0.1-1.4c0-0.5,0-0.9,0-1.3V16.9H127.5z"
            />
            <path
              className="st0"
              d="M146.3,29.3h9v10.9c-1.2,0.9-2.7,1.7-4.1,2.1c-1.5,0.4-3,0.7-4.6,0.7c-1.9,0-3.9-0.3-5.7-1  c-1.6-0.6-3.1-1.6-4.4-2.8c-1.2-1.2-2.2-2.6-2.8-4.2c-0.7-1.7-1-3.4-1-5.2c0-1.8,0.3-3.6,0.9-5.3c0.6-1.6,1.5-3,2.7-4.2  c1.2-1.2,2.6-2.1,4.2-2.7c1.8-0.7,3.6-1,5.5-1c1,0,2,0.1,3,0.3c0.9,0.2,1.7,0.4,2.6,0.7c0.8,0.3,1.5,0.7,2.1,1.1  c0.6,0.4,1.2,0.9,1.7,1.4l-1.7,2.6c-0.1,0.2-0.3,0.4-0.4,0.5c-0.2,0.1-0.4,0.2-0.6,0.3c-0.2,0-0.5,0-0.7,0c-0.2-0.1-0.5-0.2-0.6-0.3  c-0.5-0.3-0.9-0.5-1.3-0.7c-0.4-0.2-0.8-0.4-1.3-0.5c-0.4-0.1-0.9-0.2-1.4-0.3c-0.5-0.1-1.1-0.1-1.6-0.1c-1,0-2,0.2-3,0.6  c-0.9,0.4-1.6,1-2.3,1.7c-0.6,0.8-1.1,1.6-1.4,2.6c-0.3,1.1-0.5,2.2-0.5,3.4c0,1.2,0.2,2.5,0.6,3.6c0.3,1,0.9,1.9,1.6,2.7  c0.7,0.7,1.5,1.3,2.4,1.7c1,0.4,2.1,0.6,3.1,0.6c0.6,0,1.3-0.1,1.9-0.2c0.6-0.1,1.1-0.3,1.7-0.6v-3.9h-2.5c-0.3,0-0.6-0.1-0.9-0.3  c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.1-0.3-0.1-0.4L146.3,29.3z"
            />
            <path
              className="st0"
              d="M174.5,21.3c-0.1,0.2-0.2,0.3-0.3,0.4c-0.1,0.1-0.3,0.1-0.4,0.1c-0.3,0-0.5-0.1-0.7-0.3c-0.3-0.2-0.6-0.4-1-0.7  c-0.5-0.3-0.9-0.5-1.4-0.7c-0.7-0.2-1.3-0.3-2-0.3c-0.7,0-1.3,0.1-2,0.3c-0.5,0.2-1,0.5-1.4,0.8c-0.4,0.3-0.7,0.8-0.9,1.2  c-0.2,0.5-0.3,1-0.3,1.5c0,0.6,0.2,1.2,0.5,1.8c0.4,0.5,0.8,0.9,1.4,1.2c0.6,0.3,1.2,0.6,1.9,0.9l2.2,0.8c0.7,0.3,1.5,0.6,2.2,0.9  c0.7,0.3,1.3,0.7,1.9,1.2c0.6,0.5,1,1.1,1.4,1.8c0.4,0.8,0.5,1.7,0.5,2.7c0,1.1-0.2,2.1-0.6,3.1c-0.4,1-0.9,1.8-1.6,2.5  c-0.7,0.7-1.6,1.3-2.6,1.7c-1.1,0.4-2.3,0.6-3.5,0.6c-1.5,0-3-0.3-4.4-0.9c-1.3-0.6-2.4-1.4-3.4-2.4l1-1.6c0.1-0.1,0.2-0.2,0.3-0.3  c0.1-0.1,0.3-0.1,0.4-0.1c0.2,0,0.4,0.1,0.5,0.2c0.2,0.1,0.4,0.3,0.7,0.5c0.2,0.2,0.5,0.4,0.8,0.6c0.3,0.2,0.7,0.4,1.1,0.6  c0.4,0.2,0.9,0.4,1.4,0.5c0.6,0.1,1.1,0.2,1.7,0.2c0.7,0,1.5-0.1,2.1-0.3c0.6-0.2,1.1-0.5,1.6-0.9c0.4-0.4,0.8-0.9,1-1.5  c0.2-0.6,0.4-1.2,0.3-1.9c0-0.7-0.1-1.3-0.5-1.9c-0.4-0.5-0.8-0.9-1.3-1.2c-0.6-0.4-1.2-0.6-1.9-0.8c-0.7-0.2-1.4-0.5-2.2-0.7  c-0.7-0.2-1.5-0.5-2.2-0.8c-0.7-0.3-1.3-0.7-1.9-1.2c-0.6-0.5-1-1.2-1.3-1.9c-0.4-0.9-0.5-1.9-0.5-2.8c0-0.9,0.2-1.8,0.5-2.6  c0.3-0.8,0.8-1.6,1.5-2.2c0.7-0.7,1.5-1.2,2.4-1.6c1.1-0.4,2.2-0.6,3.3-0.6c1.3,0,2.6,0.2,3.8,0.7c1.1,0.4,2.2,1.1,3,1.9L174.5,21.3  z"
            />
            <path
              className="st0"
              d="M202.6,17.3v25.3h-3.4V31.1h-13.4v11.5h-3.4V17.3h3.4v11.3h13.4V17.3H202.6z"
            />
            <path
              className="st0"
              d="M233.7,30c0,1.8-0.3,3.6-0.9,5.2c-0.6,1.5-1.4,2.9-2.5,4.1c-1.1,1.2-2.4,2.1-3.9,2.7c-3.2,1.3-6.8,1.3-10,0  c-1.5-0.6-2.8-1.5-3.9-2.7c-1.1-1.2-2-2.6-2.5-4.1c-0.6-1.7-0.9-3.4-0.9-5.2c0-1.8,0.3-3.6,0.9-5.2c0.6-1.5,1.4-2.9,2.5-4.1  c1.1-1.2,2.4-2.1,3.9-2.7c3.2-1.3,6.8-1.3,10,0c1.5,0.6,2.8,1.5,3.9,2.7c1.1,1.2,2,2.6,2.5,4.1C233.4,26.5,233.7,28.2,233.7,30z   M230.2,30c0-1.4-0.2-2.8-0.6-4.2c-0.4-1.2-1-2.2-1.8-3.1c-0.8-0.9-1.7-1.5-2.8-2c-2.3-0.9-4.9-0.9-7.3,0c-1.1,0.4-2,1.1-2.8,2  c-0.8,0.9-1.4,2-1.8,3.1c-0.4,1.4-0.6,2.8-0.6,4.2c0,1.4,0.2,2.8,0.6,4.2c0.4,1.2,1,2.2,1.8,3.1c0.8,0.9,1.7,1.5,2.8,2  c2.3,0.9,4.9,0.9,7.3,0c1.1-0.4,2-1.1,2.8-2c0.8-0.9,1.4-2,1.8-3.1C230.1,32.8,230.3,31.4,230.2,30z"
            />
            <path
              className="st0"
              d="M256,20.2h-8.1v22.5h-3.4V20.2h-8.1v-2.9H256L256,20.2z"
            />
          </svg>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <Link to="/MyProject">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="My First Project" />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to="/Dashboard">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DashboardRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="DashBoard" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MicrowaveRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Recipes" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <WebRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ExtensionRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Templates" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LayersRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Interigations" />
              </ListItemButton>
            </ListItem>
          </List>
          <div
            style={{
              marginTop: "200px",
              position: "relative",
              bottom: "0px",
              background: "rgb(224, 255, 221)",
              width: "100%",
              height: "auto",
              paddingTop: "25px",
              paddingBottom: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  background: "green",
                  color: "white",
                  padding: "5px",
                  borderRadius: "50%",
                }}
              >
                Ks
              </span>
              <span>KritikaLpa.sha</span>
              <br /> <br />
              <Button
                style={{ background: "green", color: "white" }}
                variant="contained"
                startIcon={<ShoppingCartRoundedIcon />}
              >
                Change Plan
              </Button>
              <br />
              <br />
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MapRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Product RoadMap" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <SensorsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="What's New?" />
                  </ListItemButton>
                </ListItem>
              </List>
            </div>
          </div>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <MainProjectPage />
        </Main>
      </Box>
    </>
  );
}

export default ProjectPage;

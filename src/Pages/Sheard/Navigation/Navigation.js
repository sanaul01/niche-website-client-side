import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { lightGreen } from "@mui/material/colors";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: lightGreen[800] }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BIKE~LOVERS
          </Typography>
          <NavLink
            to="/home"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink
            to="/explore"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button color="inherit">Explore</Button>
          </NavLink>

          {user?.email ? (
            <Box>
              <NavLink
                to="/dashbord"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Dashboard</Button>
              </NavLink>
              <Button onClick={logOut} color="inherit">
                LogOut :
              </Button>
            </Box>
          ) : (
            <NavLink
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Login</Button>
            </NavLink>
          )}
          <Typography>{user.displayName}</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;

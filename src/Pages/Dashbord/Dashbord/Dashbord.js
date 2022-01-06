import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashbordHome from "./DashbordHome/DashbordHome";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import AddedProduct from "../../Home/AddedProduct/AddedProduct";
import Payment from "./Payment/Payment";
import ManageAlorder from "../../Home/ManageAlorder/ManageAlorder";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import ManageProducts from "../../Home/ManageProducts/ManageProducts";
import OrderReview from "../../Home/OrderReview/OrderReview";
import Review from "../Review/Review";
import { lightGreen } from "@mui/material/colors";

const drawerWidth = 240;

const Dashbord = (props) => {
  const { admin, logOut } = useAuth();
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Button onClick={logOut} color="inherit">
        LogOut
      </Button>

      {!admin && (
        <Box>
          <NavLink to={`${url}/myorder`} style={{ textDecoration: "none" }}>
            <Button color="inherit">My Order</Button>
          </NavLink>
          <br />
          <NavLink to={`${url}/pay`} style={{ textDecoration: "none" }}>
            <Button color="inherit">Pay</Button>
          </NavLink>
          <br />
          <NavLink to={`${url}/review`} style={{ textDecoration: "none" }}>
            <Button color="inherit">Review</Button>
          </NavLink>
        </Box>
      )}

      {admin && (
        <Box>
          <NavLink to={`${url}/addproduct`} style={{ textDecoration: "none" }}>
            <Button color="inherit">Add Product</Button>
          </NavLink>
          <NavLink
            to={`${url}/managealorder`}
            style={{ textDecoration: "none" }}
          >
            <Button color="inherit">Manage Alorder</Button>
          </NavLink>
          <NavLink to={`${url}/makeadmin`} style={{ textDecoration: "none" }}>
            <Button color="inherit">Make Admin</Button>
          </NavLink>
          <NavLink
            to={`${url}/manageproduct`}
            style={{ textDecoration: "none" }}
          >
            <Button color="inherit">Manage Product</Button>
          </NavLink>
        </Box>
      )}

      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: lightGreen[700],
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>

          <Typography
            sx={{ marginLeft: "50px" }}
            variant="h6"
            noWrap
            component="div"
          >
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Home</Button>
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashbordHome></DashbordHome>
          </Route>
          <Route path={`${path}/pay`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/myorder`}>
            <OrderReview></OrderReview>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <AddedProduct></AddedProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproduct`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/managealorder`}>
            <ManageAlorder></ManageAlorder>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

Dashbord.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashbord;

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import DashbordHome from './DashbordHome/DashbordHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AddedProduct from '../../Home/AddedProduct/AddedProduct';
import Payment from './Payment/Payment';
import ManageAlorder from '../../Home/ManageAlorder/ManageAlorder';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


const drawerWidth = 140;

const Dashbord = (props) => {

  const {admin} = useAuth()
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
        <NavLink to='/home'>
            <Button color="inherit">Home</Button>
        </NavLink>
        <NavLink to={`${url}`}>
            <Button color="inherit">My Order</Button>
        </NavLink>
        <NavLink to={`${url}/logout`}>
            <Button color="inherit">LogOut</Button>
        </NavLink>
        <br/>
        <NavLink to={`${url}/pay`}>
            <Button color="inherit">Pay</Button>
        </NavLink>
        <br/>
        <NavLink to={`${url}/review`}>
            <Button color="inherit">Review</Button>
        </NavLink>
        
        
        <NavLink to={`${url}/manageproduct`}>
            <Button color="inherit">Manage Product</Button>
        </NavLink>
        {admin && <Box>
          <NavLink to={`${url}/logout`}>
            <Button color="inherit">LogOut</Button>
        </NavLink>
          <NavLink to={`${url}/addproduct`}>
            <Button color="inherit">Add Product</Button>
          </NavLink>
          <NavLink to={`${url}/managealorder`}>
            <Button color="inherit">Manage Alorder</Button>
        </NavLink>
        <NavLink to={`${url}/makeadmin`}>
            <Button color="inherit">Make Admin</Button>
        </NavLink>
          </Box>}
        
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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

  const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
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
           
        </Route>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
          <AddedProduct></AddedProduct>
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
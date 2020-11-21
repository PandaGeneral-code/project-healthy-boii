import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import KitchenOutlinedIcon from "@material-ui/icons/KitchenOutlined";
import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { useAppHooks } from "./AppHooks";
import FoodContainer from "./components/containers/Food/FoodContainer";
import HomeContainer from "./components/containers/Home/HomeContainer";

const App = () => {
  const { login, logout, setProfile, state } = useAppHooks();
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = (drawerState) => setIsDrawerOpen(() => drawerState);

  const handleLogin = () => login("Sasha");

  const handleLogout = () => logout();

  const handleNavClick = (path) => {
    history.push(`/${path}`);
    handleDrawer(false);
  };

  const handleSetProfile = () => setProfile("TEST");

  return (
    <div>
      <AppBar position="static">
        <Toolbar>Hello</Toolbar>
      </AppBar>
      <Switch>
        <Route component={FoodContainer} path="/food" />
        <Route component={HomeContainer} path="/" />
      </Switch>
      <pre>{JSON.stringify({ state }, null, 2)}</pre>
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleLogout}>LOGOUT</button>
      <button onClick={handleSetProfile}>SET TEST PROFILE</button>
      <button onClick={() => handleDrawer(true)}>OPEN DRAWER</button>
      <Drawer
        anchor="left"
        onClose={() => handleDrawer(false)}
        open={isDrawerOpen}
      >
        <List>
          <ListItem button onClick={() => handleNavClick("")}>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleNavClick("food")}>
            <ListItemIcon>
              <KitchenOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Food</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default App;

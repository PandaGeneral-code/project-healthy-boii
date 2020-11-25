import {
  AppBar,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import KitchenIcon from "@material-ui/icons/Kitchen";
import MenuIcon from "@material-ui/icons/Menu";
import StarBorder from "@material-ui/icons/StarBorder";
import React, { useState } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import Food from "./components/containers/Food/Food";
import Home from "./components/containers/Home/Home";
import { StyledList, StyledNestedListItem, StyledTypography } from "./styled";

const App = () => {
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isListItemExpanded, setIsListItemExpanded] = useState(false);

  const handleDrawer = (newOpenState) => {
    setIsDrawerOpen(() => newOpenState);
    setIsListItemExpanded(() => false);
  };

  const handleDrawerItemClick = (path) => {
    history.push(`/${path}`);
    setIsListItemExpanded((isListItemExpanded) => !isListItemExpanded);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => handleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <StyledTypography variant="h6">Hello</StyledTypography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        onClose={() => handleDrawer(false)}
        open={isDrawerOpen}
      >
        <StyledList component="nav">
          <ListItem button onClick={() => handleDrawerItemClick("")}>
            <ListItemIcon>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleDrawerItemClick("food")}>
            <ListItemIcon>
              <KitchenIcon />
            </ListItemIcon>
            <ListItemText primary="Food" />
            {isListItemExpanded ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isListItemExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <StyledNestedListItem button>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </StyledNestedListItem>
              <StyledNestedListItem button>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Hello from the other side" />
              </StyledNestedListItem>
            </List>
          </Collapse>
          <ListItem button onClick={() => handleDrawerItemClick("exercises")}>
            <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="Exercises" />
          </ListItem>
        </StyledList>
      </Drawer>
      <Switch>
        <Route component={Food} path="/food" />
        <Route component={Home} path="/" />
      </Switch>
    </>
  );
};

export default App;

import {
  AppBar as MUIAppBar,
  IconButton,
  Menu,
  Toolbar,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useLocation } from "react-router-dom";

import { AppBarHeading } from "./styled";

const AppBar = ({ availableContainers }) => {
  const { pathname } = useLocation();

  return (
    <>
      <MUIAppBar color="primary" position="static">
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
          <AppBarHeading noWrap variant="h6">
            {
              availableContainers.find(
                ({ config: { path } }) => path === pathname.split("/")[1]
              ).config.title
            }
          </AppBarHeading>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </MUIAppBar>
    </>
  );
};

export default AppBar;

import {
  Collapse,
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import { PaddedListItem } from "./styled";
import { useUtilsHooks } from "../../UtilsHooks";

const Drawer = ({ availableContainers }) => {
  const history = useHistory();
  const location = useLocation();
  const [expandedContainer, setExpandedContainer] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const {
    setDrawerOpenState,
    state: { isDrawerOpen },
  } = useUtilsHooks();

  const handleDrawerClose = () => {
    setDrawerOpenState(false);
  };

  const handleMainDrawerItemClick = (path, subComponents) => {
    history.push(`/${path}`);
    if (!subComponents) {
      handleDrawerClose();
    }
    if (path === "") {
      if (expandedContainer === "home ") {
        setExpandedContainer(() => "nothing");
      } else {
        setExpandedContainer(() => "home");
      }
    } else {
      if (expandedContainer === path) {
        setExpandedContainer(() => "nothing");
      } else {
        setExpandedContainer(() => path);
      }
    }
  };

  const handleMenuItemSubComponentClick = (parentContainerPath, path) => {
    history.push(`/${parentContainerPath}/${path}`);
    handleDrawerClose();
  };

  useEffect(() => {
    const sub = location.pathname.split("/")[2];
    const urlContainer = location.pathname.split("/")[1];
    setExpandedContainer(() => (urlContainer ? urlContainer : "home"));
    setSelectedSub(() => sub);
  }, [location.pathname]);

  return (
    <MUIDrawer anchor="left" onClose={handleDrawerClose} open={isDrawerOpen}>
      {expandedContainer && (
        <List
          component="nav"
          subheader={
            <ListSubheader component="div">
              Select a Category to View
            </ListSubheader>
          }
        >
          {availableContainers.map((container) => (
            <>
              <ListItem
                button
                key={container.config.path}
                onClick={() =>
                  handleMainDrawerItemClick(
                    container.config.path,
                    container.config.subComponents
                  )
                }
                selected={expandedContainer === container.config.path}
              >
                <ListItemIcon>
                  <container.config.icon />
                </ListItemIcon>
                <ListItemText
                  key={container.config.path}
                  primary={container.config.title}
                />
                {container.config.subComponents &&
                  (expandedContainer ===
                  container.config.title.toLowerCase() ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  ))}
              </ListItem>
              {container.config.subComponents &&
                expandedContainer === container.config.title.toLowerCase() && (
                  <Collapse in={true} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {container.config.subComponents.map((sub) => (
                        <PaddedListItem
                          button
                          key={sub}
                          onClick={() =>
                            handleMenuItemSubComponentClick(
                              container.config.path,
                              sub.path
                            )
                          }
                          selected={selectedSub === sub.path}
                        >
                          <ListItemIcon>
                            <ExpandMore />
                          </ListItemIcon>
                          <ListItemText primary={sub.title} />
                        </PaddedListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
            </>
          ))}
        </List>
      )}
    </MUIDrawer>
  );
};

export default Drawer;

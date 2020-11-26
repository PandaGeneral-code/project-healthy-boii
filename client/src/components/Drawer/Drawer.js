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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

import { DrawerContainer } from "./styled";
import { useUtilsHooks } from "../../UtilsHooks";

const Drawer = ({ availableContainers }) => {
  const history = useHistory();
  const { pathname, url } = useLocation();
  const route = useRouteMatch();
  const [expandedContainer, setExpandedContainer] = useState(null);
  const {
    setDrawerOpenState,
    state: { isDrawerOpen },
  } = useUtilsHooks();

  const handleDrawerClose = () => setDrawerOpenState(false);

  const handleMainMenuItemClick = (path, subComponents) => {
    history.push(`/${path}`);
    if (!subComponents) {
      setDrawerOpenState(false);
    }
  };

  const handleSubMenuItemClick = (path) => {
    history.push(`${pathname}/${path}`);
  };

  useEffect(() => {
    const container = availableContainers.find(
      (container) => container.config.path === pathname.split("/")[1]
    ).config.title;
    setExpandedContainer(() => container);
  }, [availableContainers, pathname]);

  return (
    <MUIDrawer anchor="left" onClose={handleDrawerClose} open={isDrawerOpen}>
      {expandedContainer && (
        <DrawerContainer>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div">Select a Category</ListSubheader>
            }
          >
            {availableContainers.map(
              ({ config: { path, subComponents, title } }) => (
                <>
                  <ListItem
                    button
                    key={title}
                    onClick={() => handleMainMenuItemClick(path, subComponents)}
                    selected={pathname.split("/")[1] === path}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                    {subComponents && <ExpandMore />}
                  </ListItem>
                  {subComponents && (
                    <Collapse
                      in={expandedContainer === title}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {subComponents.map((sub) => (
                          <ListItem
                            button
                            key={sub}
                            onClick={() => handleSubMenuItemClick(sub)}
                            selected={sub === pathname.split("/")[2]}
                            style={{ paddingLeft: "40px" }}
                          >
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={sub} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </>
              )
            )}
          </List>
        </DrawerContainer>
      )}
    </MUIDrawer>
  );
};

export default Drawer;

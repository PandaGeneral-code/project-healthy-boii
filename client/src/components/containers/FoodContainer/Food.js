import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import React, { useState } from "react";

import { useFoodHooks } from "./FoodHooks";

const Food = () => {
  const { state } = useFoodHooks();
  const [value, setValue] = useState("recent");

  const handleChange = (e, newValue) => setValue(() => newValue);

  return (
    <div>
      <div>I like food</div>
      <BottomNavigation onChange={handleChange} value={value}>
        <BottomNavigationAction
          icon={<FolderIcon />}
          label="Recent"
          value="recent"
        />
        <BottomNavigationAction
          icon={<FolderIcon />}
          label="Test"
          value="test"
        />
        <BottomNavigationAction icon={<FolderIcon />} label="test2" />
        <BottomNavigationAction icon={<FolderIcon />} label="test3" />
      </BottomNavigation>
      <pre>{JSON.stringify({ state }, null, 2)}</pre>
    </div>
  );
};

export default Food;

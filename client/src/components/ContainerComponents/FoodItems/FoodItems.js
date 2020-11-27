import { Button } from "@material-ui/core";
import React, { useState } from "react";

import {
  ButtonContainer,
  ModalBody,
  NutritionalInformationPanel,
  StyledModal,
} from "./styled";

const FoodItems = () => {
  const [isAddFoodItemModalOpen, setIsAddFoodItemModalOpen] = useState(false);

  const handleModalVisibility = (modalVisibility) => {
    setIsAddFoodItemModalOpen(() => modalVisibility);
  };

  return (
    <>
      <div>FoodItems</div>
      <Button
        color="primary"
        onClick={() => handleModalVisibility(true)}
        variant="contained"
      >
        Add Food Item
      </Button>
      <StyledModal
        onClose={() => handleModalVisibility(false)}
        open={isAddFoodItemModalOpen}
      >
        <ModalBody>
          <h1>Add Food Item</h1>
          <h2>Enter nutritional information</h2>
          <NutritionalInformationPanel>
            <div style={{ border: "1px solid red" }}>
              Nutritional Information
            </div>
            <div style={{ border: "1px solid black" }}></div>
          </NutritionalInformationPanel>
          <ButtonContainer>
            <Button color="secondary" variant="outlined">
              Cancel
            </Button>
            <Button color="primary" variant="contained">
              Save
            </Button>
          </ButtonContainer>
        </ModalBody>
      </StyledModal>
    </>
  );
};

export default FoodItems;

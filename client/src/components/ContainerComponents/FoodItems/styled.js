import { Modal } from "@material-ui/core";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalBody = styled.div`
  padding: 20px;
  background: white;
  outline: 0;
`;

export const StyledModal = styled(Modal)`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NutritionalInformationPanel = styled.div`
  border: 2px solid blue;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 5px;
`;

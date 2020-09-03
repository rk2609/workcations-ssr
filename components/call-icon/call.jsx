import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleContactPopupHidden } from "../../redux/contact-popup/contact-popup.actions";
import {
  selectPopupHidden,
  selectPopupPosition,
} from "../../redux/contact-popup/contact-popup.selectors";

import { Container } from "./call.style";

const CallIcon = () => {
  const dispatch = useDispatch();
  const hidden = useSelector(selectPopupHidden);
  const iconPosition = useSelector(selectPopupPosition);

  return (
    <Container
      onClick={() => dispatch(toggleContactPopupHidden())}
      hidden={hidden}
      iconPosition={iconPosition}
    >
      <img src="./phone.svg" alt="Request a Call Back" />
    </Container>
  );
};

export default CallIcon;

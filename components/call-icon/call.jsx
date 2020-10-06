import React, { Fragment } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { toggleContactPopupHidden } from "../../redux/contact-popup/contact-popup.actions";
import {
  selectPopupHidden,
  selectPopupPosition,
} from "../../redux/contact-popup/contact-popup.selectors";

import { Container, ContainerMobile } from "./call.style";

const CallIcon = () => {
  const dispatch = useDispatch();
  const hidden = useSelector(selectPopupHidden);
  const iconPosition = useSelector(selectPopupPosition);

  return (
    <Fragment>
      <Container
        onClick={() => dispatch(toggleContactPopupHidden())}
        hidden={hidden}
        iconPosition={iconPosition}
      >
        <img src="/phone.svg" alt="Request a Call Back" />
      </Container>
      <Link href="tel:8814871652" passHref>
        <ContainerMobile
          otarget="_blank"
          hidden={hidden}
          iconPosition={iconPosition}
        >
          <img src="/phone.svg" alt="Request a Call Back" />
        </ContainerMobile>
      </Link>
    </Fragment>
  );
};

export default CallIcon;

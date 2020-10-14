import React, { Fragment, useState } from "react";
import Link from "next/link";
import * as gtag from "../ga";

import { useDispatch, useSelector } from "react-redux";
import { toggleContactPopupHidden } from "../../redux/contact-popup/contact-popup.actions";
import {
  selectPopupHidden,
  selectPopupPosition,
} from "../../redux/contact-popup/contact-popup.selectors";

import { Container, ContainerMobile, PopupMobile, PopupItem } from "./call.style";

const CallIcon = () => {
  const dispatch = useDispatch();
  const hidden = useSelector(selectPopupHidden);
  const iconPosition = useSelector(selectPopupPosition);
  const [showMobilePopup, setMobilePopup] = useState(false);

  const sendWhatsAppEvent = () => {
    gtag.event({
      category: "WhatsApp Button Clicked",
      action: "WhatsApp Button Clicked",
      label: "WhatsApp Button Clicked",
    });
  };

  const sendCallNowEvent = () => {
    gtag.event({
      category: "Call Now Button Clicked",
      action: "Call Now Button Clicked",
      label: "Call Now Button Clicked",
    });
  };

  const sendRequestACallBackEvent = () => {
    gtag.event({
      category: "Request A Call Back Button Clicked",
      action: "Request A Call Back Button Clicked",
      label: "Request A Call Back Button Clicked",
    });
  };

  const sendContactUsEvent = () => {
    gtag.event({
      category: "Contact Us Button Clicked",
      action: "Contact Us Button Clicked",
      label: "Contact Us Button Clicked",
    });
  };

  return (
    <Fragment>
      <Container
        onClick={() => {
          dispatch(toggleContactPopupHidden());
          sendContactUsEvent();
        }}
        hidden={hidden}
        iconPosition={iconPosition}
      >
        <img src="/phone.svg" alt="Request a Call Back" />
      </Container>
        <ContainerMobile
          onClick={() => {
            setMobilePopup(!showMobilePopup);
            sendContactUsEvent();
          }}
          hidden={hidden}
          iconPosition={iconPosition}
        >
          <img src="/phone.svg" alt="Request a Call Back" />
        </ContainerMobile>
      <PopupMobile isActive={showMobilePopup}>
      <PopupItem onClick={() => {
        setMobilePopup(!showMobilePopup);
        dispatch(toggleContactPopupHidden());
        sendRequestACallBackEvent();
      }}>
      <img src='/call-back.svg' alt="request a call back" />
      <span>Request A Call Back</span>
      </PopupItem>
      <Link href="https://wa.me/919599615300?text=I'm%20interested%20in%20workcations" passHref>
      <PopupItem target="_blank" onClick={() => {
            setMobilePopup(!showMobilePopup);
            sendWhatsAppEvent();
          }}>
      <img src='/whatsapp.svg' alt="whatsapp" />
      <span>WhatsApp</span>
      </PopupItem>
      </Link>
      <Link href="tel:8814871652" passHref>
      <PopupItem target="_blank" onClick={() => {
            setMobilePopup(!showMobilePopup);
            sendCallNowEvent();
          }}>
      <img src='/call-now.svg' alt="call now" />
      <span>Call Now</span>
      </PopupItem>
      </Link>
      </PopupMobile>
    </Fragment>
  );
};

export default CallIcon;

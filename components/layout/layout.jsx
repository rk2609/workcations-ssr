import React from "react";

import Header from "../header/header";
import CallIcon from "../call-icon/call";
import ContactPopup from "../contact-popup/contact-popup";
import Footer from "../footer/footer";

import { Container } from "./layout.style";

const Layout = ({ children }) => (
  <Container>
    {children}
    <Header />
    <CallIcon />
    <ContactPopup />
    <Footer />
  </Container>
);

export default Layout;

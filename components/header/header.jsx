import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { toggleContactPopupHidden } from "../../redux/contact-popup/contact-popup.actions";

import {
  Container,
  Logo,
  Menu,
  MenuOption,
  Hamburger,
  Line1,
  Line2,
  Line3,
} from "./header.style";

const Header = () => {
  const dispatch = useDispatch();
  const isServer = typeof window === "undefined";

  const [headerPosition, setHeader] = useState({
    visible: true,
    prevScrollpos: isServer ? 0 : window.pageYOffset,
  });

  const [open, setOpen] = useState(false);

  const menuOpen = () => {
    setOpen(!open);
  };

  const { prevScrollpos, visible } = headerPosition;

  const handleScroll = () => {
    const currentScrollPos = isServer ? 0 : window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    setHeader({ prevScrollpos: currentScrollPos, visible });
  };

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isServer) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <Container visible={visible}>
      <Link
        href="/"
        /*onClick={() => {
          setOpen(false);
        }}*/
      >
        <Logo>
          <img src="./logo.svg" alt="Workcations" />
        </Logo>
      </Link>
      <Menu open={open}>
        <Link href="/properties">
          <MenuOption>Destinations</MenuOption>
        </Link>
        <Link href="/blog">
          <MenuOption>Blog</MenuOption>
        </Link>
        <div onClick={() => dispatch(toggleContactPopupHidden())}>Connect</div>
      </Menu>
      <Hamburger>
        <button onClick={menuOpen}>
          <svg width="60" height="40" viewBox="0 0 100 100">
            <Line1
              open={open}
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <Line2 open={open} d="M 20,50 H 80" />
            <Line3
              open={open}
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </Hamburger>
    </Container>
  );
};

export default Header;

/*

<MenuOption
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            setOpen(false);
          }}
          to="/"
        >
          Membership
        </MenuOption>
        
        */

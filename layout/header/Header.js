import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink,
} from "reactstrap";
import logo from "../../assets/images/logos/white-text.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <Image src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link href="https://iridescent-madeleine-71c70d.netlify.app/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Hire Tech Talent
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="https://iridescent-madeleine-71c70d.netlify.app/">
                    <a
                      className={
                        router.pathname == "/basic"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      Register as a freelancer
                    </a>
                  </Link>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <NavLink
                  href="https://iridescent-madeleine-71c70d.netlify.app/"
                  className="btn btn-light font-14"
                  target="_blank"
                >
                  Hire Tech Talent
                </NavLink>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;

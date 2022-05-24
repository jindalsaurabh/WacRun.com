import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
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
import WACRunlogo from "../../assets/images/logos/WacRunlogo.png";

const Header = () => {
  const [language, setLanguage] = useState('en');

  const { t } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="https://WacRun.com">
              <Image class="logo" src={WACRunlogo} alt="WACRun" />
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
                  <Link href="https://clients.wacrun.com/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      {t("common:HireTalent")}
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="https://forms.gle/qTeoGsZjqk3kS9c48">
                    <a
                      className={
                        router.pathname == "/basic"
                          ? "text-white nav-link"
                          : "nav-link"
                      }
                    >
                      {t("common:FreelancerRegn")}
                    </a>
                  </Link>
                </NavItem>
                <NavItem>

                  <ul>

          {router.locales.map((locale) => (

    <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a className={"text-white"}>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>

                </NavItem>
              </Nav>

            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
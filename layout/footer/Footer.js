/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20"> {t("common:InDemandTalent")}</h5>
            <p>React Native</p>
            <p>Python</p>
            <p>Front-end Developers</p>
            <p>Java Developers</p>
            <p>UX Designers</p>
            <p>UI Designers</p>
            <p>Dev Ops</p>
            <p>Cloud Architects</p>

          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">{t("common:About")}</h5>
            <p>
              {t("common:AboutUs")}
            </p>
            <p>
              <Link href="https://wacrun.com/faqs">
                <a className="link">{t("common:FAQs")}</a>
              </Link>
            </p>
             <p>
              {t("common:Blog")}
            </p>
            <p>
              {t("common:Careers")}
            </p>
            <p>
              Email: <Link href="mailto: contact@wacrun.com">
                <a className="link"> contact@wacrun.com</a>
              </Link>
              <br />
              Site:
              <Link href="https://www.wacrun.com">
                <a className="link"> WacRun.com</a>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">{t("common:Customers")}</h5>
            <p>
              <Link href="https://clients.wacrun.com/">
                <a className="link">{t("common:HireDevelopers")}</a>
              </Link>
            </p>
            <p>
              <Link href="https://www.clients.wacrun.com">
                <a className="link">{t("common:HireDesigners")}</a>
              </Link>
            </p>
            <p>
              <Link href="https://www.clients.wacrun.com">
                <a className="link">{t("common:HireProjectManagers")}</a>
              </Link>
            </p>
            <p>
              <Link href="https://www.clients.wacrun.com">
                <a className="link">{t("common:HireSpecificSkills")}</a>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">{t("common:Freelancers")}</h5>
            <p>
              <Link href="https://forms.gle/qTeoGsZjqk3kS9c48">
                <a className="link">{t("common:RegisterWithWR")}</a>
              </Link>
            </p>
            <p>
              <Link href="https://www.wacrun.com">
                <a className="link">{t("common:WriteforUs")}</a>
              </Link>
            </p>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  {t("common:RightsReserved")}
                  <Link href="https://www.wacrun.com">
                    <a className="link">WacRun.com</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">{t("common:TermsofUse")}</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">{t("common:LegalDisclaimer")}</a>
                  </Link>
                  <Link href="https://docs.google.com/document/d/1HqeGV9gtTjx5L7HBoR7TmYeatd53ddRp/edit?usp=sharing&ouid=109846037597811595449&rtpof=true&sd=true">
                    <a className="p-10">{t("common:PrivacyPolicy")}</a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;

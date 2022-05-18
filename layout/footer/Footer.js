/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">In-demand talent</h5>
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
            <h5 className="m-b-20">About</h5>
            <p>
              About Us
            </p>
            <p>
              FAQs
            </p>
             <p>
              Blog
            </p>
            <p>
              Careers
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
            <h5 className="m-b-20">Customers</h5>
            <p>
              <Link href="https://www.wacrun.com">
                <a className="link">Hire Developers</a>
              </Link>
            </p>
            <p>
              <Link href="https://www.wacrun.com">
                <a className="link">Hire Designers</a>
              </Link>
            </p>
            <p>
              <Link href="https://www.wacrun.com">
                <a className="link">Hire Project Managers</a>
              </Link>
            </p>
            <p>
              <Link href="https://www.wacrun.com">
                <a className="link">Hire for Specific Skills</a>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Freelancers</h5>
            <p>
              <Link href="https://www.wacrun.com">
                <a className="link">Register with WacRun.com</a>
              </Link>
            </p>
            <p>
              <Link href="https://www.wacrun.com">
                <a className="link">Write for Us</a>
              </Link>
            </p>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by{" "}
                  <Link href="https://www.wacrun.com">
                    <a className="link">WacRun.com</a>
                  </Link>
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <Link href="#">
                    <a className="p-10 p-l-0">Terms of Use</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Legal Disclaimer</a>
                  </Link>
                  <Link href="#">
                    <a className="p-10">Privacy Policy</a>
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

/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row className="justify-content-center">
          <Col md="7" className="text-center">
            <h1 className="title font-bold">Developers</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">WacRun Developers</h5>
            <p>71 Amsteroum Avenue Cronish Night, NY 35098</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <p>
              Reception : +205 123 4567 <br />
              Office : +207 235 7890
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              <Link href="#">
                <a className="link">contact@wacrun.com</a>
              </Link>
              <br />
              Site :
              <Link href="https://www.wacrun.com">
                <a className="link">wacrun.com</a>
              </Link>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="#">
                <a className="link">
                  <i className="fa fa-facebook"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FooterComponent;

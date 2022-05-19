import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/banner-img.png";
import useTranslation from "next-translate/useTranslation";

const Banner2 = () => {
  const { t } = useTranslation("common");
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              {t("common:banner2title")}
            </h1>
            <h4 className="subtitle font-light">
              {t("common:banner2subtitle")}
            </h4>
            <a
              href="https://clients.wacrun.com/"
              className="btn btn-danger m-r-20 btn-md m-t-30 "
            >
              {t("common:HireTalent")}
            </a>
            <Link href="https://forms.gle/qTeoGsZjqk3kS9c48">
              <a className="btn btn-md m-t-30  btn-outline-light ">
              {t("common:FreelancerRegn")}
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;

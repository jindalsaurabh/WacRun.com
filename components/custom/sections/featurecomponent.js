/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import GraphicDesigner from "../../../assets/images/features/feature13/GraphicDesigner.png";
import ProjectManagement from "../../../assets/images/features/feature13/ProjectManagement.png";
import SoftwareDeveloper from "../../../assets/images/features/feature13/SoftwareDeveloper.jpeg";
import SpecificRequirement from "../../../assets/images/features/feature13/SpecificRequirement.png";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";
import useTranslation from "next-translate/useTranslation";

const FeatureComponent = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">

              <h2 className="title">{t("common:featurecomponenttitle")}</h2>
              <h6 className="subtitle">
                {t("common:featurecomponentsubtitle")}
              </h6>

            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-star"></i>
                  </div>
                  <h5 className="font-medium">{t("common:whyUs1")}</h5>
                  <p className="m-t-20">
                    {t("common:whyUs1SubText")}
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-signal"></i>
                  </div>
                  <h5 className="font-medium">{t("common:whyUs2")}</h5>
                  <p className="m-t-20">
                    {t("common:whyUs2SubText")}
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-check-circle"></i>
                  </div>
                  <h5 className="font-medium">{t("common:whyUs3")}</h5>
                  <p className="m-t-20">
                    {t("common:whyUs3SubText")}
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <div className="icon-round bg-light-info">
                    <i className="fa fa-flag"></i>
                  </div>
                  <h5 className="font-medium">{t("common:whyUs4")}</h5>
                  <p className="m-t-20">
                     {t("common:whyUs4SubText")}
                  </p>
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
      <div className="bg-light spacer feature20 up">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">{t("common:featurecomponentsecondtitle")}</h2>
            </Col>
          </Row>
          <Row className="wrap-feature-20">
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="12">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={SoftwareDeveloper}
                          height="150"
                          width="200"
                          className="rounded"
                          alt="Developers"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{t("common:role1")}</h3>
                        <h6 className="font-small">
              {t("common:role1Description")}
            </h6>
                      </div>
                    </CardBody>
                  </Col>
                  {/*
                  <Col md="4" className="text-center">
                    <a href="https://clients.wacrun.com/" className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
  */}
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="12">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={GraphicDesigner}
                          height="150"
                          width="200"
                          className="rounded"
                          alt="Designers"
                        />
                      </div>
                    <div>
                        <h3 className="font-medium">{t("common:role2")}</h3>
                        <h6 className="font-small">
                          {t("common:role2Description")}
                        </h6>
                      </div>
                    </CardBody>
                  </Col>
                  {/*
                  <Col md="4" className="text-center">
                    <a href="https://clients.wacrun.com/" className="text-white className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                  */}
                </Row>
              </Card>
            </Col>
 <Col lg="6">
              <Card>
                <Row>
                  <Col md="12">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={ProjectManagement}
                          height="150"
                          width="200"
                          className="rounded"
                          alt="Project Management"
                        />
                      </div>
                    <div>
                        <h3 className="font-medium">{t("common:role3")}</h3>
                        <h6 className="font-small">
              {t("common:role3Description")}
            </h6>
                      </div>
                    </CardBody>
                  </Col>
                  {/*
                  <Col md="4" className="text-center">
                    <a href="https://clients.wacrun.com/" className="text-white  className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                  */}
                </Row>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Row>
                  <Col md="12">
                    <CardBody className="d-flex no-block">
                      <div className="m-r-20">
                        <Image
                          src={SpecificRequirement}
                          height="150"
                          width="200"
                          className="rounded"
                          alt="Specific Requirement"
                        />
                      </div>
                      <div>
                         <h3 className="font-medium">{t("common:role4")}</h3>
                        <h6 className="font-small">
              {t("common:role4Description")}
            </h6>
                      </div>
                    </CardBody>
                  </Col>
                  {/*
                  <Col md="4" className="text-center">
                    <a href="https://clients.wacrun.com/" className="text-white className="text-white linking bg-info">
                      Lets Talk <i className="ti-arrow-right"></i>
                    </a>
                  </Col>
                  */}
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeatureComponent;

/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import GraphicDesigner from "../../../assets/images/features/feature13/GraphicDesigner.png";
import ProjectManagement from "../../../assets/images/features/feature13/ProjectManagement.png";
import SoftwareDeveloper from "../../../assets/images/features/feature13/SoftwareDeveloper.jpeg";
import SpecificRequirement from "../../../assets/images/features/feature13/SpecificRequirement.png";
import img5 from "../../../assets/images/features/feature30/feature-img.jpg";

const FeatureComponent = () => {
  return (
    <div>
      <div className="feature4">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Perfect talent at the perfect price</h2>
              <h6 className="subtitle">
                Choose from a pre-vetted list of the best talent.

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
                  <h5 className="font-medium">High quality of talent</h5>
                  <p className="m-t-20">
                    Our talent is tsted against multiple parameters to ensure high technical ability, communication skills, rich work experience and motivation.

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
                  <h5 className="font-medium">Hire rapidly</h5>
                  <p className="m-t-20">
                    Speed up your hiring process. Scale up or down as per the needs of your project. Flexible engagements -  hourly or full time,no strings attached.
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
                  <h5 className="font-medium">Economical and cost effective </h5>
                  <p className="m-t-20">
                    Choose the rates which suit you. We have talent to offer at your price point.(Need more content)
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
                  <h5 className="font-medium">Leverage the advantages of remote work methodology </h5>
                  <p className="m-t-20">
                     Get a pre-vetted list of candidates to select from all across the world. Ensure continuity in processes without worrying about geographical constraints.(Need more)
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
              <h2 className="title">Get world class talent which delivers results </h2>
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
                        <h3 className="font-medium">Developers</h3>
                        <h6 className="font-small">
              Software engineers with expertise across technologies !
            </h6>
                      </div>
                    </CardBody>
                  </Col>
                  {/*
                  <Col md="4" className="text-center">
                    <a href="https://iridescent-madeleine-71c70d.netlify.app/" className="text-white linking bg-info">
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
                        <h3 className="font-medium">Designers</h3>
                        <h6 className="font-small">
              Experts with skills in UI/UX, Visual, & Interaction design !
            </h6>
                      </div>
                    </CardBody>
                  </Col>
                  {/*
                  <Col md="4" className="text-center">
                    <a href="https://iridescent-madeleine-71c70d.netlify.app/" className="text-white linking bg-info">
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
                        <h3 className="font-medium">Project Management</h3>
                        <h6 className="font-small">
              Digital, Technical Project Managers and scrum masters.
            </h6>
                      </div>
                    </CardBody>
                  </Col>
                  {/*
                  <Col md="4" className="text-center">
                    <a href="https://iridescent-madeleine-71c70d.netlify.app/" className="text-white linking bg-info">
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
                         <h3 className="font-medium">Specific Requirements</h3>
                        <h6 className="font-small">
              Special skills, custom requirements, flexible engagements.
            </h6>
                      </div>
                    </CardBody>
                  </Col>
                  {/*
                  <Col md="4" className="text-center">
                    <a href="https://iridescent-madeleine-71c70d.netlify.app/" className="text-white linking bg-info">
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

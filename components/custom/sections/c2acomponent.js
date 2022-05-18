/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
//import img1 from "../../../assets/images/features/feature48/app-store.png";
//import img2 from "../../../assets/images/features/feature48/play-store.png";

const C2aComponent = () => {
  return (
    <div>
      <div className="spacer bg-light">
      </div>
      <div className="mini-spacer bg-info text-white c2a7">
        <Container>
          <div className="d-flex">
            <div className="display-7 align-self-center">
              Want to accelerate your project?
            </div>
            <div className="ml-auto m-t-10 m-b-10">
              <a href="https://iridescent-madeleine-71c70d.netlify.app/" class="btn btn-outline-light btn-md">Hire Talent</a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default C2aComponent;

/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import Image from "next/image";
//import img1 from "../../../assets/images/features/feature48/app-store.png";
//import img2 from "../../../assets/images/features/feature48/play-store.png";
import useTranslation from "next-translate/useTranslation";


const C2aComponent = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="spacer bg-light">
      </div>
      <div className="mini-spacer bg-info text-white c2a7">
        <Container>
          <div className="d-flex">
            <div className="display-7 align-self-center">
              {t("common:CTAQuestion")}
            </div>
            <div className="ml-auto m-t-10 m-b-10">
              <a href="https://clients.wacrun.com/" class="btn btn-outline-light btn-md">{t("common:HireTalent")}
                </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default C2aComponent;

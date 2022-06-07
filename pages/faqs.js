import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import useTranslation from "next-translate/useTranslation";

const faqs = () => {
  const { t } = useTranslation("faqs");
  return (

    <div className="static-slider-head">

      <Head>
       <title>{t("faqs:TitleFAQs")}</title>
        <meta
          name="description"
          content={t("faqs:DescriptionFAQs")}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>

      <Container>
        <Row className="justify-content-center">
          <Row className="m-t-40">
            <h1 className="title">
              {t("faqs:FrequentlyAskedQuestionsForClients")}
            </h1>
          </Row>

            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <h5 className="font-medium">1. {t("faqs:AreThereAnyUpfrontCosts")} ?</h5>
                  <p className="m-t-1">{t("faqs:AreThereAnyUpfrontCosts-answer")}
                  <div></div>
                  {t("faqs:AreThereAnyUpfrontCosts-subanswer")}
                  </p>

                  <h5 className="font-medium">2. {t("faqs:DoYouProvideaFreeTrial")}?</h5>
                  <p className="m-t-1">{t("faqs:DoYouProvideaFreeTrial-answer")}
                  <div></div>
                  {t("faqs:DoYouProvideaFreeTrial-answer1")}
                  <div></div>
                  {t("faqs:DoYouProvideaFreeTrial-answer2")}
                  </p>
                  <p className="m-t-1">{t("faqs:DoYouProvideaFreeTrial-answer3")}
                  <div></div>
                  {t("faqs:DoYouProvideaFreeTrial-answer4")}
                  <div></div>
                  {t("faqs:DoYouProvideaFreeTrial-answer5")}
                  </p>

                  <h5 className="font-medium">3. {t("faqs:HowisWacRunDifferent")}?</h5>
                  <p className="m-t-1">{t("faqs:HowisWacRunDifferent-answer1")}
                  <div></div>
                  {t("faqs:HowisWacRunDifferent-answer2")}
                  <div></div>
                  {t("faqs:HowisWacRunDifferent-answer3")}
                  <div></div>
                  {t("faqs:HowisWacRunDifferent-answer4")}
                  </p>
                  <p className="m-t-1">{t("faqs:HowisWacRunDifferent-answer5")}
                  </p>

                  <h5 className="font-medium">4. {t("faqs:DoContractorsSpeakOrWriteFrench")}?</h5>
                  <p className="m-t-1">{t("faqs:DoContractorsSpeakOrWriteFrench-answer")}
                  </p>

                  <h5 className="font-medium">5. {t("faqs:Whererethecontractorslocated")}?</h5>
                  <p className="m-t-1">{t("faqs:Whererethecontractorslocated-answer")}
                  </p>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="wrap-feature4-box">
              <Card>
                <CardBody>
                  <h5 className="font-medium">6. {t("faqs:Whathappensifthecontractorgoesmissing")}?</h5>
                  <p className="m-t-1">{t("faqs:Whathappensifthecontractorgoesmissing-answer")}
                  <div></div>
                  {t("faqs:Whathappensifthecontractorgoesmissing-answer1")}
                  <div></div>
                  {t("faqs:Whathappensifthecontractorgoesmissing-answer2")}
                  <div></div>
                  {t("faqs:Whathappensifthecontractorgoesmissing-answer3")}
                  </p>

                  <h5 className="font-medium">7. {t("faqs:Legalrightstotheworkcreated")}?</h5>
                  <p className="m-t-1">{t("faqs:Legalrightstotheworkcreated-answer")}
                  </p>
                  <p className="m-t-1">{t("faqs:Legalrightstotheworkcreated-answer1")}
                  </p>

                  <h5 className="font-medium">8. {t("faqs:HowOftenChargedPaymentsInvoicesHandled")}?</h5>
                  <p className="m-t-1">{t("faqs:HowOftenChargedPaymentsInvoicesHandled-answer1")}
                  </p>
                  <p className="m-t-1">{t("faqs:HowOftenChargedPaymentsInvoicesHandled-answer2")}
                  </p>

                  <h5 className="font-medium">9. {t("faqs:HireFullTimeWorker")}?</h5>
                  <p className="m-t-1">{t("faqs:HireFullTimeWorker-answer")}
                  </p>

                  <h5 className="font-medium">10. {t("faqs:BringContractorsOnsite")}?</h5>
                  <p className="m-t-1">{t("faqs:BringContractorsOnsite-answer")}
                  </p>

                  <h5 className="font-medium">11. {t("faqs:FurtherQuestions")}?</h5>
                  <p className="m-t-1">{t("faqs:FurtherQuestions-answer1")}
                  <div></div>
                  <a href="mailto:contact@WacRun.com?subject=Query for WacRun.com">
                  <b>{t("faqs:FurtherQuestions-answer2")}</b></a>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </Container>
    </div>
  );
};

export default faqs;
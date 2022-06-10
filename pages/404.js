import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";
import useTranslation from "next-translate/useTranslation";

const ErrorPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className="static-slider-head">
      <Head>
        <title>{t("common:404PagenotFound")}</title>
        <meta
          name="description"
          content={t("common:404Error")}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col lg="8" md="6" className="align-self-center text-center">
            <h1 className="title">{t("common:404ErrorTitle")}</h1>
            <h4 className="subtitle font-light">
             {t("common:404Error")}
            </h4>
            <Link href="/">
              <Button className="btn btn-md m-t-30 btn-info-gradiant font-14">
                {t("common:BacktoHomepage")}
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;

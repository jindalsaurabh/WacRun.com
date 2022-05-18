import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <div>
      <Head>
        <title>{t("common:title")}</title>
        <meta
          name="description"
          content="WacRun - Hire developers and designers"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}

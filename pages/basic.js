import Head from "next/head";
import Components from "../components/basic/AllComponents";

export default function Basic() {
  return (
    <div>
      <Head>
        <title>WacRun - Hire developers and designers</title>
        <meta name="description" content="Hire developers and designers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Components />
    </div>
  );
}

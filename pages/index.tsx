import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../Components/01. Navbar/Navbar";
import Main from "../Components/02. Index/01. Main/Main";
import Testimonials from "../Components/02. Index/02. Testimonials/Testimonials";
import CloudComputing from "../Components/02. Index/03. Cloud Computing/CloudComputing";
import Scale from "../Components/02. Index/04. Scale/Scale";
import Community from "../Components/02. Index/05. Community/Community";
import LinkCards from "../Components/02. Index/06. Link Cards/LinkCards";
import GetStarted from "../Components/02. Index/07. Get Started/GetStarted";
import Links from "../Components/02. Index/08. Links/Links";
import Footer from "../Components/03. Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DigitalOcean | Clone</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      <Main />
      <Testimonials />
      <CloudComputing />
      <Scale />
      <Community />
      <LinkCards />
      <GetStarted />
      <Links />
      <Footer />
    </div>
  );
};

export default Home;

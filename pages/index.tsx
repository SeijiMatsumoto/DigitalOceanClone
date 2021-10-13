import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../Components/01. Navbar/Navbar";
import Main from "../Components/02. Index/01. Main/Main";
import Testimonials from "../Components/02. Index/02. Testimonials/Testimonials";
import CloudComputing from "../Components/02. Index/03. Cloud Computing/CloudComputing";
import Scale from "../Components/02. Index/04. Scale/Scale";
import Community from "../Components/02. Index/05. Community/Community";
import LinkCards from "../Components/02. Index/06. Link Cards/LinkCards";
import Footer from "../Components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Digital Ocean | Clone</title>
        <meta name="description" content="Created by Seiji Matsumoto" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Main />
      <Testimonials />
      <CloudComputing />
      <Scale />
      <Community />
      <LinkCards />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../../Components/Banner";
import { Outlet } from "react-router-dom";
import HomeCard from "./homeCard/HomeCard";
import Success from "./Success/Succes";
import UnicSection from "./Unic/UnicSection";
import { Helmet } from "react-helmet";
import NewsLatter from "./NewsLatter/NewsLatter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home || Historical Artifacts</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <Banner></Banner>
        <Outlet></Outlet>
        <HomeCard></HomeCard>
        <UnicSection></UnicSection>
        <Success></Success>
        <NewsLatter></NewsLatter>
      </div>
    </div>
  );
};

export default Home;

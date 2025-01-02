import React from "react";
import  {Hero, BuildingLinks, ColdEmail, CTA, Footer, Nav, Newsletter, Pricings, Video, WhyUs} from '../components'

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <WhyUs />
      <BuildingLinks />
      <Video/>
      <ColdEmail />
      <CTA />
      <Pricings />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;

import React from 'react';
import HomeIntroSection from '../components/homePage/HomeIntroSection';
import KeyFeatures from '../components/homePage/KeyFeatures';
import HowItWorks from '../components/homePage/HowItWorks';
import CTASection from '../components/homePage/CTASection';

const Home = () => {
  return (
    <div id="home-page">
      <HomeIntroSection />
      <KeyFeatures />
      <HowItWorks />
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;
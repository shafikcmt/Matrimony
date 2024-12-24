import React from 'react';
import HeroSection from '../../Components/Navbar/HeroSection';
import ProcessSteps from '../../Components/ProcessSteps/ProcessSteps';
import HappyStories from '../../Components/HappyStories/HappyStories';


const HomePage = () => {
  return (
    <div>
     <HeroSection />
     <ProcessSteps />
     <HappyStories />
    </div>
  );
};

export default HomePage;

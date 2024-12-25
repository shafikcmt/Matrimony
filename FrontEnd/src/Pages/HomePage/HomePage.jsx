import React from 'react';
import HeroSection from '../../Components/Navbar/HeroSection';
import ProcessSteps from '../../Components/ProcessSteps/ProcessSteps';
import HappyStories from '../../Components/HappyStories/HappyStories';
import YourStory from '../../Components/YourStory/YourStory';
import UserStatistics from '../../Components/UserStatistics/UserStatistics';


const HomePage = () => {
  return (
    <div>
     <HeroSection />
     <ProcessSteps />
     <HappyStories />
     <YourStory />
     <UserStatistics />
    </div>
  );
};

export default HomePage;

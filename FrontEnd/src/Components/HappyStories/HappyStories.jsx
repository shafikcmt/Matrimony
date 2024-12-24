import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HappyStories.css";

const HappyStories = () => {
  const stories = [
    { 
      img: "https://i.pinimg.com/736x/ee/9e/b8/ee9eb81f8330de565e2f638bbeeff40c.jpg", 
      description: "A heartwarming story of love and companionship by Raj and Priya."
    },
    { 
      img: "https://i.pinimg.com/736x/97/82/86/978286c9a5f5c32888e3d01e44294aba.jpg", 
      description: "An incredible journey of finding true love for Amit and Neha."
    },
    { 
      img: "https://myjoon.app/blog/content/images/2023/11/sd335_Happy_Muslim_couple_having_a_photo_shoot_after_getting_ma_b2d43ea6-0995-48b9-8282-ecdd0d143564.jpg", 
      description: "Deepak and Pooja's love story is a testament to patience and faith."
    },
    { 
      img: "https://static.vecteezy.com/system/resources/previews/024/075/677/non_2x/realistic-portrait-of-loving-muslim-couple-during-the-marriage-ceremony-or-eid-celebration-generative-ai-photo.jpg", 
      description: "Ravi and Anjali found each other through mutual interests and respect."
    },
    { 
      img: "https://static.vecteezy.com/system/resources/thumbnails/024/075/700/small_2x/loving-young-muslim-couple-character-during-ceremony-generative-ai-photo.jpg", 
      description: "Manoj and Sunita's journey shows the power of understanding."
    },
    { 
      img: "https://media.istockphoto.com/id/1175680546/photo/heres-to-love-and-happily-ever-after.jpg?s=612x612&w=0&k=20&c=PRuQ8fs47MXdnDkSaXwS-booIaaSDTSeOlxBrnFeSZo=", 
      description: "Vikram and Meena prove that love knows no boundaries."
    }
    ,
    { 
        img: "https://d397bfy4gvgcdm.cloudfront.net/138515-_DSC5203.jpeg", 
        description: "Vikram and Meena prove that love knows no boundaries."
    }
    ,
    { 
        img: "https://images.pexels.com/photos/24334483/pexels-photo-24334483.jpeg?cs=srgb&dl=pexels-beauty-of-pixels-3700378-24334483.jpg&fm=jpg", 
        description: "Vikram and Meena prove that love knows no boundaries."
    }
      ,
      { 
        img: "https://images.squarespace-cdn.com/content/v1/5d00b70796365b000104a4cb/1586602744684-XMVNKO02JY8NNMBO5BB7/%C2%A9SaleenaKhanPhoto-6751.JPG?format=1500w", 
        description: "Vikram and Meena prove that love knows no boundaries."
      }
  ];

  return (
    <div className="happy-stories py-5">
      <h2 className="text-center mb-4">Millions of Happy Stories</h2>
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay 
        showIndicators={false}
        showStatus={false}
      >
        {/* Each slide contains 3 stories */}
        {Array.from({ length: Math.ceil(stories.length / 3) }).map((_, index) => (
          <div key={index} className="d-flex justify-content-center">
            {stories.slice(index * 3, index * 3 + 3).map((story, idx) => (
              <div key={idx} className="story-card">
                <div className="story-image" style={{ backgroundImage: `url(${story.img})` }}>
                  <div className="story-overlay">
                    <p>{story.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HappyStories;

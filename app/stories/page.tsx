import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      names: "Sarah & John",
      date: "June 2024",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3",
      story: "We found each other here and couldn't be happier. Thank you for helping us find true love! Our journey began with a simple message and blossomed into a beautiful relationship.",
    },
    {
      id: 2,
      names: "Emily & Michael",
      date: "March 2024",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3",
      story: "From the first coffee date to our wedding day, every moment has been magical. We're grateful to have found each other on this platform.",
    },
    {
      id: 3,
      names: "David & Maria",
      date: "May 2024",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3",
      story: "Distance was never a barrier for us. We connected instantly and knew we were meant to be together. Now we're living our dream life together.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Happy Stories</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real stories from couples who found their perfect match on our platform. Your love story could be next!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
              <img
                src={story.image}
                alt={story.names}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{story.names}</h3>
                <p className="text-sm opacity-90">{story.location}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                {story.story}
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center text-accent">
                  <Heart className="w-4 h-4 mr-2 fill-current" />
                  <span>Married on {story.date}</span>
                </div>
                <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-white">
                  Read More
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
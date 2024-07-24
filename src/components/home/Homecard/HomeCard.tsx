import React, { useState, useEffect } from "react";
import travel from "../../../assets/images/Traveller 1.png";
import plane from "../../../assets/images/plane.png";
import play from "../../../assets/images/Polygon 1.png"
import Aos from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeCard: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // AOS initialization
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation will only happen once
    });
  }, []); // Empty dependency array ensures this runs only once after initial render

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="max-w-[1220px] flex items-center justify-between">
      {/* Section for text content */}
      <section className="max-w-[500px]" data-aos="fade-left">
        <h2 className="text-xl text-[#DF6951] font-bold">
          Best Destinations around the world
        </h2>
        <h3 className="text-7xl font-bold text-[#181E4B] leading-0">
          Travel, <span className="">enjoy</span> and live a new and full life
        </h3>
        <p className="p text-[#5E6282] font-medium text-[18px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex justify-between mt-10 text-white">
          {/* "Find out more" button */}
          <button className="w-[200px] h-[50px] bg-[#F1A501] rounded-md sans">
            <p>Find out more</p>
          </button>
          {/* "Play demo" button */}
          <button 
            className="w-[200px] h-[50px] bg-transparent rounded-md sans flex items-center text-[#686D77]" 
            onClick={handlePlayVideo}
          >
            <div className="w-[10px] h-[10px] rounded-full">
              {isVideoPlaying && (
                <iframe
                  src="https://www.youtube.com/embed/LSQDasgkG2c?autoplay=1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="300"
                  height="100"
                ></iframe>
              )}
            </div>
            {!isVideoPlaying &&  
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#DF6951] rounded-full flex items-center justify-center">
                    <img src={play} alt="" />
                </div>
                <p>play demo</p>
            </div>
            
            }
          </button>
        </div>
      </section>
      {/* Section for images */}
      <section className="mt-10 relative" data-aos="fade-right">
        <img src={travel} alt="traveler" />
        <img src={plane} alt="plane" className="absolute top-3" />
        <img src={plane} alt="plane" className="absolute top-3 right-4 z-[-1]" />
      </section>
    </div>
  );
};

export default HomeCard;

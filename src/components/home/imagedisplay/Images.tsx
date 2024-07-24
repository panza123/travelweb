import image from "./index";
import  {  useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Images() {

  useEffect(() => {
    // AOS initialization
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Animation will only happen once
    });
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div className="w-full flex justify-between mt-10" data-aos="fade-right"  >
      {image.map((item, index) => (
        <img 
          src={item.pic} 
          alt="image" 
          key={index} 
          className="object-contain"
        />
      ))}
    </div>
  );
}

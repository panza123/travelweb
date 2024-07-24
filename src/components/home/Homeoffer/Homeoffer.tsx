import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import design from "../../../assets/images/Group 4.png"; // Importing design image
import dis from "./index"; // Importing data for the offerings

export default function Homeoffer() {
  useEffect(() => {
    // AOS initialization
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Animation will only happen once
    });
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <div className="max-w-[1200px] mx-auto">
      {" "}
      {/* Centering the container and setting max width */}
      <section className="flex flex-col md:flex-row w-full items-center text-center md:text-left justify-between py-10" data-aos="zoom-in">
        <div className="text-center w-full mb-10 md:mb-0">
          {" "}
          {/* Center text and margin for small screens */}
          <p className="text-[#5E6282] font-semibold">CATEGORY</p>
          <p className="text-4xl text-[#14183E] font-bold">
            We Offer Best Services
          </p>
        </div>
        <img src={design} alt="design" className="object-cover mt-10 md:mt-0" />{" "}
        {/* Adjusting margin for small screens */}
      </section>
      <section className="w-full h-full flex justify-between items-start gap-8">
        {" "}
        {/* Flex wrap for responsiveness and gap for spacing */}
        {dis.map((item, index) => (
          <div
            className="max-w-[350px] w-full flex flex-col items-center text-center py-5 shadow-lg
             shadow-slate-200 cursor-pointer rounded-md bg-white "
            key={index}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1000"
            data-aos-delay={`${index * 200}`}
            data-aos-easing="ease-in-sine"
          >
            {" "}
            {/* Max width and full width for responsive design */}
            <div className="w-full h-[200px] flex items-center justify-center overflow-hidden">
              {" "}
              {/* Container for consistent image sizing */}
              <img
                src={item.img}
                alt={item.title}
                className="object-cover"
              />{" "}
              {/* Adjusted image styling */}
            </div>
            <h5 className="text-xl font-bold mb-2">{item.title}</h5>{" "}
            {/* Added text styling */}
            <p className="text-[#5E6282] pt-2">{item.text}</p>{" "}
            {/* Adjusted text color */}
          </div>
        ))}
      </section>
    </div>
  );
}

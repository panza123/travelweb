// Importing necessary modules and assets
import post from "./index";
import avatar from "../../../assets/images/Rectangle 17.jpg";
import leave from "../../../assets/images/LEAF.png";
import map from "../../../assets/images/map icon.png";
import send from "../../../assets/images/send.png";
import build from "../../../assets/images/building 1.png";
import city from "../../../assets/images/image 32.png";
import group from "../../../assets/images/Group 3.png";
import vector from "../../../assets/images/Vector(1).png";
import Aos from 'aos';
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
// Defining the Booking component
export default function Booking() {
  useEffect(() => {
    // AOS initialization
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Animation will only happen once
    });
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    // Container div with a maximum width and flexbox layout
    <div className="max-w-[1200px] flex gap-10 mt-10 mx-auto" data-aos="zoom-in-right" >
      {/* Section for booking steps */}
      <section className="flex-1 max-w-[600px]">
        {/* Title for the booking steps */}
        <p className="text-[#5E6282] font-semibold text-xl">Easy Booking</p>
        <h3 className="text-6xl pt-2 text-[#14183E] font-bold capitalize">
          Book your next trip in 3 easy steps
        </h3>

        {/* Container for the booking steps */}
        <div className="mt-6 space-y-6">
          {
            // Mapping over the 'post' array to display each booking step
            post.map((item, index) => (
              <div
                className="flex items-start gap-4 text-[#5E6282]"
                key={index}
              >
                <img
                  src={item.img}
                  alt="step"
                  className="w-14 h-14 object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {/* Section for trip details */}
      <section className="w-[300px] h-[400px] rounded-[10px] px-4 py-6 text-[#84829A] relative shadow-lg shadow-slate-200 ">
        <img src={avatar} alt="avatar" className="w-full rounded-md" />
        <div className="mt-4">
          <p className="font-semibold text-lg">Trip To Greece</p>
          <p>14-29 June / by Robbin Joseph</p>
          <div className="flex gap-4 mt-4">
            <img src={leave} alt="leave" className="w-6 h-6" />
            <img src={map} alt="map" className="w-6 h-6" />
            <img src={send} alt="send" className="w-6 h-6" />
          </div>
          <div className="flex gap-10 items-center mt-10">
            <div className="flex items-center gap-2">
              <img src={build} alt="build" className="w-6 h-6" />
              <p>24 people going</p>
            </div>
            <img src={vector} alt="like" className="w-6 h-6" />
          </div>
        </div>

        {/* Floating box for ongoing trip details */}
        <div className="absolute w-[250px] h-[150px] bottom-[55px] right-[-200px] flex gap-4 py-3 px-4 shadow-lg shadow-slate-200 bg-white rounded-[5px]">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src={city} alt="city" className="w-full h-full object-cover" />
          </div>
          <div className="text-[#080809]">
            <p>Ongoing</p>
            <p className="font-semibold text-lg">Trip to Rome</p>
            <p>40% complete</p>
            <img src={group} alt="group" className="mt-3 w-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react"; // Import useState hook from React to manage state within the component
import testi from "./index"; // Import the testimonials data from index.js (assumed to be an array of testimonial objects)
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';
// Define the Testimony component as the default export
export default function Testimony() {

  useEffect(() => {
    // AOS initialization
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Animation will only happen once
    });
  }, []); // Empty dependency array ensures this runs only once after initial render


  const [dis, setDis] = useState(testi[0]); // Initialize the state 'dis' with the first testimonial object from testi array

  return (
    <div className="max-w-[1200px] mt-10 py-2" > {/* Container div with maximum width and some margin/padding for spacing */}
      <h4 >Testimonials</h4> {/* Heading for the testimonials section */}
      <div className="w-full h-full flex gap-[100px] mt-3 text-[#5E6282]" > {/* Flex container to align child elements horizontally with some gap and margin */}
        <div className="w-[500px]"data-aos="fade-right" > {/* Left section with a fixed width */}
          <p className="text-6xl font-bold text-[#14183E] capitalize">{dis.title}</p> {/* Display the title of the current testimonial */}
          <div className="flex gap-3 "> {/* Container for the buttons with some gap between them */}
            {testi.map((item) => ( // Map over the testi array to create a button for each testimonial
              <button
                key={item.id} // Assign a unique key to each button for efficient re-rendering
                className={`w-6 h-6 rounded-full cursor-pointer mt-3 ${
                  dis.id === item.id ? 'bg-gray-200' : 'bg-gray-500' // Conditional class to change the background color based on the selected testimonial
                }`}
                onClick={() => setDis(item)} // Set the current testimonial when the button is clicked
                aria-label={`Select testimonial by ${item.name}`} // Add aria-label for better accessibility
              ></button>
            ))}
          </div>
        </div>


        <div className="max-w-[600px]" data-aos="fade-left" > {/* Right section with a maximum width */}
          <img src={dis.img} alt={`Testimonial image by ${dis.name}`} className="object-cover" /> {/* Display the image of the current testimonial */}
          <div className="max-w-[400px] shadow-lg shadow-slate-400 py-2 px-2 rounded-md font-medium ml-10"> {/* Container for the testimonial text with styling */}
            <p className="pt-2">{dis.text}</p> {/* Display the text of the current testimonial */}
            <div className="mt-4"> {/* Container for the name and location of the testimonial author */}
              <p>{dis.name}</p> {/* Display the name of the testimonial author */}
              <p>{dis.loc}</p> {/* Display the location of the testimonial author */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

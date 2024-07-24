import image from "./index"
import Aos from 'aos';
import "aos/dist/aos.css"; // Ensure AOS CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
export default function Destination() {
  useEffect(() => {
    // AOS initialization
    Aos.init({
      duration: 2000, // Animation duration in milliseconds
      once: false, // Animation will only happen once
    });
  }, []); // Empty dependency array ensures this runs only once after initial render


  return (
    <div className="max-w-[1200px] mt-10">
    
       <p className="text-[#5E6282] font-semibold text-center text-xl" data-aos="flip-right" >Top selling</p>
       <p className="text-4xl text-[#14183E] font-bold text-center pt-2" data-aos="flip-down" >
          Top Destinations
          </p>

          <section className="w-full h-full flex justify-between items-start gap-8 mt-5">
  {image.map((item, index) => (
    <div className="max-w-[500px] text-[#5E6282] font-medium rounded-md  shadow-md shadow-slate-200
     bg-white  cursor-pointer" key={index} 
    data-aos="fade-right"
    data-aos-delay ={`${index * 200}`}
    
    >
       {/* Adjusted height to be half of the 300px container */}
       <div className="w-full h-1/2">

        <img src={item.img} alt="image-location" className="w-full h-full object-cover rounded-t-md" /> {/* Added object-cover for better image fit */}
       </div>
      
      <div className="flex justify-between mt-2 px-2 py-2" > {/* Added margin-top for better spacing */}
        <p>{item.place}</p>
        <p>{item.price}</p>
      </div>
      <div className="flex gap-2 py-2 px-2">
        <img src={item.pic} alt="location" className="object-contain" />
        <p>{item.days}</p>
      </div>
    </div>
  ))}
</section>

    </div>
  )
}

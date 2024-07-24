import Navbar from "./nav/Navbar";
import background from '../../assets/images/Decore.png'
import Homeoffer from "./Homeoffer/Homeoffer";
import Destination from "./Destinations/Destination";
import Booking from "./Booking/Booking";
import Testimony from "./testimony/Testimony";
import HomeCard from "./Homecard/HomeCard";
import Images from "./imagedisplay/Images";
import From from "./form/From";

;
export default function Home() {
  return (
    <div className="max-sm:hidden sm:hidden lg:block w-full h-full px-10 py-5 relative ">
        <Navbar/>
      <img src={background} alt=""  className="absolute top-0 right-0 z-[-1]"/>
      <HomeCard/>
      <Homeoffer/>
      <Destination/>
      <Booking/>
      <Testimony/>
      <Images/>
      <From/>
    </div>
  )
}

import face from "../../assets/images/Social.png";
import twit from "../../assets/images/Social(1).png";
import insta from "../../assets/images/Group(1).png";
import google from "../../assets/images/Google Play.png";
import apple from "../../assets/images/Play Store.png";

export default function Footer() {
  return (
    <div className="max-w-[1200px] px-10 grid grid-cols-1 md:grid-cols-3 gap-10 py-10 mx-auto max-sm:hidden sm:hidden lg:grid ">
      {/* Main container with max-width, padding, grid layout for responsiveness, and margin auto for centering */}
      
      <div>
        {/* Left section with company slogan */}
        <h5 className="text-4xl font-medium">Jadoo..</h5>
        <p className="text-xl pt-4">
          Your trip in a minute, get full<br/>
          control for much longer.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {/* Center section with company, contact, and more links */}
        <ul className="text-[#5E6282]">
          <p className="text-[#080809] font-bold">Company</p>
          <li>About</li>
          <li>Careers</li>
          <li>Mobile</li>
        </ul>
        <ul className="text-[#5E6282]">
          <p className="text-[#080809] font-bold">Contact</p>
          <li>Help/FAQ</li>
          <li>Press</li>
          <li>Affiliates</li>
        </ul>
        <ul className="text-[#5E6282]">
          <p className="text-[#080809] font-bold">More</p>
          <li>Airline fees</li>
          <li>Airline</li>
          <li>Low fare tips</li>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        {/* Right section with social media icons and app links */}
        <div className="flex items-center gap-3">
          <img src={face} alt="facebook-icon" className="object-cover" />
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <img src={insta} alt="instagram-icon" className="object-cover" />
          </div>
          <img src={twit} alt="twitter-icon" className="object-cover" />
        </div>
        <p className="text-[#5E6282] font-medium mt-4">Discover our app</p>
        <div className="flex items-center gap-2 mt-2">
          <img src={google} alt="google-play" className="w-32 h-auto" />
          <img src={apple} alt="apple-store" className="w-32 h-auto" />
        </div>
      </div>
    </div>
  );
}

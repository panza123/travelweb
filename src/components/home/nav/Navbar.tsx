
import link from "./index";
import logo from "../../../assets/images/Logo.png";

export default function Navbar() {
  return (
    <header className="w-full h-10 flex justify-between items-center">
        <img src={logo} alt="logo" className=" object-cover" />
     

     <div className=" flex justify-between items-center">
     <nav className="flex justify-between items-center   w-1/2 ml-10">
          <ul className="flex gap-10 space-x-8 ">
            {link.map((item) => (
              <li key={item.id} className="cursor-pointer text-xl ">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex gap-10  h-full  ">
        <button className="bg-transparent w-[150px] h-10">login</button>
            <button className="bg-transparent w-[150px] h-10 border-[1px] border-black">Sign up</button>
            <select name="" id="" className="bg-transparent  h-10 border-[1px] border-black" >
                <option value="">En</option>
                <option value="">Fr</option>
                <option value="">Sp</option>
            </select>
        </div>

     </div>
    </header>
  );
}
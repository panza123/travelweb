import { useForm } from "react-hook-form";
import logo from "../../../assets/images/Group 77.png";
import logo2 from "../../../assets/images/Group 46.png";

// This is a functional component named Form.
export default function Form() {
  // Destructuring useForm hook to handle form state and validation.
  const {
    register, // Register function to link inputs with react-hook-form.
    handleSubmit, // Function to handle form submission.
    formState: { errors }, // Object containing validation errors.
  } = useForm();

  return (
    // Container div with max width, centered content, and padding.
    <div className="max-w-[1200px] flex flex-col py-3 items-center">
      <div className="w-full max-w-[1000px] h-[300px] rounded-tl-[100px] text-[#5E6282] px-8 bg-[#dbd7ed] shadow-lg rounded-md relative">
        
        {/* Background image positioned at the top right corner */}
        <img src={logo} alt="image" className="absolute top-[-10px] right-[-50px]" />
        
        {/* Heading text */}
        <h3 className="text-4xl text-center pt-10 leading-snug">
          Subscribe to get information, latest news, and other interesting offers about Jadoo
        </h3>

        {/* Form submission handler logs form data to the console */}
        <form onSubmit={handleSubmit((data) => console.log(data))} 
          className="w-full max-w-[500px] mx-auto mt-10 flex items-center gap-4">
          
          {/* Input field container with relative positioning */}
          <div className="relative w-[300px] h-[40px]">
            {/* Icon image inside the input field */}
            <img src={logo2} alt="" className="absolute top-3 left-2" />
            <input
              type="email"
              placeholder="Your email"
              {...register('email', { required: true })} // Registering email input with validation.
              className={`w-full px-5 py-2 border-2 rounded-md outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
              }`} // Conditional styling based on validation errors.
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Please enter your email.</p>} 
            
          </div>

          {/* Submit button with styling and hover effects */}
          <button type="submit" className="w-[150px] h-[40px] py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

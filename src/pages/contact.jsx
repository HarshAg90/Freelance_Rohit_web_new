import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle email submission here (e.g., send to backend)
    console.log('Email submitted:', email);
    setEmail(''); // Clear the input field
  };
    return (
      <div className="bg-gray-100">
        <div className="flex justify-center items-center p-2 w-full text-md bg-gradient-to-r from-pink-300 to-yellow-300 font-semibold">
        Black Friday sale now on! Save 25% sitewide!
      </div>
      <div className="p-4 px-5 flex justify-start items-center border-b border-gray-800 mb-10">
        <h1 className="font-bold text-pink-500 text-4xl">Singh Tech</h1>
      </div>
      <div className="container mx-auto text-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">We're Here to Help</h2>

        <div className="flex justify-center items-center gap-8">
            <img src="/prj_img/im15.jpeg" alt="Image 1" className="rounded-xl shadow-lg h-[50vh] w-auto w"  /> 
            <img src="/prj_img/im12.jpg" alt="Image 2" className="rounded-xl shadow-lg h-[50vh] w-auto " /> 
        </div>
        <p className="text-3xl font-semibold mt-20">Have a question or need assistance?</p>
        <p className="text-3xl font-semibold mb-20">We're here to help. Call us at 888.667.0067</p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="bg-white flex flex-col items-center gap-3 rounded-lg p-6">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 16h10M2 9.354C2 7.69 2.78 6.168 4.01 4.932a1 1 0 011.414 0L9 10.01 13.986 4.013a1 1 0 011.414 0L15 10.01l4.986-6a1 1 0 011.414 0L22 9.354v12a2 2 0 01-2 2h-16a2 2 0 01-2-2V9.354z" />
              </svg>
            <h3 className="text-xl font-semibold mb-2">Custom Quotes</h3>
            <p>Need a custom quote? We're here to help. Just fill out our form.</p>
            <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mt-4">Request Now</button>
          </div>

          <div className="bg-white flex flex-col items-center gap-3 rounded-lg p-6">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            <h3 className="text-xl font-semibold mb-2">Request Samples</h3>
            <p>Order samples so you can touch and feel the quality we offer.</p>
            <button className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mt-4">Request Now</button>
          </div>
        </div>
      </div>
      <div className="bg-orange-100 py-16 w-full flex justify-center my-20">
          <img src="/prj_img/logo2.png" alt="Newsletter Illustration" className="w-48 mr-8" /> 
          <div className="w-fit">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p>Signup for our great deals, inspiration and much more.</p>
            <form onSubmit={handleSubmit} className="bg-white mt-5 border flex items-center border-gray-300 rounded-md p-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500">
              
                <input type="email" 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)} 
                       placeholder="my@email.com" 
                       className="" />
                <button type="submit" className="bg-white hover:bg-gray-100 text-black ml-5 font-bold">
                  →
                </button>
              
            </form>
        </div>
    </div>
    <div className="text-center">
  <h2 className="text-xl font-bold mb-4">Our Locations</h2>
</div>

<div className="flex justify-between items-center my-20">
    <img src="/prj_img/toronto_sky.png" alt="Toronto Skyline" className="w-[60vw]" />

  <div className="w-full px-10">
    <p className="text-base">219 Dufferin St (Suite 4B)</p>
    <p className="text-base">Toronto, ON M6K3J1</p>
    <p className="text-base">(647) 795-0033</p>
    <a href="#" className="text-base">View Map</a>

    <h3 className="text-lg font-semibold mt-4">Location Hours:</h3>
    <p className="text-base">Weekdays: 9:00 AM - 5:00 PM EST</p>
    <p className="text-base">Chat: Weekdays: 9:00 AM - 8:30 PM EST</p>
    <p className="text-base">Phone: Weekdays: 9:00 AM - 8:30 PM EST</p>
  </div>
  </div>
<div className="flex justify-between items-center my-20">
  <div className="w-full px-10">
    <p className="text-base">3511 Jacombs Rd.
    </p>
    <p className="text-base">Richmond, BC V6V1Z8</p>
    <p className="text-base">(647) 795-0033</p>
    <a href="#" className="text-base">View Map</a>

    <h3 className="text-lg font-semibold mt-4">Location Hours:</h3>
    <p className="text-base">Weekdays: 9:00 AM - 5:00 PM EST</p>
    <p className="text-base">Chat: Weekdays: 9:00 AM - 8:30 PM EST</p>
    <p className="text-base">Phone: Weekdays: 9:00 AM - 8:30 PM EST</p>
  </div>
    <img src="/prj_img/vancouver-banner.png" alt="Toronto Skyline" className="w-[60vw]" />

  </div>
  <div className="flex flex-col w-full justify-center items-center bg-gray-800">
        <div className="flex justify-evenly w-full py-20 my-10">
          {" "}
          <span className="text-3xl font-semibold text-pink-600">SinghTech</span>
          <div className="flex flex-col ">
            <span className="text-gray-50 font-bold pb-3">Popular Project</span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-gray-50 font-bold pb-3">Popular Project</span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-gray-50 font-bold pb-3">Popular Project</span>
            <span
              className="text-gray-50 hover:underline cursor-pointer"
              onClick={() => navigation("/contact-us")}
            >
              Contact Us
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-gray-50 font-bold pb-3">Popular Project</span>
            <span
              className="text-gray-50 hover:underline cursor-pointer"
              onClick={() => navigation("/about")}
            >
              About Us
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-gray-50 font-bold pb-3">Popular Project</span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
            <span className="text-gray-50 hover:underline cursor-pointer">
              Resource stickers
            </span>
          </div>
        </div>
        <div className="flex gap-5 p-5 w-full">
          <span className="text-gray-200 hover:underline cursor-pointer">
            &copy; 2023 SinghTech
          </span>
          <span className="text-gray-200 hover:underline cursor-pointer">
            Privacy Policy - Terms and Conditions
          </span>
        </div>
      </div>
    </div>
    )
  }
  
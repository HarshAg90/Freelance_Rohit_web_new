export default function About() {
  return (
    <div className='w-screen min-h-screen'>
        <div className="flex justify-center items-center p-2 w-full text-md bg-gradient-to-r from-pink-300 to-yellow-300 font-semibold">
        Black Friday sale now on! Save 25% sitewide!
      </div>
      <div className="p-4 px-5 flex justify-start items-center border-b border-gray-800 mb-10">
        <h1 className="font-bold text-pink-500 text-4xl">Singh Tech</h1>
      </div>
        <div className="w-full flex justify-evenly items-center px-20 h-screen gap-20">
            <div className="flex flex-1">
                <img src="./prj_img/im7.jpg" className="w-[25vw] object-cover h-auto rounded-xl translate-x-[25%] -translate-y-[25%] shadow-md" alt="" />
                <img src="./prj_img/im4.jpg" className="w-[25vw] object-cover h-auto rounded-xl -translate-x-[25%] translate-y-[25%] shadow-md" alt="" />
            </div>
            <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-10">Company Overview</h2>
                <p>
                Singh Tech proudly brings over a decade of expertise to the offset printing industry. Located in the heart of Delhi, we specialize in delivering superior quality printing solutions that cater to businesses across a variety of industries. From vibrant marketing materials to intricate packaging designs, our services are designed to make your brand stand out
                </p>
            </div>
        </div>
        <div className="flex flex-col gap-5 items-center py-40 bg-gray-100">
            <h2 className="text-3xl font-semibold mb-10">Our Core Values</h2>
            <div className="flex justify-evenly items-center w-full">
                <p className="w-[30%]">Quality First: Our commitment to precision and attention to detail ensures every project exceeds expectations. We use stringent quality control processes to guarantee sharp, vibrant, and flawless prints that reflect the professionalism of your brand.
<br />
<br />
Customer Focus: Building strong, enduring relationships with our clients is at the heart of what we do. From the initial consultation to project delivery, we prioritize understanding your unique needs and providing solutions that exceed your expectations.</p>
                <p className="w-[30%]">Innovation: Equipped with cutting-edge technology, our advanced machinery and processes enable us to offer industry-leading results. We continuously embrace new techniques to stay ahead in the printing world and provide unparalleled services.
<br />
<br />
Sustainability: We are deeply committed to eco-friendly practices. By using sustainable materials and energy-efficient processes, we aim to minimize our environmental impact while delivering exceptional printing solutions.</p>
            </div>
            <button className="mt-10 px-10 py-3 bg-black hover:bg-gray-600 text-white">Shop Now</button>

        </div>
        <div className="w-full flex justify-evenly items-center px-20 h-screen gap-20">
            <div className="flex-1">
                <h2 className="text-3xl font-semibold mb-10">Experience and Expertise</h2>
                <p>
                With a dedicated team and cutting-edge technology, Singh Tech is the trusted choice for printing projects of all sizes. Our vast experience enables us to tackle even the most challenging assignments with ease and efficiency.
                    <br />
                    <br />
                    We work hard to align ourselves with high-performing colleagues that add to our inclusive, empowering company culture. We aim to provide our people a place to learn, grow, and ultimately thrive.
                </p>
            </div>
            <div className="flex flex-1">
                <img src="./prj_img/im9.jpg" className="w-[25vw] object-cover h-auto rounded-xl translate-x-[25%] translate-y-[25%] shadow-md" alt="" />
                <img src="./prj_img/im3.jpg" className="w-[25vw] object-cover h-auto rounded-xl -translate-x-[25%] -translate-y-[25%] shadow-md" alt="" />
            </div>
        </div>
        <div className="flex justify-center items-center m-10 rounded-xl p-20  text-md bg-gradient-to-r from-red-300 to-blue-300 font-semibold">
        <p className="text-xl font-semibold w-[80%]">At SinghTech, we understand the importance of protecting the environment. That’s why we incorporate eco-friendly practices in our operations, ensuring that our printing solutions are as sustainable as they are effective.</p>
      </div>
      <div className="flex p-20 items-center justify-center gap-10">
        <div className="flex flex-col gap-10 -translate-y-[5%]">
            <img src="./prj_img/im10.jpg" className="rounded-md w-[40vw] h-auto object-cover" alt="" />
            <img src="./prj_img/im14.jpg" className="rounded-md w-[40vw] h-auto object-cover" alt="" />
        </div>
        <div className="flex flex-col gap-10 translate-y-[5%]">
            <img src="./prj_img/im13.jpg" className="rounded-md w-[40vw] h-auto object-cover" alt="" />
            <img src="./prj_img/im11.jpg" className="rounded-md w-[40vw] h-auto object-cover" alt="" />
        </div>
      </div>
      <h1 className="text-4xl font-semibold text-center w-full my-10">
        Great Product, Happy Customers
      </h1>
      <div className="flex justify-evenly my-20 items-center">
        <div className="flex flex-col w-[30%] justify-evenly ">
          <div className="w-24 h-6 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
          <h1 className="text-lg font-semibold">
            Processing time was really fast
          </h1>
          <p>
            Processing time was really fast and the quality of the product was
            great. really enjoyed the...
          </p>
          <p>Ani, 3 days ago</p>
        </div>
        <div className="flex flex-col w-[30%] justify-evenly ">
          <div className="w-24 h-6 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
          <h1 className="text-lg font-semibold">
            Processing time was really fast
          </h1>
          <p>
            Processing time was really fast and the quality of the product was
            great. really enjoyed the...
          </p>
          <p>Ani, 3 days ago</p>
        </div>
        <div className="flex flex-col w-[30%] justify-evenly ">
          <div className="w-24 h-6 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              className="w-6 h-6 fill-yellow-500"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
          <h1 className="text-lg font-semibold">
            Processing time was really fast
          </h1>
          <p>
            Processing time was really fast and the quality of the product was
            great. really enjoyed the...
          </p>
          <p>Ani, 3 days ago</p>
        </div>
      </div>
      <div className="bg-white">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center space-y-6 py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 max-sm:grid-cols-1 gap-6 p-20">
            {/* Icon and Text */}
            <div className="flex items-center  gap-2">
              <img
                className="w-auto object-cover h-14"
                src="./prj_img/logo1.png"
                alt=""
              />
              <div className="flex flex-col gap-2">
                <h3 className="mt-4 text-lg font-semibold">FREE-SHIPPING</h3>
                <p className="text-gray-500 ">
                  For all orders over $49
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-2">
              <div>
                <img
                  className="w-auto object-cover h-14"
                  src="./prj_img/logo2.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mt-4 text-lg font-semibold">PREMIUM-STOCKS</h3>
                <p className="text-gray-500 ">
                  Over 100+ Paper stocks available
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-2">
              <div>
                <img
                  className="w-auto object-cover h-14"
                  src="./prj_img/logo3.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mt-4 text-lg font-semibold">QUICK-TURNAROUND</h3>
                <p className="text-gray-500 ">
                  Same Day Printing on our most popular items
                </p>
              </div>
            </div>
            <div className="flex items-center  gap-2">
              <div>
                <img
                  className="w-auto object-cover h-14"
                  src="./prj_img/logo4.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="mt-4 text-lg font-semibold">SAMPLE-PACKS</h3>
                <p className="text-gray-500 ">
                  Order our fine collection of sample packs
                </p>
              </div>
            </div>
          </div>

        </div>
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

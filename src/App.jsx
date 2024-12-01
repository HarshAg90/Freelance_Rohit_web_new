import './App.css'

function App() {
  return (
    <div className='w-screen min-h-screen'>
      <div className="flex justify-center items-center p-2 w-full text-md bg-gradient-to-r from-pink-300 to-yellow-300 font-semibold">Black Friday sale now on! Save 25% sitewide!</div>
      <div className="p-4 px-5 flex justify-start items-center"> <h1 className='font-bold text-pink-500 text-4xl'>Brand Name</h1></div>
      <div className="w-full "><img src="banner.png" alt="" className='w-full h-[80vh] object-cover' />
      <div className=" absolute left-[10%] top-[50%] -translate-y-[50%]">
      <h1 className="text-6xl font-bold">Singh</h1>
      <h2 className="text-3xl font-bold">teach printing</h2>
      </div>
      </div>
      <div className="bg-white">
      {/* Top Section */}
      <div className="flex flex-col items-center justify-center space-y-6 py-10">
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
          {/* Icon and Text */}
          <div className="flex items-center  gap-2">
            <img className="w-auto object-cover h-14" src="./prj_img/logo1.png" alt="" />
            <div className="flex flex-col gap-2">
            <h3 className="mt-4 text-lg font-semibold">FREE-SHIPPING</h3>
            <p className="text-gray-500 text-center">For all orders over $49</p>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <div ><img className="w-auto object-cover h-14" src="./prj_img/logo2.png" alt="" /></div>
            <div className="flex flex-col gap-2">

            <h3 className="mt-4 text-lg font-semibold">PREMIUM-STOCKS</h3>
            <p className="text-gray-500 text-center">Over 100+ Paper stocks available</p>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <div ><img className="w-auto object-cover h-14" src="./prj_img/logo3.png" alt="" /></div>
            <div className="flex flex-col gap-2">

            <h3 className="mt-4 text-lg font-semibold">QUICK-TURNAROUND</h3>
            <p className="text-gray-500 text-center">Same Day Printing on our most popular items</p>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <div ><img className="w-auto object-cover h-14" src="./prj_img/logo4.png" alt="" /></div>
            <div className="flex flex-col gap-2">

            <h3 className="mt-4 text-lg font-semibold">SAMPLE-PACKS</h3>
            <p className="text-gray-500 text-center">Order our fine collection of sample packs</p>
            </div>
          </div>
        </div>
        {/* Reviews Section */}
        <div className="text-center flex items-center gap-2">
          <p className="font-bold text-lg">Excellent</p>
          {/* Star Placeholder */}
          <div className="w-24 h-6 flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          </div>
          <p className="text-gray-500">5,320 reviews on Trustpilot</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold">Shop our most popular products</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 px-12 pb-10 mx-auto">
        {/* Business Cards */}
        <div className="relative">
          <img src='./prj_img/im11.jpg' className="w-full h-72 bg-gray-300" />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg font-medium">
            Business Cards
          </button>
        </div>

        {/* Postcards */}
        <div className="relative">
          <img src='./prj_img/im12.jpg' className="w-full h-72 bg-gray-300" />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg font-medium">
            Postcards
          </button>
        </div>

        {/* Custom Stickers */}
        <div className="relative">
          <img src='./prj_img/im13.jpg' className="w-full h-72 bg-gray-300" />
          <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg font-medium">
            Custom Stickers
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-around items-center p-10 ">
      <div className="w-[40vw] flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Make 2025 Memorable with Custom Calenders</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed inventore mollitia, quas accusamus rerum laudantium voluptates iste obcaecati provident recusandae.</p>
        <button className='px-6 py-2 rounded-full border-2 border-black text-xl hover:bg-black hover:text-white w-fit'>Shop Now</button>
      </div>
      <img src="./prj_img/im4.jpg" className='w-[50vw] h-auto shadow-md' alt="" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-10 mx-auto">
      {/* {products.map((product) => ( */}
        <div
          // key={product.id}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          {/* Product Image */}
          <div className="w-full h-72 overflow-hidden">
            <img
              // src={product.image}
              // alt={product.title}
              src="./prj_img/im9.jpg"
              // alt={product.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4">
            {/* <h3 className="text-white font-bold text-xl">{product.title}</h3> */}
            <h3 className="text-white font-bold text-xl">product title</h3>
            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full shadow-lg font-medium hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
        <div
          // key={product.id}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          {/* Product Image */}
          <div className="w-full h-72 overflow-hidden">
            <img
              // src={product.image}
              // alt={product.title}
              src="./prj_img/im8.jpg"
              // alt={product.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4">
            {/* <h3 className="text-white font-bold text-xl">{product.title}</h3> */}
            <h3 className="text-white font-bold text-xl">product title</h3>
            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full shadow-lg font-medium hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
        <div
          // key={product.id}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          {/* Product Image */}
          <div className="w-full h-72 overflow-hidden">
            <img
              // src={product.image}
              // alt={product.title}
              src="./prj_img/im5.jpg"
              // alt={product.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4">
            {/* <h3 className="text-white font-bold text-xl">{product.title}</h3> */}
            <h3 className="text-white font-bold text-xl">product title</h3>
            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full shadow-lg font-medium hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
        <div
          // key={product.id}
          className="relative group overflow-hidden rounded-lg shadow-md"
        >
          {/* Product Image */}
          <div className="w-full h-72 overflow-hidden">
            <img
              src="./prj_img/im3.jpg"
              // alt={product.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4">
            {/* <h3 className="text-white font-bold text-xl">{product.title}</h3> */}
            <h3 className="text-white font-bold text-xl">product title</h3>
            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full shadow-lg font-medium hover:bg-gray-100">
              Shop Now
            </button>
          </div>
        </div>
      {/* ))} */}
    </div>

    <div className="p-10">
      <div className="w-full flex flex-col justify-center items-center my-20 gap-3">
        <h1 className="text-3xl">Get Creative Premium Products</h1>
        <p>Discover our fine product range and special finishes for your next project</p>
      </div>
      <div className="flex gap-4 w-full mx-10"> 
        <img src="./prj_img/im1.jpg" className='w-[30vw] h-[200px] shadow-md rounded-xl my-5 object-cover' alt="" />
        <img src="./prj_img/im5.jpg" className='flex-1 h-[200px] shadow-md rounded-xl my-5 object-cover' alt="" />
      </div>
      <div className="flex gap-4 w-full mx-10"> 
        <img src="./prj_img/im7.jpg" className='flex-1 h-[200px] shadow-md rounded-xl my-5 object-cover' alt="" />
        <img src="./prj_img/im4.jpg" className='w-[30vw] h-[200px] shadow-md rounded-xl my-5 object-cover' alt="" />
      </div>
    </div>
    <div className="w-full relative">
      <img src="./prj_img/bg-full-1.jpg" className='w-full h-[700px]' alt="" />
      <div className="rounded-xl absolute left-[10%] flex flex-col gap-4 top-[50%] -translate-y-[50%] w-[40%] bg-white p-20">
        <h1 className="text-4xl font-semibold">Feel the Quality — Order Your Sample Pack</h1>
        <p className='text-gray-600 text-lg'>Experience the Jukebox difference. Our samples showcase the exceptional quality that will elevate your project.</p>
        <button className='px-5 py-2 rounded-full border-2 border-black text-xl w-auto hover:text-white hover:bg-black'> Discover more</button>
      </div>

    </div>
    <div className="w-full relative">
      <img src="./prj_img/bg-full-2.jpg" className='w-full h-[700px]' alt="" />
      <div className="rounded-xl absolute right-[10%] flex flex-col gap-4 top-[50%] -translate-y-[50%] w-[40%] bg-white p-20">
        <h1 className="text-4xl font-semibold">Feel the Quality — Order Your Sample Pack</h1>
        <p className='text-gray-600 text-lg'>Experience the Jukebox difference. Our samples showcase the exceptional quality that will elevate your project.</p>
        <button className='px-5 py-2 rounded-full border-2 border-black text-xl w-auto hover:text-white hover:bg-black'> Discover more</button>
      </div>

    </div>
    <div className="w-full relative">
      <img src="./prj_img/bg-full-3.jpg" className='w-full h-[700px]' alt="" />
      <div className="rounded-xl absolute left-[10%] flex flex-col gap-4 top-[50%] -translate-y-[50%] w-[40%] bg-white p-20">
        <h1 className="text-4xl font-semibold">Feel the Quality — Order Your Sample Pack</h1>
        <p className='text-gray-600 text-lg'>Experience the Jukebox difference. Our samples showcase the exceptional quality that will elevate your project.</p>
        <button className='px-5 py-2 rounded-full border-2 border-black text-xl w-auto hover:text-white hover:bg-black'> Discover more</button>
      </div>

    </div>
    <section className="py-10 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold">Inside the Box</h2>
        <a
          href="#"
          className="text-gray-500 hover:text-gray-800 text-sm font-medium"
        >
          All articles →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Featured Article */}
        <div className="col-span-2">
          <div className="relative group">
            <img
              src="./prj_img/im13.jpg" // Replace with actual image URL
              alt="Graphic Design Trends for 2025"
              className="w-full h-80 object-cover rounded-lg"
            />
            <div className="mt-4">
              <p className="text-pink-600 font-medium text-sm flex items-center">
                <span role="img" aria-label="trending">
                  🔥
                </span>{" "}
                Trending
              </p>
              <h3 className="text-2xl font-semibold mt-2">
                Graphic Design Trends for 2025
              </h3>
              <p className="text-gray-700 mt-2">
                Discover 25 top graphic design trends for 2025. Refresh your
                brand or start fresh with these insights that will empower bold,
                strategic choices.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Nov 1, 2024 • 8 min read
              </p>
            </div>
          </div>
        </div>

        {/* Side Articles */}
        <div className="space-y-6">
          {/* Article 1 */}
          <div className="flex space-x-4">
            <img
              src="./prj_img/im14.jpg" // Replace with actual image URL
              alt="Meet the Ultimate in Business Card Luxury"
              className="w-28 h-28 object-cover rounded-lg"
            />
            <div>
              <p className="text-sm text-gray-500">Tutorials</p>
              <h4 className="text-lg font-medium">
                Meet the Ultimate in Business Card Luxury: Colorplan with
                Rooftop Embossing
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                May 23, 2024 • 4 min read
              </p>
            </div>
          </div>

          {/* Article 2 */}
          <div className="flex space-x-4">
            <img
              src="./prj_img/im11.jpg" // Replace with actual image URL
              alt="50 Top Graphic Design Studios to Follow"
              className="w-28 h-28 object-cover rounded-lg"
            />
            <div>
              <p className="text-sm text-gray-500">Inspiration</p>
              <h4 className="text-lg font-medium">
                50 Top Graphic Design Studios to Follow in 2024
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                Dec 15, 2023 • 4 min read
              </p>
            </div>
          </div>

          {/* Article 3 */}
          <div className="flex space-x-4">
            <img
              src="./prj_img/im10.jpg" // Replace with actual image URL
              alt="50 Top Illustrators to Follow"
              className="w-28 h-28 object-cover rounded-lg"
            />
            <div>
              <p className="text-sm text-gray-500">Inspiration</p>
              <h4 className="text-lg font-medium">
                50 Top Illustrators to Follow in 2024
              </h4>
              <p className="text-sm text-gray-500 mt-2">
                Nov 10, 2024 • 4 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <h1 className='text-4xl font-semibold text-center w-full my-10'>Great Product, Happy Customers</h1>
    <div className="flex justify-evenly my-20 items-center">
    <div className="flex flex-col w-[30%] justify-evenly ">
    <div className="w-24 h-6 flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          </div>
      <h1 className="text-lg font-semibold">Processing time was really fast</h1>
      <p>Processing time was really fast and the quality of the product was great. really enjoyed the...</p>
      <p>Ani, 3 days ago</p>
    </div>
    <div className="flex flex-col w-[30%] justify-evenly ">
    <div className="w-24 h-6 flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          </div>
      <h1 className="text-lg font-semibold">Processing time was really fast</h1>
      <p>Processing time was really fast and the quality of the product was great. really enjoyed the...</p>
      <p>Ani, 3 days ago</p>
    </div>
    <div className="flex flex-col w-[30%] justify-evenly ">
    <div className="w-24 h-6 flex">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='w-6 h-6 fill-yellow-500'><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
          </div>
      <h1 className="text-lg font-semibold">Processing time was really fast</h1>
      <p>Processing time was really fast and the quality of the product was great. really enjoyed the...</p>
      <p>Ani, 3 days ago</p>
    </div>
    </div>
    <h1 className='text-4xl font-semibold text-center w-full my-10'>Trusted By These Great Brands</h1>
    <div className="flex flex-wrap justify-center my-20 gap-4">
      <img src="./prj_img/business-1.png" className="h-10 w-auto " alt="" />
      <img src="./prj_img/business-2.png" className="h-10 w-auto " alt="" />
      <img src="./prj_img/business-3.png" className="h-10 w-auto " alt="" />
      <img src="./prj_img/business-4.png" className="h-10 w-auto " alt="" />
      <img src="./prj_img/business-5.png" className="h-10 w-auto " alt="" />
      <img src="./prj_img/business-6.png" className="h-10 w-auto " alt="" />
    </div>
    <div className="flex flex-col w-full justify-center items-center bg-gray-800">
      <div className="flex justify-evenly w-full py-20 my-10"> <span className='text-3xl font-semibold text-pink-600'>JukeBox</span>
      <div className="flex flex-col ">
        <span className='text-gray-50 font-bold pb-3'>Popular Project</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
      </div>
      <div className="flex flex-col ">
        <span className='text-gray-50 font-bold pb-3'>Popular Project</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
      </div>
      <div className="flex flex-col ">
        <span className='text-gray-50 font-bold pb-3'>Popular Project</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Contact Us</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
      </div>
      <div className="flex flex-col ">
        <span className='text-gray-50 font-bold pb-3'>Popular Project</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>About Us</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
      </div>
      <div className="flex flex-col ">
        <span className='text-gray-50 font-bold pb-3'>Popular Project</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
        <span className='text-gray-50 hover:underline cursor-pointer'>Resource stickers</span>
      </div>
      </div>
      <div className="flex gap-5 p-5 w-full">
        <span className='text-gray-200 hover:underline cursor-pointer'>&copy; 2023 JukeBox</span>
        <span className='text-gray-200 hover:underline cursor-pointer'>Privacy Policy - Terms and Conditions</span>
      </div>
    </div>
    </div>
  )
}

export default App

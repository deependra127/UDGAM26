export default function InfoSection() {
  return (
    <div
      id="udgam-info"
      className="w-full h-[100vh] max-md:h-[auto] flex flex-col md:flex-row justify-center items-center py-[5vh] max-md:py-[15vh]"
    >
      <div
        id="udgam-infovid-container"
        className="flex flex-col justify-center items-center w-[70%] max-md:w-[90%] h-[100%]"
      >
        <div
          id="what-udgam-container"
          className="rounded-[1.5rem] max-md:rounded-[2vw] border-[3px] border-[#141131] bg-[#FFF9F0] flex flex-col items-center justify-center px-[1vw] py-[2vw] max-md:py-[5vw]"
        >
          <div
            id="what-udgam"
            className="text-[#141131] text-center font-['Creato_Display'] text-[3.6vw] max-md:text-[6vw] font-black leading-normal"
          >
            What is UDGAM?
          </div>
          <div
            id="udgam-info-text"
            className="w-full text-[#000] text-center font-inter text-[1.12vw] max-md:text-[2.5vw] font-normal leading-normal items-center justify-center px-[5%]"
          >
            UDGAM is the flagship 2-day annual Entrepreneurship Summit of
            E-Cell, IIT Guwahati, held every January, bringing together
            founders, investors, product leaders, and aspiring entrepreneurs
            from across the country. Through workshops, keynote sessions,
            competitions, and networking opportunities, it fosters
            entrepreneurial thinking and serves as a catalyst for innovation and
            startup culture in North-East India and beyond.
          </div>
        </div>
        <div
          id="video-card"
          className="w-full h-[60%] rounded-[1.5rem] max-md:rounded-[2vw] border-[3px] border-[#141131] bg-black mt-4 max-md:mt-2 overflow-hidden"
        >
          {/* Video Placeholder */}
          {/* <div id = "video-card-coming-soon" className="text-[#141131] text-center font-inter text-[1.12vw] max-md:text-[2.5vw] font-normal leading-normal">
                        The summit features high-impact events like Disrupt, the region’s largest pitching battle, and PMx, India's leading student-led Product Management competition. Through the Startup Expo and Internfair, it connects thousands of students with high-growth ventures and funding opportunities. These initiatives provide the practical tools and networks necessary to transform raw ideas into scalable startups.
                    </div> */}
          <iframe
            src="https://drive.google.com/file/d/13hsrBshi0kO52zeRxL-MX4GPG8YQ5o-2/preview"
            className="w-full h-full border-none"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
      {/* <div id="gallary-container" className='w-[25%] max-md:w-[30%] h-[100%] rounded-[1.5rem] max-md:rounded-[2vw] border-[3px] border-[#141131] bg-[#FFF9F0] ml-4 max-md:ml-0 flex items-center justify-center'>
                
                <div id = "gallery-coming-soon" className="text-[#141131] text-center font-['Creato_Display'] text-[1.12vw] max-md:text-[2.5vw] font-normal px-[5%]">
                    With a history of hosting icons like Jimmy Wales and Kevin Harrington, UDGAM has evolved into a movement for regional and national transformation. By collaborating with partners like Assam Startup and IITG-TIC, the summit positions the North-East as a vital hub for deep-tech and social entrepreneurship. It remains dedicated to empowering leaders who will drive India’s economic and innovative future.
                </div>
            </div> */}
      <div
        id="gallary-container"
        className="w-[25%] max-md:w-[90%] h-full max-md:h-auto rounded-[1.5rem] max-md:rounded-[2vw] border-[3px] border-[#141131] bg-[#FFF9F0] ml-4 max-md:ml-0 flex flex-col max-md:flex-row items-center justify-between p-[1vw]"
      >
        <div className="w-full max-md:w-[32%] h-[32%] overflow-hidden rounded-[1rem] border border-[#141131]">
          <img
            src="/gallery (1).jpg"
            alt="Gallery 1"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full max-md:w-[32%] h-[32%] overflow-hidden rounded-[1rem] border border-[#141131]">
          <img
            src="/gallery (2).JPG"
            alt="Gallery 2"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full max-md:w-[32%] h-[32%] overflow-hidden rounded-[1rem] border border-[#141131]">
          <img
            src="/gallery (6).JPG"
            alt="Gallery 3"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

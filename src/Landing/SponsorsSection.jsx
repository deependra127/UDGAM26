import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SponsorsSection() {
    const sponsorsRef1 = useRef(null);

    useEffect(() => {
        if (!sponsorsRef1.current) return;

        // Check if device is mobile (less than 768px)
        const isMobile = window.innerWidth < 768;

        // 1. Adjust Trigger Position: Start earlier on mobile ("top 85%") vs desktop ("top center")
        const startPos = isMobile ? "top 85%" : "top center";

        // 2. Adjust Start Coordinates: Reduce vertical movement on mobile (40px) vs desktop (120px)
        const yMove = isMobile ? 40 : 120;

        const cards = sponsorsRef1.current.querySelectorAll("[id^='sponsor-card-container']");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sponsorsRef1.current,
                start: startPos, // Dynamic start position
                end: "bottom top",
                scrub: 1.2,
            }
        });

        // Use dynamic yMove value
        tl.fromTo(cards[0], { y: yMove }, { y: 0, ease: "none" }, 0);  // card 1 up
        tl.fromTo(cards[1], { y: -yMove }, { y: 0, ease: "none" }, 0); // card 2 down
        tl.fromTo(cards[2], { y: 0 }, { y: 0, ease: "none" }, 0);      // fixed
        tl.fromTo(cards[3], { y: -yMove }, { y: 0, ease: "none" }, 0); // card 4 down
        tl.fromTo(cards[4], { y: yMove }, { y: 0, ease: "none" }, 0);  // card 5 up

        return () => tl.kill();
    }, []);

    return (
        <div id="sponsors" className="flex flex-col w-full h-[130vh] max-md:h-[20vh] max-md:my-[10vh] items-center justify-center relative">
            
            <div id="sponsor-title" className="relative text-[#FFF9F0] font-['Inter'] text-[10.85vw] font-black leading-normal relative">
                SPONSORS
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 102" fill="none" className="absolute top-[0vw] left-[-5vw] w-[6.664vw] h-[6.614vw] rotate-[85.984deg]">
                <path d="M100.337 47.1126C93.7377 47.5905 87.2957 49.3557 81.3748 52.3099C75.4206 55.2806 70.1101 59.3954 65.746 64.4186C61.3819 69.4417 58.0495 75.2751 55.9399 81.586C53.8419 87.8622 52.9952 94.4883 53.4443 101.09C53.4068 101.093 53.3689 101.096 53.3314 101.099C53.2947 101.101 53.2579 101.103 53.2212 101.106C52.7437 94.5056 50.9774 88.0627 48.0228 82.1409C45.0521 76.1867 40.9373 70.8762 35.9141 66.5121C30.891 62.1481 25.0575 58.8156 18.7467 56.706C12.7105 54.6882 6.35061 53.8274 0.000155148 54.1641C6.31706 53.5713 12.7596 51.5875 18.4116 48.7676C24.3657 45.7969 29.6772 41.682 34.0413 36.6588C38.4052 31.6358 41.7369 25.8021 43.8464 19.4915C45.9431 13.2192 46.7921 6.59755 46.3449 5.17405e-05L46.3458 -1.66555e-05C46.8246 6.59612 48.5896 13.0356 51.5425 18.954C54.5133 24.9081 58.6282 30.2188 63.6512 34.5828C68.6743 38.9468 74.5079 42.2784 80.8186 44.388C87.0943 46.4858 93.7196 47.3336 100.321 46.8847C100.323 46.9209 100.334 47.0764 100.337 47.1126Z" fill="#8D42FD"/>
            </svg>
            </div>
                
            <div id="sponsor-card-container" className="flex flex-row gap-x-[1.32vw]" ref={sponsorsRef1}>

                <div id="sponsor-card-container1" className="relative w-[19.2vw] flex flex-col justify-center items-center gap-y-[0.65vw] absolute bottom-[0.15vw]">
                    <div className="w-[19.2vw] h-[10.19vw] rounded-[0.82vw] bg-[#D9D9D9]"></div>
                    <div className="w-[19.2vw] h-[10.19vw] rounded-[0.82vw] bg-[#D9D9D9]"></div>
                </div>

                <div id="sponsor-card-container2" className="relative w-[19.2vw] flex flex-col justify-center items-center gap-y-[0.526vw] absolute top-[1vw]">
                    <div className="h-[19.92vw] w-[19.2vw] rounded-[0.82vw] bg-[#D9D9D9]"></div>
                    <div className="flex h-[4.471vw] w-[19.2vw] py-[0.986vw] px-[1.973vw] justify-center items-center rounded-[0.816vw] bg-[#FFF9F0] text-[#141131] text-[2.141vw] font-black">
                        Coming soon
                    </div>
                </div>

                <div id="sponsor-card-container3" className="relative w-[19.2vw] flex flex-col justify-center items-center gap-y-[0.526vw]">
                    <div className="flex h-[4.471vw] w-[19.2vw] py-[0.986vw] px-[1.973vw] justify-center items-center rounded-[0.816vw] bg-[#FFF9F0] text-[#141131] text-[2.141vw] font-black">
                        Coming soon
                    </div>
                    <div className="h-[19.92vw] w-[19.2vw] rounded-[0.82vw] bg-[#D9D9D9]"></div>
                </div>

                <div id="sponsor-card-container4" className="relative w-[19.2vw] flex flex-col justify-center items-center gap-y-[0.526vw] absolute top-[1vw]">
                    <div className="h-[19.92vw] w-[19.2vw] rounded-[0.82vw] bg-[#D9D9D9]"></div>
                    <div className="flex h-[4.471vw] w-[19.2vw] py-[0.986vw] px-[1.973vw] justify-center items-center rounded-[0.816vw] bg-[#FFF9F0] text-[#141131] text-[2.141vw] font-black">
                        Coming soon
                    </div>
                </div>

                <div id="sponsor-card-container5" className="relative w-[19.2vw] flex flex-col justify-center items-center gap-y-[0.65vw] absolute bottom-[0.15vw]">
                    <div className="w-[19.2vw] h-[10.19vw] rounded-[0.82vw] bg-[#D9D9D9]"></div>
                    <div className="w-[19.2vw] h-[10.19vw] rounded-[0.82vw] bg-[#D9D9D9]"></div>
                </div>

            </div>
            <div id="sponsor-page-btn-container" className="flex flex-row items-center justify-center gap-x-[0.5892vw] max-md:gap-x-[2vw] mt-[4.9342vw]">
                <div id="view-sponsor-txt" className="text-[#FDD442] font-['Inter'] text-[1.9726vw] max-md:text-[5vw] not-italic font-semibold leading-normal">
                    View All Sponsors
                </div>
                <a href="" id="sponsor-page-btn" className="w-[3.6812vw] h-[3.7563vw] max-md:w-[5vw] max-md:h-[5vw] rounded-[1.1269vw] bg-[#FDD442] flex flex-col items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 17" fill="none" className="w-[1.5025vw] h-[1vw] max-md:w-[3vw] max-md:h-[3vw]">
                        <path d="M23.6584 9.22146C24.1045 8.77528 24.1045 8.05187 23.6584 7.60569L16.3874 0.334714C15.9412 -0.111469 15.2178 -0.111469 14.7716 0.334714C14.3254 0.780897 14.3254 1.5043 14.7716 1.95049L21.2347 8.41357L14.7716 14.8767C14.3254 15.3228 14.3254 16.0463 14.7716 16.4924C15.2178 16.9386 15.9412 16.9386 16.3874 16.4924L23.6584 9.22146ZM0 8.41357V9.5561H22.8505V8.41357V7.27105H0V8.41357Z" fill="#141131"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}
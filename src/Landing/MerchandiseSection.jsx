export default function MerchandiseSection() {
    return (
        <div id="merchandise" className="w-full h-[100vh] max-md:h-[20vh] max-md:mt-[5vh] flex flex-col items-center justify-center">
            <div id="merchandise-title" className="text-[#FFF9F0] font-['Inter'] text-[10.85vw] not-italic font-black leading-normal h-[14vw]">
                MERCHANDISE
            </div>
            <div id="merchandise-card-container" className="flex flex-col justify-center items-center relative z-1">
                
                {/* Decorative background cards */}
                <div id="merchandise-filler-card1" className="invisible w-[19.2vw] h-[7.38vw] max-md:h-[15vw] rounded-[2.19vw] bg-[#FFF9F0] absolute z-0 top-[-0.05vw] max-md:top-[-0.3vw] right-[-11.28vw] rounded-[2.3vw] border border-black"></div>
                
                {/* --- WHITE T-SHIRT (Main Canvas) --- */}
                <div id="merchandise-main-canvas" className="flex flex-col justify-center items-end w-[45.96vw] h-[29.2vw] max-md:h-[35vw] rounded-[2.19vw] bg-[#FFF9F0] relative z-50">
                    <div className='w-full text-[#000] text-center font-inter text-[2.5vw] max-md:text-[4.5vw] font-black leading-normal items-center justify-center px-[5%]'>
                        Coming soon ...
                    </div>
                    <div id="merch-img-container2" className="invisible absolute left-[6vw] bottom-[-0.4vw] w-[29.46vw] h-[39.26vw] group">
                        <img src="/merch-white-front.png" alt="merch-white-front" className="absolute inset-0 w-full h-full object-cover aspect-[448/597] transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
                        <img src="/merch-white-back.png" alt="merch-white-back" className="absolute inset-0 w-full h-full object-cover aspect-[448/597] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    </div>
                </div>

                <div id="merchandise-filler-card2" className="invisible w-[40.9vw] h-[7.17vw] max-md:h-[15vw] rounded-[2.19vw] bg-[#FFF9F0] absolute z-0 bottom-0 left-[-15.66vw]"></div>

                {/* --- BLACK T-SHIRT (Blue Card) --- */}
                <div id="blue-merch-card" className="invisible w-[20.77vw] h-[26.24vw] rounded-[1.3vw] border-[2.169px] border-[#141131] bg-[#42D4FD] absolute z-[51] left-[-20.5vw] top-[-3.7vw]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 68" fill="none" className="absolute w-[4.44vw] h-[4.41vw] right-[-2.22vw] top-[1.42vw]">
                        <path d="M33.8203 0C33.83 4.40665 34.7022 8.76915 36.3887 12.8408C38.0847 16.9354 40.5712 20.6562 43.7051 23.79C46.8388 26.9237 50.559 29.4095 54.6533 31.1055C58.7252 32.7921 63.0882 33.6642 67.4951 33.6738C67.4952 33.6988 67.4971 33.7241 67.4971 33.749C67.4971 33.7734 67.4952 33.7979 67.4951 33.8223C63.0882 33.8319 58.7252 34.705 54.6533 36.3916C50.559 38.0876 46.8388 40.5734 43.7051 43.707C40.5712 46.8409 38.0847 50.5617 36.3887 54.6562C34.7522 58.607 33.8843 62.8315 33.8252 67.1045C33.7414 62.8454 32.7227 58.4296 31.0986 54.5088C29.4026 50.4142 26.917 46.6934 23.7832 43.5596C20.6494 40.4257 16.9285 37.9402 12.834 36.2441C8.76441 34.5585 4.40434 33.6864 0 33.6758V33.6729C4.40473 33.6625 8.76502 32.7912 12.835 31.1055C16.9295 29.4095 20.6504 26.9238 23.7842 23.79C26.918 20.6562 29.4036 16.9354 31.0996 12.8408C32.786 8.76939 33.6582 4.40736 33.668 0.000976562C33.6947 0.000914546 33.7213 3.61874e-08 33.748 0C33.7721 0 33.7962 -5.04085e-05 33.8203 0Z" fill="#8D42FD"/>
                    </svg>
                    <div id="merch-img-container1" className="absolute bottom-0 w-full flex justify-center group">
                        <img src="/merch-black-front.png" alt="merch-black-front" className="h-[27.55vw] aspect-[458/419] transition-opacity duration-500 ease-in-out group-hover:opacity-0" />
                        <img src="/merch-black-back.png" alt="merch-black-back" className="absolute top-0 h-[27.55vw] aspect-[458/419] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
                    </div>
                </div>

                {/* --- BAG (Purple Card) --- */}
                <div id="purple-merch-card-container" className="invisible absolute z-[0] bottom-0 right-[-19.015vw] flex flex-col items-center justify-center">
                    <div id="purple-merch-card" className="relative w-[19.04vw] h-[17.76vw] rounded-[2.19vw] border-[3px] border-[#141131] bg-[#2C2945]">
                        <div id="merch-img-container3" className="absolute left-[2.2vw] bottom-[1.8vw] w-[14.73vw] h-[18.74vw] group">
                            <img src="/merch-bag-front.png" alt="merch-bag-front" className="absolute inset-0 w-full h-full object-fit aspect-[224/285] transition-opacity duration-500 ease-in-out group-hover:opacity-0"/>
                            <img src="/merch-bag-back.png" alt="merch-bag-back" className="absolute inset-0 w-full h-full object-fit aspect-[224/285] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"/>
                        </div>
                    </div>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71 70" fill="none" className="absolute z-[0] w-[4.63vw] h-[4.6vw] left-[-2.26vw] bottom-[3.35vw]">
                        <path d="M35.2764 0.000976562C35.2866 4.59727 36.1969 9.14763 37.9561 13.3945C39.7251 17.6653 42.3182 21.5457 45.5869 24.8145C48.8557 28.0833 52.7369 30.6762 57.0078 32.4453C61.2548 34.2045 65.805 35.1139 70.4014 35.124C70.4014 35.1504 70.4033 35.1768 70.4033 35.2031C70.4033 35.2288 70.4014 35.2546 70.4014 35.2803C65.805 35.2904 61.2548 36.2008 57.0078 37.96C52.7369 39.7291 48.8558 42.322 45.5869 45.5908C42.3182 48.8596 39.7251 52.74 37.9561 57.0107C36.2499 61.1297 35.3437 65.5343 35.2812 69.9893C35.193 65.5487 34.1307 60.9452 32.4375 56.8574C30.6684 52.5865 28.0755 48.7054 24.8066 45.4365C21.5378 42.1677 17.6567 39.5748 13.3857 37.8057C9.14115 36.0475 4.59374 35.1381 0 35.127C2.75566e-06 35.1257 -2.89706e-06 35.1243 0 35.123C4.59446 35.1121 9.14246 34.2037 13.3877 32.4453C17.6587 30.6762 21.5397 28.0833 24.8086 24.8145C28.0773 21.5457 30.6704 17.6653 32.4395 13.3945C34.1986 9.14764 35.108 4.59727 35.1182 0.000976562C35.1457 0.000913195 35.1736 0 35.2012 0C35.2262 2.17141e-07 35.2513 0.000923952 35.2764 0.000976562Z" fill="#8D42FD" />
                    </svg>
                    <a href="" id="buy-merch-btn" className="flex flex-row w-[19vw] h-[5.72vw] max-md:h-[9vw] max-md:w-[19.5vw] px-[2.81vw] max-md:px-[0] py-[1.32vw] justify-center items-center rounded-[2.19vw] border-[3px] border-[#141131] bg-[#FDD442] gap-x-[1vw]" >
                        <div id="buy-now-txt" className="flex flex-nowrap text-[#141131] text-center font-['Inter'] text-[2.1vw] not-italic font-black leading-normal">Buy Now</div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" fill="none" className="w-[2.6vw] h-[2.6vw]">
                            <path d="M40.6128 8.13504C40.406 7.88739 40.1475 7.68817 39.8553 7.55144C39.5631 7.41471 39.2445 7.34381 38.9219 7.34375H9.91406L8.9098 1.8084C8.81742 1.30109 8.55001 0.842256 8.15414 0.511813C7.75828 0.181369 7.25905 0.000250311 6.7434 0H2.20312C1.61882 0 1.05845 0.232114 0.64528 0.64528C0.232114 1.05845 0 1.61882 0 2.20312C0 2.78743 0.232114 3.3478 0.64528 3.76097C1.05845 4.17414 1.61882 4.40625 2.20312 4.40625H4.90379L9.47711 29.5586C9.5999 30.2267 9.85386 30.8638 10.2243 31.4331C9.56844 32.2005 9.12137 33.124 8.92625 34.1145C8.73113 35.105 8.79454 36.1291 9.11037 37.088C9.42619 38.0469 9.98377 38.9082 10.7293 39.5888C11.4749 40.2695 12.3833 40.7466 13.3669 40.974C14.3504 41.2015 15.376 41.1716 16.3447 40.8873C17.3134 40.6031 18.1925 40.074 18.8972 39.3511C19.6019 38.6283 20.1085 37.736 20.368 36.7604C20.6276 35.7848 20.6313 34.7587 20.3789 33.7812H26.6211C26.3148 34.9675 26.387 36.2198 26.8276 37.3629C27.2683 38.5061 28.0552 39.4829 29.0784 40.1567C30.1016 40.8305 31.3099 41.1675 32.5341 41.1207C33.7584 41.0739 34.9373 40.6455 35.9061 39.8955C36.8748 39.1455 37.5848 38.1114 37.9368 36.938C38.2888 35.7645 38.2652 34.5103 37.8692 33.351C37.4731 32.1916 36.7246 31.185 35.7283 30.4721C34.7319 29.7592 33.5376 29.3756 32.3125 29.375H14.5351C14.3634 29.3748 14.1972 29.3144 14.0654 29.2044C13.9336 29.0944 13.8445 28.9417 13.8136 28.7728L13.3877 26.4375H33.7996C35.0038 26.4375 36.1697 26.0148 37.0941 25.2431C38.0185 24.4714 38.6426 23.3996 38.8576 22.2148L41.0901 9.93977C41.1475 9.62234 41.1345 9.29619 41.052 8.98435C40.9696 8.6725 40.8196 8.38257 40.6128 8.13504ZM16.1562 35.25C16.1562 35.5405 16.0701 35.8245 15.9087 36.066C15.7473 36.3075 15.5179 36.4958 15.2496 36.6069C14.9812 36.7181 14.6859 36.7472 14.401 36.6905C14.1161 36.6339 13.8543 36.494 13.6489 36.2886C13.4435 36.0832 13.3036 35.8214 13.247 35.5365C13.1903 35.2516 13.2194 34.9563 13.3306 34.6879C13.4417 34.4196 13.63 34.1902 13.8715 34.0288C14.113 33.8674 14.397 33.7812 14.6875 33.7812C15.077 33.7812 15.4506 33.936 15.7261 34.2114C16.0015 34.4869 16.1562 34.8605 16.1562 35.25ZM32.3125 36.7188C32.022 36.7188 31.738 36.6326 31.4965 36.4712C31.255 36.3098 31.0667 36.0804 30.9556 35.8121C30.8444 35.5437 30.8153 35.2484 30.872 34.9635C30.9286 34.6786 31.0685 34.4168 31.2739 34.2114C31.4793 34.006 31.7411 33.8661 32.026 33.8095C32.3109 33.7528 32.6062 33.7819 32.8746 33.8931C33.1429 34.0042 33.3723 34.1925 33.5337 34.434C33.6951 34.6755 33.7812 34.9595 33.7812 35.25C33.7812 35.6395 33.6265 36.0131 33.3511 36.2886C33.0756 36.564 32.702 36.7188 32.3125 36.7188ZM34.5156 21.4291C34.4849 21.597 34.3966 21.749 34.2659 21.8589C34.1352 21.9688 33.9704 22.0298 33.7996 22.0312H12.5872L10.7182 11.75H36.2818L34.5156 21.4291Z" fill="#141131"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
import { useState } from 'react';

const GalleryImage = ({ id, className, src, onClick, customStyle }) => (
    <div 
        id={id} 
        className={`${className} relative overflow-hidden bg-[lightgray] transition-all duration-300 cursor-pointer hover:scale-[1.02]`}
        onClick={() => onClick(src)}
    >
        <img 
            src={src} 
            alt="Gallery" 
            className={
                customStyle 
                ? `absolute max-w-none ${customStyle} ` 
                : "w-full h-full object-cover"
            } 
        />
    </div>
);

export default function GallerySection() {
    const [activeImage, setActiveImage] = useState(null); 

    return (
        <div id="gallery" className="flex flex-col justify-center items-center w-full h-[130vh] max-md:h-[20vh] relative pb-[10vh]">
            <div id="gallery-title" className="text-[#FFF9F0] font-['Inter'] text-[10.85vw] font-black leading-normal h-[12vw]">
                GALLERY
            </div>

            <div 
                id="gallery-container" 
                className={`w-[86.15vw] flex flex-row flex-wrap transition-all duration-500 ease-in-out ${activeImage ? 'blur-[8px] opacity-40 scale-[0.98]' : ''}`}
            >
                <div id="gallery-image-row1" className="flex flex-col justify-center items-center">
                    <GalleryImage 
                        id="image-r1-1" 
                        src="/placeholder-gallery.png" 
                        className="w-[22.23vw] h-[13.35vw] aspect-[338/203] rounded-[1.58vw] border-[2px] border-[#FFF9F0]" 
                        onClick={setActiveImage}
                    />
                    <GalleryImage 
                        id="image-r1-2" 
                        src="/placeholder-gallery.png" 
                        className="w-[22.23vw] h-[31.69vw] aspect-[169/241] rounded-[1.58vw] border-[2px] border-[#FFF9F0]" 
                        onClick={setActiveImage}
                    />
                </div>

                <div id="gallery-image-row2" className="flex flex-col justify-center items-center">
                    <GalleryImage 
                        id="image-r2-1" 
                        src="/placeholder-gallery.png" 
                        className="w-[22.23vw] h-[22.62vw] aspect-[169/172] rounded-[1.58vw] border-[2px] border-[#FFF9F0]" 
                        onClick={setActiveImage}
                    />
                    <GalleryImage 
                        id="image-r2-2" 
                        src="/placeholder-gallery.png" 
                        className="w-[22.23vw] h-[22.42vw] aspect-[338/341] rounded-[1.58vw] border-[2px] border-[#FFF9F0]" 
                        onClick={setActiveImage}
                    />
                </div>
                
                <div id="gallery-image-row3-4" className="flex flex-col justify-center items-center">
                    <div id="gallery-row3-4-col1" className="flex flex-row">
                        <GalleryImage 
                            id="image-r3-4-c1-1" 
                            src="/placeholder-gallery.png" 
                            className="w-[29.92vw] h-[32.75vw] aspect-[455/498] rounded-[1.58vw] border-[2px] border-[#FFF9F0]" 
                            onClick={setActiveImage}
                        />
                        <GalleryImage 
                            id="image-r3-4-c1-2" 
                            src="/placeholder-gallery.png" 
                            className="w-[11.64vw] h-[32.75vw] aspect-[59/166] rounded-[1.58vw] border-[2px] border-[#FFF9F0]" 
                            onClick={setActiveImage}
                        />
                    </div>
                    <GalleryImage 
                        id="image-r3-4-c2-1" 
                        src="/placeholder-gallery.png" 
                        className="w-[41.69vw] h-[12.30vw] aspect-[634/187] rounded-[1.58vw] border-[2px] border-[#FFF9F0]" 
                        onClick={setActiveImage}
                        customStyle="w-[119.21%] h-[269.91%] left-[-7.92vw] top-[-4.71vw]"
                    />
                </div>
            </div>

            <div 
                className={`fixed inset-0 z-[9999] flex items-center justify-center transition-all duration-300 ease-out ${activeImage ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                onClick={() => setActiveImage(null)}
            >
                {activeImage && (
                    <img 
                        src={activeImage} 
                        alt="Active Gallery" 
                        className="h-[min(80vh,80vw)] w-[min(80vh,80vw)] aspect-square object-cover rounded-[1.58vw] border-[4px] border-[#FFF9F0] shadow-2xl cursor-default" 
                        onClick={(e) => e.stopPropagation()} 
                    />
                )}
            </div>
        </div>
    );
}
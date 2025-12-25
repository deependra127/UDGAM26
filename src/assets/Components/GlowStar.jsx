import React from 'react';


export default function GlowStar({ width = "3.44vw", height = "3.44vw", className}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 66 66" fill="none" width={width} height={height} className={className}>
            <g filter="url(#filter0_df_1_3095)">
                <path d="M20.3838 32.5518C22.0306 32.5477 23.661 32.2229 25.1826 31.5947C26.7138 30.9626 28.1045 30.0352 29.2764 28.8672C30.4482 27.6992 31.3785 26.3131 32.0127 24.7871C32.6434 23.2696 32.969 21.6433 32.9727 20.001C32.9831 20.001 32.9935 20 33.0039 20C33.0119 20 33.0203 20.001 33.0283 20.001C33.032 21.6433 33.3586 23.2696 33.9893 24.7871C34.6235 26.313 35.5529 27.6993 36.7246 28.8672C37.8965 30.0352 39.2881 30.9626 40.8193 31.5947C42.2947 32.2038 43.8722 32.527 45.4678 32.5498C43.878 32.5824 42.2299 32.9623 40.7666 33.5664C39.2356 34.1985 37.8446 35.125 36.6729 36.293C35.5009 37.461 34.5708 38.8479 33.9365 40.374C33.3063 41.8908 32.9805 43.5157 32.9766 45.1572C32.9753 45.1572 32.974 45.1572 32.9727 45.1572C32.9688 43.5154 32.6431 41.8901 32.0127 40.373C31.3785 38.8469 30.4483 37.46 29.2764 36.292C28.1045 35.1241 26.7136 34.1975 25.1826 33.5654C23.661 32.9372 22.0306 32.6124 20.3838 32.6084C20.3838 32.5992 20.3838 32.5609 20.3838 32.5518Z" fill="#FDD442"/>
            </g>
            <g filter="url(#filter1_f_1_3095)">
                <path d="M33 2.5L33.8627 32.1373L63.5 33L33.8627 33.8627L33 63.5L32.1373 33.8627L2.5 33L32.1373 32.1373L33 2.5Z" fill="white"/>
            </g>
            <defs>
                <filter id="filter0_df_1_3095" x="16.6338" y="16.25" width="32.584" height="32.6572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1.875"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.944636 0 0 0 0 0.804187 0 0 0 0 0.751518 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_3095"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_3095" result="shape"/>
                <feGaussianBlur stdDeviation="0.532827" result="effect2_foregroundBlur_1_3095"/>
                </filter>
                <filter id="filter1_f_1_3095" x="0" y="0" width="66" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="1.25" result="effect1_foregroundBlur_1_3095"/>
                </filter>
            </defs>
        </svg>
    );
}
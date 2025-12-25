import React from 'react';


export default function LargeGlowStar({ width = "2.17vw", height = "2.17vw", className}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 35 35" fill="none" className={className}>
            <g filter="url(#filter0_df_1_997)">
                <path d="M3.75 17.2207C5.5184 17.2168 7.26935 16.8679 8.90332 16.1934C10.5463 15.515 12.0393 14.5209 13.2969 13.2676C14.5546 12.014 15.5527 10.5255 16.2334 8.8877C16.9103 7.25895 17.2598 5.51372 17.2637 3.75098C17.274 3.75095 17.2846 3.75 17.2949 3.75C17.3044 3.75 17.3138 3.75096 17.3232 3.75098C17.3271 5.51372 17.6776 7.25895 18.3545 8.8877C19.0352 10.5254 20.0324 12.0141 21.29 13.2676C22.5477 14.5211 24.0413 15.515 25.6846 16.1934C27.2711 16.8483 28.9676 17.1955 30.6836 17.2187C28.9738 17.252 27.201 17.6598 25.627 18.3096C23.9836 18.988 22.4902 19.9828 21.2324 21.2363C19.9748 22.4899 18.9775 23.9784 18.2969 25.6162C17.6203 27.2442 17.2698 28.9881 17.2656 30.75L17.2637 30.75C17.2595 28.9882 16.9099 27.2441 16.2334 25.6162C15.5527 23.9783 14.5546 22.4899 13.2969 21.2363C12.0392 19.9828 10.5465 18.988 8.90332 18.3096C7.26935 17.635 5.5184 17.2871 3.75 17.2832C3.75 17.2734 3.74998 17.2305 3.75 17.2207Z" fill="#FDD442"/>
            </g>
            <defs>
                <filter id="filter0_df_1_997" x="0" y="-1.13272e-07" width="34.4336" height="34.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1.875"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.944636 0 0 0 0 0.804187 0 0 0 0 0.751518 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_997"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_997" result="shape"/>
                <feGaussianBlur stdDeviation="0.532827" result="effect2_foregroundBlur_1_997"/>
                </filter>
            </defs>
        </svg>
    );
}
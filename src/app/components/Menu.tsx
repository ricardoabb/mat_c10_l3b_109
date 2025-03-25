'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMapStore } from "../store/useMapStore";
import { info } from '../utils/info';
import { log } from "console";

export default function Menu() {
  const pathname = usePathname(); // Obter a rota atual

  // Verifica se a rota atual é '/info'
  const isInfoActive = pathname === "/";
  const isMapActive = pathname === "/map";
  const isUsinaActive = pathname === "/usina";


  const { currentId, isActiveId,readedInfo, showQuestion , currentSlide, setCurrentId, setIsActiveId, openModal } = useMapStore();
  


  function handleModal() {


    if (currentSlide === 0) {
      info.map((item, index) => {
        if (item.id === 2) {
          openModal({
            title: item.title,
            content: item.content,
            image1: item.image,
            tapeColor: 'tapeColor',
            bgColor: 'bgColor',

          })
        }
      })
    }  else if (currentSlide === 1 && !showQuestion ) {
      console.log('SQ', showQuestion);
      info.map((item, index) => {
        if (item.id === 6) {
          openModal({
            title: item.title,
            content: item.content,
            image1: item.image,
            link: item.link,
            tapeColor: 'tapeColor',
            bgColor: 'bgColor',

          })
        }
      })    
    }  else if (currentSlide === 1 && showQuestion) {
      console.log('SQ2', showQuestion);
      info.map((item, index) => {
        if (item.id === 12) {
          openModal({
            title: item.title,
            content: item.content,
            image1: item.image,
            link: item.link,
            tapeColor: 'tapeColor',
            bgColor: 'bgColor',

          })
        }
      })
    }
    else if (currentSlide === 2) {
      info.map((item, index) => {
        if (item.id === 13) {
          console.log("LINK: ", item.link);

          openModal({
            title: item.title,
            content: item.content,
            image1: item.image,
            link: item.link,
            tapeColor: 'tapeColor',
            bgColor: 'bgColor',

          })
        }
      })
    }
    else if (currentSlide === 3) {
      info.map((item, index) => {
        if (item.id === 15) {
          console.log("LINK: ", item.link);

          openModal({
            title: item.title,
            content: item.content,
            image1: item.image,
            link: item.link,
            tapeColor: 'tapeColor',
            bgColor: 'bgColor',

          })
        }
      })
    }

  }



  return (
    <nav className="absolute bottom-0   rounded-t-xl flex gap-5 z-[999]">
      {/* Ícone com cor alterada quando a rota for '/info' */}
      <div className="cursor-pointer w-fit  bg-[#349C8F] p-5 py-5 rounded-t-xl" onClick={() => handleModal()}>

        <svg width="38" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.394.766c-1.924.252-2.94.715-3.667 1.425C1.002 2.904.53 3.901.27 5.784.005 7.724 0 10.294 0 13.978v20.354a9.977 9.977 0 013.085-1.409c1.254-.33 2.717-.33 4.862-.327H38V13.98c0-3.687-.005-6.256-.27-8.197-.26-1.883-.732-2.88-1.457-3.593-.726-.71-1.743-1.173-3.667-1.425C30.626.505 28.004.5 24.242.5H13.758C9.996.5 7.374.505 5.394.766zm1.159 10.647c0-1.064.878-1.926 1.964-1.926h20.966a1.948 1.948 0 011.964 1.924 1.947 1.947 0 01-1.964 1.926H8.517a1.948 1.948 0 01-1.964-1.924zm.584 7.617c.368-.36.865-.56 1.38-.556H21.62a1.948 1.948 0 011.966 1.926 1.947 1.947 0 01-1.966 1.924H8.517c-1.086 0-1.964-.862-1.964-1.926a1.948 1.948 0 01.584-1.368zM38 36.446H8.248c-2.562 0-3.458.016-4.146.197a5.842 5.842 0 00-4.03 3.65c.037.91.101 1.71.199 2.423.259 1.883.731 2.88 1.456 3.593.726.71 1.743 1.173 3.667 1.427 1.98.26 4.602.264 8.364.264h10.486c3.762 0 6.384-.005 8.365-.266 1.923-.252 2.94-.715 3.667-1.425.724-.713 1.197-1.71 1.456-3.593.218-1.582.26-3.587.268-6.27z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#F9D8A7" />
        </svg>
      </div>
      <div className={`${!showQuestion ? 'hidden' : ''} cursor-pointer w-fit  bg-[#349C8F] p-5 py-5 rounded-t-xl `} onClick={() => handleModal()}>
        <svg width="28" height="45" viewBox="0 0 28 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9165 31.0818C13.0065 31.0818 12.2827 30.7906 11.745 30.208C11.2487 29.5839 11.0005 28.7517 11.0005 27.7115C11.0005 26.5049 11.1453 25.3814 11.4348 24.3412C11.7243 23.2594 12.1793 22.1775 12.7997 21.0957C13.4615 20.0139 14.3301 18.9112 15.4055 17.7878C16.15 16.914 16.7497 16.165 17.2047 15.5409C17.701 14.8752 18.0319 14.251 18.1974 13.6685C18.4042 13.0444 18.5076 12.4202 18.5076 11.7961C18.5076 10.6311 18.0733 9.71567 17.2047 9.04993C16.3775 8.38419 15.178 8.05132 13.6063 8.05132C12.1173 8.05132 10.7317 8.23856 9.44946 8.61304C8.20862 8.98752 6.98847 9.52843 5.78899 10.2358C4.7136 10.8183 3.74161 11.0472 2.87302 10.9223C2.04579 10.7559 1.38401 10.3814 0.887677 9.79889C0.391341 9.17476 0.101812 8.4466 0.0190898 7.61442C-0.0636327 6.78225 0.122493 5.97087 0.577467 5.18031C1.03244 4.34813 1.79762 3.61997 2.87302 2.99584C4.56883 1.99722 6.45077 1.24826 8.51883 0.748958C10.5869 0.249653 12.5102 0 14.2887 0C17.0186 0 19.4175 0.457698 21.4856 1.37309C23.5537 2.28849 25.1461 3.53675 26.2628 5.11789C27.4209 6.69903 28 8.55062 28 10.6727C28 11.9626 27.8139 13.1692 27.4416 14.2926C27.0694 15.4161 26.4696 16.5395 25.6424 17.663C24.8152 18.7448 23.6777 19.889 22.2301 21.0957C20.9479 22.1775 19.9345 23.1553 19.19 24.0291C18.4455 24.8613 17.9078 25.6727 17.577 26.4632C17.2461 27.2122 17.0186 28.0236 16.8945 28.8974C16.7704 29.5215 16.4602 30.0416 15.9639 30.4577C15.5089 30.8738 14.8264 31.0818 13.9165 31.0818ZM13.7924 45C12.1379 45 10.8144 44.5007 9.82171 43.5021C8.8704 42.5035 8.39475 41.2136 8.39475 39.6325C8.39475 38.0929 8.8704 36.8447 9.82171 35.8877C10.8144 34.889 12.1379 34.3897 13.7924 34.3897C15.4468 34.3897 16.729 34.889 17.639 35.8877C18.5903 36.8447 19.066 38.0929 19.066 39.6325C19.066 41.2136 18.5903 42.5035 17.639 43.5021C16.729 44.5007 15.4468 45 13.7924 45Z" fill="#F9D8A7" />
        </svg>

      </div>


    </nav>
  );
}

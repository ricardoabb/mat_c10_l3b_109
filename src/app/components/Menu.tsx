'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useMapStore } from "../store/useMapStore";
import { info } from '../utils/info';

export default function Menu() {
  const pathname = usePathname(); // Obter a rota atual

  // Verifica se a rota atual é '/info'
  const isInfoActive = pathname === "/";
  const isMapActive = pathname === "/map";
  const isUsinaActive = pathname === "/usina";


  const { currentId, isActiveId, currentSlide, setCurrentId, setIsActiveId, openModal } = useMapStore();


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
    } else if (currentSlide === 1) {
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
    <nav className="absolute bottom-0 bg-[#349C8F] p-5 py-5 rounded-t-xl flex gap-5 z-[999]">
      {/* Ícone com cor alterada quando a rota for '/info' */}
      <div className="cursor-pointer" onClick={() => handleModal()}>

        <svg width="38" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.394.766c-1.924.252-2.94.715-3.667 1.425C1.002 2.904.53 3.901.27 5.784.005 7.724 0 10.294 0 13.978v20.354a9.977 9.977 0 013.085-1.409c1.254-.33 2.717-.33 4.862-.327H38V13.98c0-3.687-.005-6.256-.27-8.197-.26-1.883-.732-2.88-1.457-3.593-.726-.71-1.743-1.173-3.667-1.425C30.626.505 28.004.5 24.242.5H13.758C9.996.5 7.374.505 5.394.766zm1.159 10.647c0-1.064.878-1.926 1.964-1.926h20.966a1.948 1.948 0 011.964 1.924 1.947 1.947 0 01-1.964 1.926H8.517a1.948 1.948 0 01-1.964-1.924zm.584 7.617c.368-.36.865-.56 1.38-.556H21.62a1.948 1.948 0 011.966 1.926 1.947 1.947 0 01-1.966 1.924H8.517c-1.086 0-1.964-.862-1.964-1.926a1.948 1.948 0 01.584-1.368zM38 36.446H8.248c-2.562 0-3.458.016-4.146.197a5.842 5.842 0 00-4.03 3.65c.037.91.101 1.71.199 2.423.259 1.883.731 2.88 1.456 3.593.726.71 1.743 1.173 3.667 1.427 1.98.26 4.602.264 8.364.264h10.486c3.762 0 6.384-.005 8.365-.266 1.923-.252 2.94-.715 3.667-1.425.724-.713 1.197-1.71 1.456-3.593.218-1.582.26-3.587.268-6.27z"
            fill-rule="evenodd"
            clip-rule="evenodd"
            fill="#F9D8A7" />
        </svg>
      </div>


    </nav>
  );
}

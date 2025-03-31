"use client"

import React from 'react';
import { useEffect } from "react";
import { useMapStore } from "../store/useMapStore";
import { motion, AnimatePresence } from 'framer-motion';
import { TextBox } from "./TextBox";



import 'swiper/css';
import 'swiper/css/navigation';

import { info } from '../utils/info';
import { read } from 'fs';
import { div } from 'motion/react-client';






export function CardModal() {

  const { isOpen, readedInfo, title, content, image1, currentId, link, isImgActive, isChangedSlide, openModal, closeModal, setCurrentId, setReadedInfo, setIsImgActive, setSlideChange  } = useMapStore();
  if (!isOpen) return null;



  const handleSlide = () => {

    if (currentId === "1") {

      let id = parseInt(currentId) + 1;
      closeModal();

      setTimeout(() => {
        handleModal(id.toString())
      }, 100);

    } else {
      let id = parseInt(currentId) + 1;
      setCurrentId(id.toString(), true);
      closeModal();
    }


    setReadedInfo((prev) => {
      if (!prev.includes(currentId)) {
        const updatedArray = [...prev, currentId];
        console.log('Atualizado readedInfo: ', updatedArray);
        return updatedArray;
      }
      return prev;
    });




  }

  function handleModal(id: string) {

    setCurrentId(id, true);    

    info.map((item, index) => {
      if (item.id === parseInt(id)) {
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







  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id='card-modal'
          className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900 bg-opacity-50 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-modal bg-no-repeat bg-cover bg-opacity-50 backdrop-blur-sm p-6 rounded shadow-lg w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="relative w-full md:w-auto -mt-8 md:-mt-0">
              <button onClick={handleSlide} className={`${isImgActive ? 'hidden' : ''} absolute top-[-50px] md:top-[24px] right-8 md:right-10 z-50`}> 
                <svg width="23" height="25" className='fill-[#F9D8A7] md:fill-[#776CA9]' viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.0156 34.2656H23.7188L15.75 21.3047L7.78125 34.2656H0L11.3672 16.5938L0.726562 0H8.74219L16.125 12.3281L23.3672 0H31.1953L20.4375 16.9922L32.0156 34.2656Z" />
                </svg>
              </button>
              <div className="relative ">
                {/* <TextBox title={title} content={content} image={image1} link={link} hide={false} />
                 */}

                {isImgActive ? (
                  <div className='z-[999]'>
                    <button onClick={() => setIsImgActive(false)} className={`absolute ${currentId === "16" ? 'top-[-50px] md:top-[10px]': 'top-[-50px] md:top-[-44px]'} right-8 md:right-10 z-50 cursor-pointer`}>
                      <svg width="33" height="35" className={`${currentId === "16" ? 'fill-[#776CA9] ' : 'fill-[#F9D8A7] '}viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg`}>
                        <path d="M32.0156 34.2656H23.7188L15.75 21.3047L7.78125 34.2656H0L11.3672 16.5938L0.726562 0H8.74219L16.125 12.3281L23.3672 0H31.1953L20.4375 16.9922L32.0156 34.2656Z" />
                      </svg>
                    </button>
                    <img src={image1} alt="Modal" className="max-w-full max-h-[80vh]  z-0" />
                  </div>

                ) : (
                  <TextBox title={title} content={content} image={image1} link={link} hide={false} />
                )}
                <div className='absolute flex left-0 -bottom-[200px] md:-bottom-[330px] w-full'>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};    

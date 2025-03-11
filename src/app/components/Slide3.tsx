"use client"

import React from 'react';
import { useMapStore } from "../store/useMapStore";

import 'swiper/css';
import 'swiper/css/navigation';

import { info } from '../utils/info';
import Chart1 from './Chart-1';
import Chart2 from './Chart-2';
import Chart3 from './Chart-3';
import Chart4 from './Chart-4';






export function Slide2() {

  const { isOpen, title, content, image1, currentId, openModal, closeModal, setCurrentId } = useMapStore();


  function handleModal(id: string) {

    setCurrentId(id, true);

    info.map((item, index) => {
      if (item.id === parseInt(id)) {
        openModal({
          title: item.title,
          content: item.content,
          image1: item.image,
          tapeColor: 'tapeColor',
          bgColor: 'bgColor',

        })
      }


    })
  }


  return (
    <section className="flex flex-col overflow-hidden h-screen 
     justify-center p-4 pt-4 md:p-56 md:pt-8 xl:p-80 lg:pt-8 2xl:p-96 gap-6  ">

      <div className="flexjustify-center items-center ">
        <Chart3 />
      </div>
      <div className="flex justify-center items-center ">
        <Chart4 />
      </div>
    </section>
  );
};    

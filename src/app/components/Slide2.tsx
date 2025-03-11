"use client"

import React from 'react';
import { useMapStore } from "../store/useMapStore";

import 'swiper/css';
import 'swiper/css/navigation';

import { info } from '../utils/info';
import Chart1 from './Chart-1';
import Chart2 from './Chart-2';






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
    <section className="grid grid-cols-12 gap-4 px-4">

      <div className="col-span-12 lg:col-span-6">
        <Chart2 />
      </div>
    </section>
  );
};    

"use client"
import Image from "next/legacy/image";
import iconBalance from '../assets/icon-more.svg';


import React, { useState, useEffect } from 'react';
import { AnimatedText } from "./AnimatedText";
import { useMapStore } from "../store/useMapStore";


type textInfoProp = {
  title: string;
  content: string;
  image?: string;
  imagesubtitle?: string;
  link?: string;
  hide?: boolean;
};





export function TextBox({ content = "", title, image, imagesubtitle, link, hide = false }: textInfoProp) {
  const [loading, setLoading] = useState(true);

 const { setIsImgActive } = useMapStore();

  function TextWithHighlights({ text }: { text: string | undefined }): JSX.Element {
    // Verificar se 'text' é undefined
    if (!text) {
      return <p className="text-[#BB7843] text-[14px]"></p>;
    }

    const phrasesToHighlight: string[] = [
      'Estudar', 'Reino de Jerusalém', 'o Condado de Trípoli', 'o Principado de Antioquia', 'Condado de Edessa.', 'proto',
    ];
    const phrasesToItalic: string[] = [
      'Papa Urbano II discursando no Concílio de Clermont', 'Mapa de Jerusalém'
    ];

    // Combinar todas as frases para realce e itálico
    const sortedPhrasesToHighlight = phrasesToHighlight.sort((a, b) => b.length - a.length);
    const sortedPhrasesToItalic = phrasesToItalic.sort((a, b) => b.length - a.length);

    const allPhrases = [...sortedPhrasesToHighlight, ...sortedPhrasesToItalic];
    const regex = new RegExp(`(${allPhrases.map(phrase => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

    const highlightedText = text.split(regex).map((part, index) => {
      if (sortedPhrasesToHighlight.includes(part)) {
        return <strong key={`highlight-${index}`}>{part}</strong>;
      }
      if (sortedPhrasesToItalic.includes(part)) {
        return <em key={`italic-${index}`}>{part}</em>;
      }
      return part;
    });

    return <p className="text-[#BB7843] text-[14px]">{highlightedText}</p>;
  }

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div id="container" className=" flex flex-col w-full sm:w-[650px] lg:w-[750px] px-4 pb-12 md:mx-auto">
      {title && (
        <div id="title" className="text-center rounded-[100px] bg-[#fff] px-4 py-2">
          <h1 className="text-[#776CA9] text-[1.5rem] md:text-[2rem] font-bold ">{title}</h1>
        </div>
      )}
      {
        image && (
          <div className="swiper-image w-[100%] md:w-[50%] xl:w-[60%] mx-auto my-4 mb-0 p-4 bg-[#fff] rounded-[24px] overflow-hidden cursor-pointer" onClick={() => setIsImgActive(true)}>

            <Image
              src={image!}
              alt="image"
              width={100}
              height={100}
              objectFit='contain'
              layout="responsive"
              quality={100}
              priority={true}
              unoptimized={true}
              onLoad={handleImageLoad}
              className={`transition-opacity duration-500 ease-in-out `}
            />

          </div>
        )
      }

      {
        content && (
          <div id="box-container" className={`px-5 py-7 bg-gradient-to-r from-sand-300 to-sand-100 rounded-2xl mt-5 bg-[#fff]`}>
            <div className={`h-40 md:h-24 text-base text-[#BB7843] font-medium`}>
              <AnimatedText text={content} limit={170} />
            </div>
              {link && (
                <a className="text-[#776CA9] font-bold hover:text-[#E5985E] transition-colors ease-in-out duration-300" href={link} target="_blank" rel="noreferrer">Saiba Mais +</a>
              )}
          </div>
        )
      }


    </div>
  )
}
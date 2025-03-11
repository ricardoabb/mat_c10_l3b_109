'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useMapStore } from './store/useMapStore';
import Home from './components/Layout';
import { TextBox } from './components/TextBox';

// Swiper
import { Navigation, A11y } from 'swiper/modules';
import { register } from "swiper/element/bundle";
register();

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { info } from './utils/info';
import Chart1 from './components/Chart-1';
import { Slide2 } from './components/Slide3';
import Chart2 from './components/Chart-2';
import { log } from 'console';
import Chart3 from './components/Chart-3';
import Chart4 from './components/Chart-4';

export default function Info() {

    const [realIndex, setIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const sliderRef = useRef<any>(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const { currentId, isOpen, link, isActiveId, readedInfo, setCurrentId, setIsActiveId, openModal, setCurrentSlide, setReadedInfo } = useMapStore();

    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.activeIndex);
       

        // setCurrentId(swiper.activeIndex, false);
    };



    useEffect(() => {
        if (sliderRef.current && sliderRef.current.swiper) {
            const swiper = sliderRef.current.swiper;
            setActiveIndex(swiper.activeIndex);
            setCurrentSlide(swiper.activeIndex);
            setReadedInfo([])
            if (swiper.activeIndex === 0) {
                setCurrentId("1", false);
                info.map((item, index) => {
                    if (item.id === 1) {
                        openModal({
                            title: item.title,
                            content: item.content,
                            image1: item.image,
                            tapeColor: 'tapeColor',
                            bgColor: 'bgColor',

                        })
                    }
                })
            } else if (swiper.activeIndex === 1) {
                info.map((item, index) => {
                    if (item.id === 6) {
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
             else if (swiper.activeIndex === 2) {
                info.map((item, index) => {
                    if (item.id === 13) {
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
             else if (swiper.activeIndex === 3) {
                info.map((item, index) => {
                    if (item.id === 14) {
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
    }, [activeIndex]);

    function customHandleSlide(id: number) {
        if (sliderRef.current && sliderRef.current.swiper) {
            const swiper = sliderRef.current.swiper;
            if (swiper.activeIndex !== currentId) {
                swiper.slideTo(currentId);
            }
        }

    }




    return (
        <Home>
            <div className='relative flex-col justify-center items-center md:mt-0'>
                <Swiper
                    onSlideChange={handleSlideChange}
                    modules={[Navigation, A11y]}
                    ref={sliderRef}
                    onInit={(swiper: any) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    allowTouchMove={false}
                    draggable={false}
                >

                    {/* {info?.map((item, index) => (
                            <SwiperSlide key={index}>
                               <Chart1 />
                            </SwiperSlide>
                        ))} */}

                    <SwiperSlide >
                        <Chart1 />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Chart2 />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Chart3 />
                    </SwiperSlide>
                    <SwiperSlide >
                        <Chart4 />
                    </SwiperSlide>

                </Swiper>
            </div>

            <div id="swiper-navigation" className={`absolute m-auto left-0 right-0 bottom-[40px] lg:bottom-[250px] h-fit flex items-center justify-between gap-6 mt-12 w-[90%] md:w-[70%] mx-auto transition-all ease-in-out duration-[.3s]`}>
                <button
                    className={`${sliderRef.current?.swiper.activeIndex === 0 ? "opacity-[.5]" : "opacity-100"} scale-x-[-1] flex justify-center items-center z-50`}
                    disabled={sliderRef.current?.swiper.activeIndex === 0}
                    onClick={() => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd);
                        sliderRef.current?.swiper.slidePrev();
                    }}
                >
                    <div>
                        <svg className='w-[46px] md:w[66px] h-[30px] md:h-[50px]' width="66" height="50" viewBox="0 0 35 46" fill="#BB7843" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7382 18.2279C34.8891 20.6291 34.8891 25.3709 31.7382 27.7721L10.1369 44.2346C6.18746 47.2444 0.500008 44.428 0.500008 39.4624L0.500008 6.53757C0.500008 1.57198 6.18746 -1.24442 10.1369 1.76544L31.7382 18.2279Z" />
                        </svg>
                    </div>
                </button>

                <button
                    className={`${sliderRef.current?.swiper.activeIndex === 3 ? "opacity-[.5]" : "opacity-100"} flex justify-center items-center z-50`}
                    disabled={sliderRef.current?.swiper.activeIndex === 3}
                    onClick={() => {
                        setIndex(sliderRef.current?.swiper.realIndex);
                        setIsEnd(sliderRef.current?.swiper.isEnd);
                        sliderRef.current?.swiper.slideNext();
                    }}
                >
                    <div>
                        <svg className='w-[46px] md:w[66px] h-[30px] md:h-[50px]' viewBox="0 0 35 46" fill="#BB7843" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.7382 18.2279C34.8891 20.6291 34.8891 25.3709 31.7382 27.7721L10.1369 44.2346C6.18746 47.2444 0.500008 44.428 0.500008 39.4624L0.500008 6.53757C0.500008 1.57198 6.18746 -1.24442 10.1369 1.76544L31.7382 18.2279Z" />
                        </svg>
                    </div>
                </button>
            </div>
        </Home>
    );
}
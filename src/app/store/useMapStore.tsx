'use client';
import { create } from 'zustand';

interface MapStore {
    currentId: string,
    currentSlide: number,
    isActiveId: boolean,    
    isImgActive: boolean,    
    setCurrentId: (id: string, isActiveId: boolean) => void
    setCurrentSlide: (id: number, ) => void
    setIsActiveId: (isActiveId: boolean) => void
    setIsImgActive: (setIsImgActive: boolean) => void

    readedInfo: Array<string>;
    setReadedInfo: (array: Array<string>) => void;
    isOpen: boolean;
    title: string;
    content: string;  
    image1?: string;
    link?: string;
    openModal: (params: {
        title: string;
        content: string;
        image1?: string;
        link?: string;
        
        
        tapeColor?: string;
        bgColor?: string;
    }) => void;
    closeModal: () => void;
}

export const useMapStore = create<MapStore>((set) => ({
    currentId: '1',
    currentSlide: 0,
    isActiveId: false,
    isImgActive: false,
    title: 'Introdução',
    content: 'Podemos avaliar se o desemprego no Brasil está melhorando ou piorando se coletarmos dados.',
    image1: '',
    link: '',
    isOpen: true,
    readedInfo:['0'],
    openModal: (params) => {
        set({ title: params.title, content: params.content, image1: params.image1, link: params.link, isOpen: true });
    },
    closeModal: () => set({ isOpen: false }),
    setCurrentId: (id: string, isActiveId: boolean) => set({ currentId: id, isActiveId: isActiveId }),
    setReadedInfo: (array: Array<string>) => set({ readedInfo: array }),
    setCurrentSlide: (id: number) => set({ currentSlide: id }),
    setIsActiveId: (isActiveId: boolean) => set({ isActiveId: isActiveId }),
    setIsImgActive: (isImgActive: boolean) => set({ isImgActive: isImgActive }),

}));
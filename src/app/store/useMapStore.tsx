'use client';
import { create } from 'zustand';

interface MapStore {
    currentId: string,
    currentSlide: number,
    isActiveId: boolean,    
    setCurrentId: (id: string, isActiveId: boolean) => void
    setCurrentSlide: (id: number, ) => void
    setIsActiveId: (isActiveId: boolean) => void

    readedInfo: Array<string>;
    isOpen: boolean;
    title: string;
    content: string;  
    image1?: string;
    openModal: (params: {
        title: string;
        content: string;
        image1?: string;
        
        
        tapeColor?: string;
        bgColor?: string;
    }) => void;
    closeModal: () => void;
}

export const useMapStore = create<MapStore>((set) => ({
    currentId: '1',
    currentSlide: 0,
    isActiveId: false,
    title: 'Introdução',
    content: 'Podemos avaliar se o desemprego no Brasil está melhorando ou piorando se coletarmos dados.',
    image1: '',
    isOpen: true,
    readedInfo:['0'],
    openModal: (params) => {
        set({ title: params.title, content: params.content, image1: params.image1, isOpen: true });
    },
    closeModal: () => set({ isOpen: false }),
    setCurrentId: (id: string, isActiveId: boolean) => set({ currentId: id, isActiveId: isActiveId }),
    setCurrentSlide: (id: number) => set({ currentSlide: id }),
    setIsActiveId: (isActiveId: boolean) => set({ isActiveId: isActiveId }),

}));
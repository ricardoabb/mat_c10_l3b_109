'use client';
import { create } from 'zustand';

interface MapStore {
    currentId: string,
    currentSlide: number,
    isActiveId: boolean,    
    showQuestion: boolean,    
    isChangedSlide: boolean,    
    isImgActive: boolean,    
    setCurrentId: (id: string, isActiveId: boolean) => void

    setCurrentSlide: (id: number, ) => void

    setShowQuestion: (isActiveId: boolean) => void
    setIsActiveId: (isActiveId: boolean) => void
    setSlideChange: (isActiveId: boolean) => void
    setIsImgActive: (setIsImgActive: boolean) => void

    readedInfo: Array<string>;
    setReadedInfo: (updater: string[] | ((prev: string[]) => string[])) => void;
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
    showQuestion: false,
    isChangedSlide: false,
    isImgActive: false,
    title: 'Introdução',
    content:'O desemprego no Brasil está aumentando ou diminuindo? Como podemos saber? Será que basta olhar para os números ou precisamos interpretar essas informações?\nPara entender essa questão, é essencial analisar os dados e refletir sobre o que eles realmente significam no dia a dia das pessoas. Mas como podemos tornar esses dados mais fáceis de compreender?\nRepresentações como tabelas e gráficos nos ajudam a visualizar as informações de forma mais objetiva e comparativa. Vamos juntos explorar como esses recursos podem nos ajudar a interpretar melhor a realidade!',
    image1: '',
    link: '',
    isOpen: true,
    readedInfo:['0'],
    openModal: (params) => {
        set({ title: params.title, content: params.content, image1: params.image1, link: params.link, isOpen: true });
    },
    closeModal: () => set({ isOpen: false }),
    setCurrentId: (id: string, isActiveId: boolean) => set({ currentId: id, isActiveId: isActiveId }),

    setReadedInfo: (updater) => {
        set((state) => ({
          readedInfo: typeof updater === "function" ? (updater as (prev: string[]) => string[])(state.readedInfo) : updater,
        }));
      },

    setCurrentSlide: (id: number) => set({ currentSlide: id }),
    setIsActiveId: (isActiveId: boolean) => set({ isActiveId: isActiveId }),
    setShowQuestion: (showQuestion: boolean) => set({ showQuestion: showQuestion }),
    setSlideChange: (isChangedSlide: boolean) => set({ isChangedSlide: isChangedSlide }),
    setIsImgActive: (isImgActive: boolean) => set({ isImgActive: isImgActive }),

}));
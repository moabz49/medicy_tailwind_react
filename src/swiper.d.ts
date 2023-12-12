declare module 'swiper/*';
declare module 'swiper/core' {
    import SwiperClass from 'swiper/types/swiper-class';
  
    export interface Autoplay {
      start(): void;
      stop(): void;
    }
  
    export interface Pagination {
      el: HTMLElement;
      // Add any specific typings for pagination if needed
    }
  
    export interface Navigation {
      nextEl: HTMLElement;
      prevEl: HTMLElement;
      // Add any specific typings for navigation if needed
    }
  
    export interface SwiperOptions {
      autoplay?: Autoplay;
      pagination?: Pagination;
      navigation?: Navigation;
      // Add other Swiper options you're using
    }
  
    export default class Swiper extends SwiperClass {
      constructor(container: string | HTMLElement, options?: SwiperOptions);
    }
  }
  
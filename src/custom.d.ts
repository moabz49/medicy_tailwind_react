declare module "*.svg" {
  const content: any;
  export default content;
}

  declare module "*.png" {
    const value: any;
    export default value;
  }

declare module 'swiper/*';

export interface AboutArray {
  number: number;
  text: string;
}

export interface ContactArray {
    head: string;
    info: string;
    extra: string;
    icon: React.ReactNode;
}

export interface Option {
  title: string
  icon: React.ReactNode;
}

interface DoctorData {
  id: number;
  fullName: string;
  job: string;
  location: string;
  image: string;
}
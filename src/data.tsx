import { BiBuildingHouse } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { TbHeartPlus } from "react-icons/tb";
import { LiaUserNurseSolid } from "react-icons/lia";
import { GiStethoscope } from "react-icons/gi";
import { TbSearch } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";
import doctorThree from './images/doctorThree.png'

import { AboutArray } from './custom'
import { ContactArray } from './custom'
import { Option } from './custom'
import { DoctorData } from "./custom";



export const linksArray = [
    {
        name: "Home",
        id: "home",
        offsetBg: 0,
        offsetSm: 0,
    },
    {
        name: "About",
        id: "about",
        offsetBg: 0,
        offsetSm: 0,
    },
    {
        name: "Services",
        id: "services",
        offsetBg: 20,
        offsetSm: 100,
    },
    {
        name: "Process",
        id: "process",
        offsetBg: -100,
        offsetSm: -100,
    },
    {
        name: "Teams",
        id: "teams",
        offsetBg: -40,
        offsetSm: -40,
    },
    {
        name: "Contact",
        id: "contact",
        offsetBg: -40,
        offsetSm: -40,
    },
]as const;

export const aboutArray: AboutArray[]= [
  {
    number: 3500,
    text: 'Happy Customers'
  },
  {
    number: 541,
    text: 'Project Done '
  },
  {
    number: 40,
    text: 'Awards Win'
  },
  {
    number: 678,
    text: 'Clients Work '
  },
]


export const contactArray:ContactArray[] = [
  { 
      head: 'Our Address',
      info: 'PSD Building, 2 Tower St, Florida',
      extra: 'United States.',
      icon: <BiBuildingHouse />
  },
  { 
      head: 'Our Phone',
      info: 'Telephone: 0029129102320',
      extra: 'Mobile: 000 2324 39493',
      icon: <LuPhoneCall />
  },
  { 
      head: 'Our Email',
      info: 'Main Email: example@example.com',
      extra: 'Inquiries: example@example.com',
      icon: <MdOutlineAttachEmail/>

  }
]

export const optionsArray: Option[] = [
  {   
      title: 'Therapiya',
      icon: <GiStethoscope /> ,
  },
  {   
      title: 'Dentistry',
      icon: <LiaUserNurseSolid /> ,
  },
  {   
      title: 'Virusology',
      icon: <TbHeartPlus />, 
  },
  {   
      title: 'Pharmacology',
      icon: <LiaNotesMedicalSolid />,
  },
]


export const doctorAppointmentProcess = [
  {
    title: 'Search Best Online Professionals',
    description: 'Explore online platforms or doctor directories to find and select the best professionals suited to your needs.',
    icon: <TbSearch /> ,
    label: 'step one'
  },
  {
    title: 'Get Instant Appointments',
    description: 'Book an appointment instantly through the chosen platform or directly with the selected professional.',
    icon: <LuCalendarClock /> ,
    label: 'step two'

  },
  {
    title: 'Leave Your Feedback',
    description: 'After the appointment, provide feedback to help others and improve the healthcare experience.',
    icon: <VscFeedback />,
    label: 'step three'

  }
]as const;


export const servicesArray = [
  {
    title: 'Therapiya',
    description: 'Offering comprehensive therapy services to aid various physical and mental conditions.',
    img: doctorThree
  },
  {
    title: 'Dentistry',
    description: 'Providing professional and personalized dental care for patients of all ages.',
    img: doctorThree
  },
  {
    title: 'Virusology',
    description: 'Conducting cutting-edge research and developing advanced treatments for viral infections.',
    img: doctorThree
  },
]as const;

export const servicesImageArray = [ doctorThree, doctorThree ,doctorThree, doctorThree];

export const doctorArray:DoctorData[] = [
  {
    id: 1,
    fullName: 'Alice Chan',
    job: 'Obstetrics & Gynecology',
    location: 'Hong Kong',
    image: doctorThree
  },
  {
    id: 2,
    fullName: 'Bob Lee',
    job: 'Obstetrics & Gynecology',
    location: 'Hong Kong',
    image: doctorThree

  },
  {
    id: 3,
    fullName: 'Cathy Wang',
    job: 'Obstetrics & Gynecology',
    location: 'Hong Kong',
    image: doctorThree
  },
  {
    id: 4,
    fullName: 'David Ng',
    job: 'Obstetrics & Gynecology',
    location: 'Hong Kong',
    image: doctorThree
  },
  {
    id: 5,
    fullName: 'Eva Wong',
    job: 'Obstetrics & Gynecology',
    location: 'Hong Kong',
    image: doctorThree
  },
  {
    id: 6,
    fullName: 'Frank Lin',
    job: 'Obstetrics & Gynecology',
    location: 'Hong Kong',
    image: doctorThree
  },
  {
    id: 7,
    fullName: 'Grace Chen',
    job: 'Obstetrics & Gynecology',
    location: 'Hong Kong',
    image: doctorThree
  },
  {
    id: 8,
    fullName: 'Henry Wu',
    job: 'Obstetrics & Gynecology',
    location: 'Hong Kong',
    image: doctorThree

  },
];


export const referralTitle = "What our Clients are saying?";
export const referralSubtitle = "Client Testimonials and Reviews";

export const aboutTitle = "About us"
export const aboutSubtitle = "Learn about our mission and vision in the healthcare industry."

export const referralArray = [
  {
    name: "Dr. Sarah Johnson",
    review: "⋆⋆⋆⋆⋆",
    comment: "Exceptional medical care provided by the dedicated team. The doctors are highly knowledgeable and truly care about their patients' well-being. I was thoroughly impressed with the level of expertise."
  },
  {
    name: "John Smith, MD",
    review: "⋆⋆⋆⋆⋆",
    comment: "As a fellow healthcare professional, I can attest to the remarkable skills of the medical staff. They maintain the highest standards of patient care and safety. My experience here has been outstanding."
  },
  {
    name: "Emily Mitchell, RN",
    review: "⋆⋆⋆⋆⋆",
    comment: "The doctors' dedication to their patients is commendable. The quality of healthcare services provided here is exemplary. I have complete confidence in recommending this facility."
  },
  {
    name: "Dr. Michael Turner",
    review: "⋆⋆⋆⋆⋆",
    comment: "I am thoroughly impressed with the competence and professionalism of the medical team. The care I received was top-notch, and I felt genuinely cared for during my entire visit."
  },
  {
    name: "Sophia Clark",
    review: "⋆⋆⋆⋆⋆",
    comment: "The doctors and staff here are exceptional. Their commitment to excellence is evident in the quality of care provided. I would highly recommend their services."
  },
  {
    name: "Dr. David Walker",
    review: "⋆⋆⋆⋆⋆",
    comment: "I was highly satisfied with the medical attention I received. The doctors' expertise and patient-centered approach make this facility stand out in the healthcare industry."
  },
  {
    name: "Olivia Harrison",
    review: "⋆⋆⋆⋆⋆",
    comment: "The doctors' commitment to patient well-being is truly commendable. The level of care and expertise I experienced here was impressive, and I would trust them with my health anytime."
  },
  {
    name: "Dr. Jessica White",
    review: "⋆⋆⋆⋆⋆",
    comment: "I was delighted with the exceptional medical care provided here. The doctors' knowledge and compassionate approach set a high standard for healthcare. I am grateful for their services."
  },
  {
    name: "Mark Anderson",
    review: "⋆⋆⋆⋆⋆",
    comment: "I had a fantastic experience with the medical team. The doctors' professionalism and expertise are unparalleled. This is the place to go for quality healthcare."
  },
  {
    name: "Dr. Laura Williams",
    review: "⋆⋆⋆⋆⋆",
    comment: "The doctors' commitment to patient satisfaction is truly remarkable. I am thoroughly impressed with the level of care and attention I received. Highly recommended."
  }
]as const;



export const footerLinksColumnOne = [
  {
    title: "Support",
    links: ["About Us", "Careers", "Blog"],
  },
  {
    title: "Useful Links",
    links: ["Payment & Tax", "Terms of service", "Privacy Policy"],
  },
]as const;

export const footerLinksColumnTwo = [
  {
    title: "Our Menu",
    links: ["Best Product", "Categories"],
  },
  {
    title: "Address",
    links: [
      "JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia",
      "hallo@daunku.com",
    ],
  },
]as const;
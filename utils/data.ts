
import { StaticImageData } from "next/image";
import { nanoid } from "nanoid";
import pimage1 from "../public/images/properties-1.png";
import pimage2 from "../public/images/properties-2.png";
import pimage3 from "../public/images/properties-3.png";
import pimage4 from "../public/images/properties-4.png";
import pimage5 from "../public/images/properties-5.png";
import pimage6 from "../public/images/properties-6.png";
import pimage7 from "../public/images/properties-7.png";
import pimage8 from "../public/images/properties-8.png";
import pimage9 from "../public/images/properties-9.png";
import pimage10 from "../public/images/properties-10.png";
import pimage11 from "../public/images/properties-11.png";
import pimage12 from "../public/images/properties-12.png";
import pimage13 from "../public/images/properties-13.png";
import timage1 from '../public/images/Profile-1.png';
import timage2 from '../public/images/Profile-2.png';
import timage3 from '../public/images/Profile-3.png';



interface NavbarItem {
  id: number;
  name: string;
  href: string;
}

export const navbarItems: NavbarItem[] = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "About Us",
    href: "/about",
  },

  {
    id: 2,
    name: "Properties",
    href: "/properties",
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
  },
];

export interface PorpertiesCardItem {
  id: string;
  image: StaticImageData;
  title: string;
  desc: string;
  icon_1_desc: string;
  icon_2_desc: string;
  icon_3_desc: string;
  price: string;
}

export const PorpertiesCardItem: PorpertiesCardItem[] = [
  {
    id: nanoid(),
    image: pimage1,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",

  },
  {
    id: nanoid(),
    image: pimage2,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ",
    icon_1_desc: "2-Bedroom",
    icon_2_desc: "2-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage3,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community... ",
    icon_1_desc: "3-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage4,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage5,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ",
    icon_1_desc: "2-Bedroom",
    icon_2_desc: "2-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage6,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community... ",
    icon_1_desc: "3-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage7,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage8,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ",
    icon_1_desc: "2-Bedroom",
    icon_2_desc: "2-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage9,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community... ",
    icon_1_desc: "3-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage10,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage11,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ",
    icon_1_desc: "2-Bedroom",
    icon_2_desc: "2-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage12,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community... ",
    icon_1_desc: "3-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: nanoid(),
    image: pimage13,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  
];


interface TestimonialItem {
  id: string;
  image: StaticImageData;
  name: string;
  title: string;
  desc: string;
  location: string;
}

export const TestimonialCardData: TestimonialItem[] = [
  {
    id: nanoid(),
    image: timage1,
    name: "John Doe",
    title: "Happy Customer",
    desc: "I love this property! It exceeded my expectations. The location is perfect, and the amenities are top-notch. I highly recommend it to anyone looking for a new home.",
    location: "New York, USA",
  },
  {
    id: nanoid(),
    image: timage2,
    name: " Michael Johnson",
    title: "Satisfied Client",
    desc: "The team at Estatein was exceptional. They found us the perfect property within our budget. The entire process was smooth, and we couldn't be happier with our new home.",
    location: "Los Angeles, USA",
  },
  {
    id: nanoid(),
    image: timage3, 
    name: "Jane Smith",
    title: "Delighted Buyer",
    desc: "Estatein exceeded our expectations. The property we found is beautiful, and the team was very accommodating. We are extremely satisfied with our purchase.",
    location: "Chicago, USA",
  },
  
]

interface FAQItem  {
  id: string;
  question: string;
  answer: string;
}

export const FAQData: FAQItem[] = [
  {
    id: nanoid(),
    question: "How do I search for properties?",
    answer: "To search for properties, simply visit our website and use the search bar.",
  },
  {
    id: nanoid(), 
    question: "How do I contact you?",
    answer: "You can contact us by phone, email, or through our website's contact form. Our team is available to assist you 24/7.",
  },
  {
    id: nanoid(),
    question: "How do I schedule a viewing?",
    answer: "Once you have found a property you are interested in, you can schedule a viewing by contacting us. ",
  },
  {
    id: nanoid(),
    question: "How do I make an offer?",
    answer: "When you are ready to make an offer on a property, our team will guide you through the process. ",
  },
  {
    id: nanoid(),
    question: "What happens after I make an offer?",
    answer: "After you make an offer, the property owner will review it. If they accept your offer, we will help you with the next steps, such as arranging inspections and financing.",
  },
  {
    id: nanoid(),
    question: "What if I have more questions?",
    answer: "If you have any questions or need further assistance, please don't hesitate to contact us.",
  },
]
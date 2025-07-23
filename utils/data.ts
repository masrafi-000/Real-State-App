
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
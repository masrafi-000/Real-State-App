import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { StaticImageData } from "next/image";
import { nanoid } from "nanoid";
import pimage1 from "../public/images/properties-1.png";
import pimage2 from "../public/images/properties-2.png";
import pimage3 from "../public/images/properties-3.png";
import React from "react";

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
  }
];
import { nanoid } from "nanoid";
import { StaticImageData } from "next/image";
import timage1 from "../public/images/Profile-1.png";
import timage2 from "../public/images/Profile-2.png";
import timage3 from "../public/images/Profile-3.png";
import pimage1 from "../public/images/properties-1.png";
import pimage10 from "../public/images/properties-10.png";
import pimage11 from "../public/images/properties-11.png";
import pimage12 from "../public/images/properties-12.png";
import pimage13 from "../public/images/properties-13.png";
import pimage2 from "../public/images/properties-2.png";
import pimage3 from "../public/images/properties-3.png";
import pimage4 from "../public/images/properties-4.png";
import pimage5 from "../public/images/properties-5.png";
import pimage6 from "../public/images/properties-6.png";
import pimage7 from "../public/images/properties-7.png";
import pimage8 from "../public/images/properties-8.png";
import pimage9 from "../public/images/properties-9.png";

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
];

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQData: FAQItem[] = [
  {
    id: nanoid(),
    question: "How do I search for properties?",
    answer:
      "To search for properties, simply visit our website and use the search bar.",
  },
  {
    id: nanoid(),
    question: "How do I contact you?",
    answer:
      "You can contact us by phone, email, or through our website's contact form. Our team is available to assist you 24/7.",
  },
  {
    id: nanoid(),
    question: "How do I schedule a viewing?",
    answer:
      "Once you have found a property you are interested in, you can schedule a viewing by contacting us. ",
  },
  {
    id: nanoid(),
    question: "How do I make an offer?",
    answer:
      "When you are ready to make an offer on a property, our team will guide you through the process. ",
  },
  {
    id: nanoid(),
    question: "What happens after I make an offer?",
    answer:
      "After you make an offer, the property owner will review it. If they accept your offer, we will help you with the next steps, such as arranging inspections and financing.",
  },
  {
    id: nanoid(),
    question: "What if I have more questions?",
    answer:
      "If you have any questions or need further assistance, please don't hesitate to contact us.",
  },
];

interface AchievementData {
  id: string;
  title: string;
  description: string;
}

export const AchievementsData: AchievementData[] = [
  {
    id: nanoid(),
    title: "3+ Years of Excellence",
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    id: nanoid(),
    title: "200+ Happy Customers",
    description:
      "Our commitment to excellence has resulted in over 200 satisfied customers who trust us with their real estate needs.",
  },
  {
    id: nanoid(),
    title: "10k+ Properties For Clients",
    description:
      "We have successfully listed and managed over 10,000 properties, providing our clients with a diverse range of options.",
  },
];

interface ExperienceCardData {
  index: string;
  id: string;
  title: string;
  description: string;
}

export const ExperienceCardData: ExperienceCardData[] = [
  {
    id: nanoid(),
    index: "01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    id: nanoid(),
    index: "02",
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    id: nanoid(),
    index: "03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    id: nanoid(),
    index: "04",
    title: "See It for Yourself",
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    id: nanoid(),
    index: "05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    id: nanoid(),
    index: "06",
    title: "Getting the Best Deal",
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

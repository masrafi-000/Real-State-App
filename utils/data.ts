import { nanoid } from "nanoid";
import { StaticImageData } from "next/image";
import { ComponentType } from "react";
import { AiFillPieChart } from "react-icons/ai";
import { BsFillBarChartFill, BsFire, BsStars } from "react-icons/bs";
import { FaBullhorn, FaTags } from "react-icons/fa6";
import { HiCircleStack, HiLightBulb } from "react-icons/hi2";
import { MdDashboardCustomize, MdSunny } from "react-icons/md";
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
import timgae1 from "../public/images/team-1.png";
import timgae2 from "../public/images/team-2.png";
import timgae3 from "../public/images/team-3.png";
import timgae4 from "../public/images/team-4.png";

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
    id: "01",
    image: pimage1,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "01",
    image: pimage2,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ",
    icon_1_desc: "2-Bedroom",
    icon_2_desc: "2-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "03",
    image: pimage3,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community... ",
    icon_1_desc: "3-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "04",
    image: pimage4,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "05",
    image: pimage5,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ",
    icon_1_desc: "2-Bedroom",
    icon_2_desc: "2-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "06",
    image: pimage6,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community... ",
    icon_1_desc: "3-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "07",
    image: pimage7,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "08",
    image: pimage8,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ",
    icon_1_desc: "2-Bedroom",
    icon_2_desc: "2-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "09",
    image: pimage9,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community... ",
    icon_1_desc: "3-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "10",
    image: pimage10,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "11",
    image: pimage11,
    title: "Metropolitan Haven",
    desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...  ",
    icon_1_desc: "2-Bedroom",
    icon_2_desc: "2-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "12",
    image: pimage12,
    title: "Rustic Retreat Cottage",
    desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community... ",
    icon_1_desc: "3-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
  {
    id: "13",
    image: pimage13,
    title: "Seaside Serenity Villa",
    desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... ",
    icon_1_desc: "4-Bedroom",
    icon_2_desc: "3-Bathroom",
    icon_3_desc: "Villa",
    price: "$550,000",
  },
];

export function getPropertyById(id: string) {
  for (const item of PorpertiesCardItem) {
    if (id === item.id) {
      return item;
    }
  }
}

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

interface TeamMemberData {
  id: string;
  image: StaticImageData;
  name: string;
  title: string;
}

export const TeamMemberData: TeamMemberData[] = [
  {
    id: nanoid(),
    image: timgae1,
    name: "Max Mitchell",
    title: "Founder",
  },
  {
    id: nanoid(),
    image: timgae2,
    name: "Sarah Johnson",
    title: "Chief Real Estate Officer",
  },
  {
    id: nanoid(),
    image: timgae3,
    name: "David Brown",
    title: "Head of Property Management",
  },
  {
    id: nanoid(),
    image: timgae4,
    name: "Michael Turner",
    title: "Legal Counsel",
  },
];

export interface PropertiesValueCardData<T> {
  id: string;
  icon: ComponentType<T>;
  title: string;
  desc: string;
}

export const PropertiesValueCardData: PropertiesValueCardData<
  React.ComponentProps<"svg">
>[] = [
  {
    id: nanoid(),
    icon: BsFillBarChartFill,

    title: " Valuation Mastery",
    desc: "Discover the true worth of your property with our expert valuation services.",
  },
  {
    id: nanoid(),
    icon: AiFillPieChart,

    title: "Strategic Marketing",
    desc: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
  },
  {
    id: nanoid(),
    icon: HiCircleStack,

    title: "Negotiation Wizardry",
    desc: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
  },
  {
    id: nanoid(),
    icon: FaBullhorn,
    title: "Closing Success",
    desc: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
  },
];

export const PropertyManagementCardData: PropertiesValueCardData<
  React.ComponentProps<"svg">
>[] = [
  {
    id: nanoid(),
    icon: MdDashboardCustomize,
    title: " Tenant Harmony",
    desc: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
  },
  {
    id: nanoid(),
    icon: FaTags,
    title: " Maintenance Ease",
    desc: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
  },
  {
    id: nanoid(),
    icon: BsStars,
    title: " Financial Peace of Mind",
    desc: "Managing property finances can be complex. Our financial experts take care of rent collection",
  },
  {
    id: nanoid(),
    icon: MdSunny,
    title: " Legal Guardian",
    desc: "Stay compliant with property laws and regulations effortlessly.",
  },
];

export const DecisionsCardData: PropertiesValueCardData<
  React.ComponentProps<"svg">
>[] = [
  {
    id: nanoid(),
    icon: BsFillBarChartFill,
    title: " Market Insight",
    desc: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
  },
  {
    id: nanoid(),
    icon: BsFire,
    title: "ROI Assessment",
    desc: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
  },
  {
    id: nanoid(),
    icon: HiLightBulb,
    title: "Customized Strategies",
    desc: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
  },
  {
    id: nanoid(),
    icon: MdSunny,
    title: "Diversification Mastery",
    desc: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
  },
];

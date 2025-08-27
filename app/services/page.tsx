import HeroCard from "@/components/shared/Home/Hero/HeroCard";
import Decisions from "@/components/shared/Services/Decisions/Decisions";
import PropertyManagement from "@/components/shared/Services/Management/PropertyManagement";
import PropertiesValue from "@/components/shared/Services/PropertiesValue/PropertiesValue";
import SerLanding from "@/components/shared/Services/SerLanding/SerLanding";

const Service = () => {
  return (
    <div className="bg-[var(--color-gray_08)]">
      <SerLanding />
      <HeroCard className="flex bg-[var(--color-gray_08)] flex-wrap gap-6 items-center justify-center p-[20px] border-2 border-[var(--color-gray_15)]  shadow-2xl hover:shadow transition-all duration-300 " />
      <PropertiesValue />
      <PropertyManagement />
      <Decisions />
    </div>
  );
};

export default Service;

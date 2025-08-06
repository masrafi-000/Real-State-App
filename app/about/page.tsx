import Achivement from "@/Components/About/Achivement/Achivement";
import Experience from "@/Components/About/Experience/Experience";
import OurJourney from "@/Components/About/Journey/OurJourney";
import OurValue from "@/Components/About/Value/OurValue";

const AboutUsPage = () => {
  return (
    <div className="bg-[var(--color-gray_08)] w-full h-auto ">
      <div className="container mx-auto ">
        <OurJourney />
        <OurValue />
        <Achivement />
        <Experience />
      </div>
    </div>
  );
};

export default AboutUsPage;

import OurJourney from "@/Components/About/Journey/OurJourney";
import OurValue from "@/Components/About/Value/OurValue";

const AboutUsPage = () => {
  return (
    <div className="bg-[var(--color-gray_08)] w-full h-auto ">
      <div className="container mx-auto ">
        <OurJourney />
        <OurValue />
      </div>
    </div>
  );
};

export default AboutUsPage;

import Achivement from "@/Components/About/Achivement/Achivement";
import Client from "@/Components/About/Client/Client";
import Experience from "@/Components/About/Experience/Experience";
import OurJourney from "@/Components/About/Journey/OurJourney";
import Team from "@/Components/About/Team/Team";
import OurValue from "@/Components/About/Value/OurValue";

const AboutUsPage = () => {
  return (
    <div className="bg-[var(--color-gray_08)] w-full h-auto ">
      <div className="container mx-auto ">
        <OurJourney />
        <OurValue />
        <Achivement />
        <Experience />
        <Team />
        <Client slides={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]} options={{ loop: false }}  />
      </div>
    </div>
  );
};

export default AboutUsPage;

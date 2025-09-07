import AllProperties from "@/components/shared/Properties/AllProperties";
import MakeInput from "@/components/shared/Properties/MakeInput";
import PropertiesAllSearch from "@/components/shared/Properties/PropertiesAllSearch";
import SerLanding from "@/components/shared/Services/SerLanding";

const Properties = () => {
  return (
    <main className="bg-[var(--color-gray_08)] w-full ">
      <SerLanding />
      <PropertiesAllSearch />
      <AllProperties />
      <MakeInput />
    </main>
  );
};

export default Properties;

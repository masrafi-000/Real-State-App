import AllProperties from "@/components/shared/Properties/AllProperties";
import PropertiesAllSearch from "@/components/shared/Properties/PropertiesAllSearch";
import SerLanding from "@/components/shared/Services/SerLanding/SerLanding";

const Properties = () => {
  return (
    <main className="bg-[var(--color-gray_08)] w-full ">
      <SerLanding />
      <PropertiesAllSearch />
      <AllProperties />
    </main>
  );
};

export default Properties;

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PorpertiesCardItem } from "@/utils/data";

const PropertiesAllSearch = () => {
  const length = PorpertiesCardItem.length;

  return (
    <section className="container mx-auto py-8 text-white absolute transform -translate-y-1/3 left-1/2 -translate-x-1/2">
      <div className="w-full flex flex-col gap-6 items-center justify-center bg-[var(--color-gray_10)] p-6 rounded-2xl">
        <div className="w-[70%] border border-[var(--color-gray_15)] h-16 relative rounded-xl shadow-2xl">
          <input
            className="w-full h-full px-6 outline-none text-xl font-normal placeholder:text-white "
            type="text"
            placeholder="Search properties..."
          />
          <button className="h-12 w-34 text-base text-center bg-[var(--color-purple_60)] rounded-xl hover:bg-purple-600 transition-all duration-300 cursor-pointer absolute right-2 top-1.5  shadow-2xl ">
            Find Properties
          </button>
        </div>
        <div className="w-[90%] flex items-center justify-between flex-wrap gap-2 ">
          <Select>
            <SelectTrigger className="w-[250px] min-h-[60px] bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] shadow-md   ">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--color-gray_15)] text-[var(--color-gray_60)] font-medium border border-[var(--color-gray_20)] shadow-2xl ">
              <SelectGroup>
                <SelectLabel className="text-lg text-white font-normal leading-1.5 pt-2 mb-2">
                  Locations
                </SelectLabel>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                <SelectItem value="Florida">Florida</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[250px] min-h-[60px] bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] shadow-md   ">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--color-gray_15)] text-[var(--color-gray_60)] font-medium border border-[var(--color-gray_20)] shadow-2xl ">
              <SelectGroup>
                <SelectLabel className="text-lg text-white font-normal leading-1.5 pt-2 mb-2">
                  Property Type
                </SelectLabel>
                <SelectItem value="House">House</SelectItem>
                <SelectItem value="Apartment">Apartment</SelectItem>
                <SelectItem value="Condo">Condo</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[250px] min-h-[60px] bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] shadow-md   ">
              <SelectValue placeholder="Pricing Range" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--color-gray_15)] text-[var(--color-gray_60)] font-medium border border-[var(--color-gray_20)] shadow-2xl ">
              <SelectGroup>
                <SelectLabel className="text-lg text-white font-normal leading-1.5 pt-2 mb-2">
                  Pricing Range
                </SelectLabel>
                <SelectItem value="Under $100k">Under $100k</SelectItem>
                <SelectItem value="$100k - $300k">$100k - $300k</SelectItem>
                <SelectItem value="$300k - $500k">$300k - $500k</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[250px] min-h-[60px] bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] shadow-md   ">
              <SelectValue placeholder="Property Size" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--color-gray_15)] text-[var(--color-gray_60)] font-medium border border-[var(--color-gray_20)] shadow-2xl ">
              <SelectGroup>
                <SelectLabel className="text-lg text-white font-normal leading-1.5 pt-2 mb-2">
                  Property Size
                </SelectLabel>
                <SelectItem value="Small">Small</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Large">Large</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[250px] min-h-[60px] bg-[var(--color-gray_10)] border border-[var(--color-gray_15)] shadow-md   ">
              <SelectValue placeholder="Build Year" />
            </SelectTrigger>
            <SelectContent className="bg-[var(--color-gray_15)] text-[var(--color-gray_60)] font-medium border border-[var(--color-gray_20)] shadow-2xl ">
              <SelectGroup>
                <SelectLabel className="text-lg text-white font-normal leading-1.5 pt-2 mb-2">
                  Build Year
                </SelectLabel>
                <SelectItem value="2020">2020</SelectItem>
                <SelectItem value="2019">2019</SelectItem>
                <SelectItem value="2018">2018 </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex items-center justify-between">
            <button className="py-3 px-5 bg-[var(--color-gray_20)] text-[var(--color-gray_60)] text-lg font-medium tracking-wide rounded-xl cursor-pointer hover:bg-gray-700">
              Clear Filters
            </button>
            <p className="text-[var(--color-gray_60)] text-xl">All Available Properties: {length }</p>
        </div>
      </div>
    </section>
  );
};

export default PropertiesAllSearch;

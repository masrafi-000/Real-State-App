import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PropertiesAllSearch = () => {
  return (
    <section className="container mx-auto py-8 text-white">
      <div className="w-full flex flex-col gap-3 items-center justify-center">
        <div className="w-[70%] border border-[var(--color-gray_15)] h-16 relative rounded-xl shadow-2xl">
          <input
            className="w-full h-full px-6 outline-none text-xl font-normal "
            type="text"
            placeholder="Search properties..."
          />
          <button className="h-12 w-34 text-base text-center bg-[var(--color-purple_60)] rounded-xl hover:bg-purple-600 transition-all duration-300 cursor-pointer absolute right-2 top-1.5  shadow-2xl ">
            Find Properties
          </button>
        </div>
        <div className="w-[90%] flex items-center justify-between flex-wrap gap-2 ">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Theme</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Theme</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Theme</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Theme</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default PropertiesAllSearch;

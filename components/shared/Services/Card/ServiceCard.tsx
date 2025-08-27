import { ComponentType } from "react";

interface PropertyCardProps {
  icon: ComponentType<React.ComponentProps<"svg">>; // The component (like an icon)
  iconProps?: React.ComponentProps<"svg">; // The props to pass to that icon
  title: string;
  desc: string;
}

const ServiceCard: React.FC<PropertyCardProps> = ({
  icon: Icon,
  title,
  desc,
}) => {
  return (
    <div className="w-[512px] p-[50px] border border-[var(--color-gray_15)] rounded-xl flex flex-col items-start justify-between gap-5 ">
      <div className="flex items-center justify-center gap-6">
        <div className="size-[82px] border border-[var(--color-purple_60)] rounded-full flex items-center justify-center">
          <div className="size-[62px] border border-[var(--color-purple_60)]/90 rounded-full flex items-center justify-center ">
            <Icon className="size-[24px] text-purple-400 " />
          </div>
        </div>
        <h2 className="text-2xl font-medium leading-[150%] ">{title}</h2>
      </div>
      <p className="text-lg font-normal leading-[150%] text-[var(--color-gray_60)] ">
        {desc}
      </p>
    </div>
  );
};

export default ServiceCard;

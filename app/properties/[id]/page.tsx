"use client"
import { getPropertyById } from "@/utils/data";
import Image from "next/image";
import { notFound } from "next/navigation";

const PropertyDetails = ({ params }: { params: { id: string } }) => {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  return (
    <div className="bg-[var(--color-gray_08)] text-white ">
      <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1">
            <Image
              src={property.image}
              alt={property.title}
              width={500}
              height={300}
            />
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

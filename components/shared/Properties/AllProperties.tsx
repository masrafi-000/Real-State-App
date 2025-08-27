"use client"
import { PorpertiesCardItem } from "@/utils/data";
import FeaturedCard from "../Home/FeaturedProperties/FeaturedCard";
import React from "react";

const AllProperties = () => {
  const [product, setProduct] = React.useState(PorpertiesCardItem);
  const [currentPage, setCurrentPage] = React.useState(1);

  const productPerPage = 6;

  const totalPages = Math.ceil(product.length / productPerPage);
  const setIndex = (currentPage - 1) * productPerPage;
  const currentProduct = product.slice(setIndex, setIndex + productPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="container mx-auto mt-52 text-white">
      <div className="grid grid-cols-3 space-x-2 space-y-4">
        {currentProduct.map((item) => (
          <FeaturedCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 bg-pink-800 rounded-lg ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-pink-600/20"
            }`}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-3 bg-pink-800 rounded-lg flex items-center justify-between gap-2 w-fit ${
                currentPage === page
                  ? "bg-primary text-white"
                  : "hover:bg-purple-900/10"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 bg-purple-600 rounded-lg  ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-purple-900/10"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default AllProperties;

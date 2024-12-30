import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardSlider = ({ title, cards = [] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const displayedCards = cards.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-6 px-4 w-full">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-200">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedCards.map((card) => (
          <Link
            key={card.id}
            to={`/product/${card.id}`}
            className="bg-[#111215] rounded-lg shadow-md p-3 hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 text-right flex"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-20 h-20 object-cover rounded-md mb-3"
            />
            <div className="w-2/3 pl-3">
              <h3 className="text-md font-bold mb-2 text-[#fff]">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{card.description}</p>
              <div className="mt-1 text-yellow-400">
                امتیاز: {card.rating?.rate || "نامشخص"} (
                {card.rating?.count || 0} نظر)
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => handlePageChange(pageIndex)}
            className={`w-4 h-4 rounded-full ${
              currentPage === pageIndex
                ? "bg-blue-500"
                : "bg-gray-500 hover:bg-gray-700"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default CardSlider;

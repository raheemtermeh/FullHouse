import React, { useState } from "react";




//باکس کوچیکا
const CardSlider = ({ title, cards }) => {
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
    <section className="py-10 px-4 w-full">
      <h2 className="text-3xl font-bold mb-6 text-right text-gray-200">
        {title}
      </h2>
      <h2 className="text-lg font-bold mb-6 text-left text-[#0051ff]">
        مشاهده همه
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {displayedCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#111215] rounded-lg shadow-lg p-4 hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 text-right flex"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-1/3 h-24 object-cover rounded-md mb-3"
            />
            <div className="w-2/3 pl-4">
              <h3 className="text-lg text-left font-bold mb-2 text-[#fff]">
                {card.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{card.description}</p>
              <p className="text-gray-400 text-sm mb-1">
                پلتفرم: {card.platform}
              </p>
              <p className="text-gray-400 text-sm mb-1">توسط: {card.company}</p>

              <div className="mt-1 text-yellow-400">امتیاز: {card.rating}</div>
            </div>
          </div>
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

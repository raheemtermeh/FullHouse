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
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">
        {title}
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

// const CardSlider = ({ title, cards }) => {
//   return (
//     <section className="py-8 px-4">
//       <h2 className="text-2xl font-bold mb-6 text-right text-gray-200">
//         {title}
//       </h2>
//       <div className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-lg shadow-lg p-4 hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 text-right"
//             style={{ maxWidth: "280px" }}
//           >
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-32 object-cover rounded-md mb-3"
//             />
//             <h3 className="text-lg font-bold mb-2 text-orange-400">
//               {card.title}
//             </h3>
//             <p className="text-gray-400 text-xs mb-3">{card.description}</p>
//             <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full inline-block mb-2">
//               {card.badge}
//             </span>
//             <div className="text-gray-400 text-xs mb-2">
//               پلتفرم: {card.platform}
//             </div>
//             <div className="mt-2 text-yellow-400 text-sm">
//               امتیاز: {card.rating}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

import React, { useState, useEffect } from "react";

const Section = ({ title, apiEndpoint }) => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 4;

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const response = await fetch(apiEndpoint);

        // Check if the response is ok (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if the content type is JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Expected JSON response but received something else");
        }

        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
        setError("مشکلی در بارگذاری داده‌ها به وجود آمد.");
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, [apiEndpoint]);

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
      <h2 className="text-2xl font-bold mb-4 text-right text-gray-200">
        {title}
      </h2>
      <h2 className="text-md font-bold mb-4 text-left text-[#0051ff]">
        مشاهده همه
      </h2>
      {loading ? (
        <p className="text-center text-gray-400">در حال بارگذاری...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayedCards.map((card, index) => (
            <div
              key={index}
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
                <p className="text-gray-400 text-sm mb-1">
                  پلتفرم: {card.platform}
                </p>
                <p className="text-gray-400 text-sm mb-1">
                  توسط: {card.company}
                </p>
                <div className="mt-1 text-yellow-400">
                  {/* Correcting rendering of rating */}
                  امتیاز: {card.rating?.rate}{" "}
                  {card.rating?.count && (
                    <span> (تعداد: {card.rating.count})</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
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

export default Section;

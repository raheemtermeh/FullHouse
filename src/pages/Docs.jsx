import React from "react";

const Docs = ({ docs }) => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-right text-gray-200">
        مستندات
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs.map((doc, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 text-right"
          >
            <img
              src={doc.image}
              alt={doc.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-orange-400">
              {doc.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{doc.description}</p>
            <span className="text-sm bg-orange-500 text-white px-3 py-1 rounded-full inline-block mb-4">
              {doc.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Docs;

import React, { use } from "react";

const Books = ({ getDataPromise }) => {
  const books = use(getDataPromise);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-4xl font-bold text-center text-[#131313] mb-10">
        Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.bookId}
            className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
          >
            <div className="bg-[#F3F3F3] rounded-2xl flex justify-center items-center py-8 mb-6 h-[230px]">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex gap-3 mb-4">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex-grow space-y-3 mb-5">
              <h2 className="text-2xl font-bold text-[#131313] line-clamp-1">
                {book.bookName}
              </h2>
              <p className="text-[#131313CC] font-medium text-base">
                By : {book.author}
              </p>
            </div>

            <div className="border-t border-dashed border-gray-300 my-4"></div>

            <div className="flex justify-between items-center text-[#131313CC] font-medium">
              <span>{book.category}</span>
              <div className="flex items-center gap-2 text-lg">
                <span>{book.rating}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.133 9.21l8.2-1.192L12 .587z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

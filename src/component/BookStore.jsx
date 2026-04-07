import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookStore = ({ book }) => {

  return (
    <Link to={`/book/${book.bookId}`}>
      <div className="p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col">
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

            <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookStore;

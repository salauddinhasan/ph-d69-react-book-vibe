import React, { use } from "react";
import BookStore from "./BookStore";

const Books = ({ getDataPromise }) => {
  const books = use(getDataPromise);
  console.log(books);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <h2 className="text-4xl font-bold text-center text-[#131313] mb-10">
        Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, bookId) => (
          <div key={bookId}>
            <BookStore book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

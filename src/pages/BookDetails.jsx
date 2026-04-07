import React, { use } from "react";
import { useParams } from "react-router";

const getDataPromise = (async () => {
  const res = await fetch("/data.json");
  return res.json();
})();
 
const BookDetails = () => {
  const { bookId } = useParams();

  const data = use(getDataPromise);

  const book = data.find((b) => b.bookId === parseInt(bookId));

  if (!book)
    return <p className="text-center py-20 text-red-500">Book not found!</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="bg-[#F3F3F3] rounded-2xl p-12 flex justify-center items-center h-[500px]">
          <img
            src={book.image}
            alt={book.bookName}
            className="h-full object-contain shadow-2xl rounded-lg"
          />
        </div>

        {/* Info Section */}
        <div className="space-y-5">
          <h2 className="text-5xl font-bold text-[#131313]">{book.bookName}</h2>
          <p className="text-xl font-medium text-[#131313CC] border-b pb-4">
            By : {book.author}
          </p>
          <p className="text-xl font-medium text-[#131313CC] border-b py-2">
            {book.category}
          </p>
          <p className="text-[#131313B3] leading-relaxed">
            <span className="font-bold text-black">Review : </span>
            {book.review}
          </p>

          <div className="flex gap-4 items-center border-b pb-6">
            <span className="font-bold">Tag</span>
            {book.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-bold"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-3">
            <button className="px-10 py-4 border border-[#1313134D] rounded-lg font-bold hover:bg-gray-100 transition">
              Read
            </button>
            <button className="px-10 py-4 bg-[#50B1C9] text-white rounded-lg font-bold hover:bg-[#3e9cb4] transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

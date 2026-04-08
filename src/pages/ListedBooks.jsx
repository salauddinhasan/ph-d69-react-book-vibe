import React, { useEffect, useState } from "react";
import { getStoredReadList, getStoredWishList, removeFromStoredReadList , removeFromStoredWishList} from "../utils/addToDb";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi2";
import { FaFileInvoice } from "react-icons/fa";
import { Link } from "react-router";  
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  const [activeTab, setActiveTab] = useState("read");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const storedReadIds = getStoredReadList();
        const storedWishIds = getStoredWishList();

        const readBooks = data.filter((book) =>
          storedReadIds.includes(book.bookId),
        );
        const wishBooks = data.filter((book) =>
          storedWishIds.includes(book.bookId),
        );

        setReadList(readBooks);
        setWishList(wishBooks);
        setDisplayBooks(readBooks);
      });
  }, []);

  const handleFilter = (type) => {
    setActiveTab(type);
    if (type === "read") {
      setDisplayBooks(readList);
    } else {
      setDisplayBooks(wishList);
    }
  };

  const handleSort = (sortBy) => {
    let sortedBooks = [...displayBooks];
    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    setDisplayBooks(sortedBooks);
  };

const handleDelete = (id) => {
    // ১. দুই লিস্ট থেকেই ডিলিট করার ফাংশন কল করছি (নিশ্চিত হওয়ার জন্য)
    removeFromStoredReadList(id);
    removeFromStoredWishList(id);

    // ২. বর্তমান স্ক্রিন (UI) থেকে ফিল্টার করে সরিয়ে দিচ্ছি
    const remainingBooks = displayBooks.filter((book) => book.bookId !== id);
    setDisplayBooks(remainingBooks);

    // ৩. টোস্ট মেসেজ
    toast.error("Book removed from list!");
};
  

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center bg-[#1313130D] py-8 rounded-2xl my-8 text-[#131313]">
        Listed Books
      </h2>

      <div className="flex justify-center my-8">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#23BE0A] text-white font-bold px-8"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => handleSort("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("pages")}>Number of Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("year")}>Publishing Year</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Tabs / Filter Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => handleFilter("read")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === "read"
              ? "bg-[#23BE0A] text-white" // একটিভ থাকলে সবুজ
              : "bg-gray-200 text-gray-700 hover:bg-gray-300" // ইন-একটিভ থাকলে গ্রে
          }`}
        >
          Read Books
        </button>

        <button
          onClick={() => handleFilter("wishlist")}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === "wishlist"
              ? "bg-[#50B1C9] text-white" // একটিভ থাকলে নীল
              : "bg-gray-200 text-gray-700 hover:bg-gray-300" // ইন-একটিভ থাকলে গ্রে
          }`}
        >
          Wishlist Books
        </button>
      </div>

      {/* Books List Container */}
      <div className="space-y-6">
        {displayBooks.map((book) => (
          <div
            key={book.bookId}
            className="flex flex-col md:flex-row gap-8 p-6 border border-[#13131326] rounded-2xl"
          >
            {/* Image Container */}
            <div className="bg-[#F3F3F3] p-8 rounded-xl w-full md:w-60 flex justify-center items-center">
              <img
                src={book.image}
                alt={book.bookName}
                className="h-44 object-contain shadow-sm"
              />
            </div>

            {/* Content Container */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#131313] mb-2">
                {book.bookName}
              </h3>
              <p className="font-medium text-[#131313CC] mb-4">
                By: {book.author}
              </p>

              {/* Tags & Publishing Info */}
              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[#131313]">Tag</span>
                  {book.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[#131313CC]">
                  <CiLocationOn className="text-xl" />
                  <span>Year of Publishing: {book.yearOfPublishing}</span>
                </div>
              </div>

              {/* Publisher & Pages Info */}
              <div className="flex flex-wrap gap-6 text-[#13131399] border-b border-[#13131326] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <HiOutlineUser className="text-xl" />
                  <span>Publisher: {book.publisher}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFileInvoice className="text-xl text-lg" />
                  <span>Page {book.totalPages}</span>
                </div>
              </div>

              {/* Footer Badges & Button */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="bg-[#328EFF26] text-[#328EFF] px-5 py-2 rounded-full text-sm font-medium">
                  Category: {book.category}
                </span>
                <span className="bg-[#FFAC3326] text-[#FFAC33] px-5 py-2 rounded-full text-sm font-medium">
                  Rating: {book.rating}
                </span>
                <Link to={`/book/${book.bookId}`}>
                  <button className="bg-[#23BE0A] text-white px-5 py-2 rounded-full font-medium hover:bg-[#1fa308] transition-colors">
                    View Details
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(book.bookId)}
                  className="px-3 py-2 rounded-full font-medium     hover:bg-red-100 transition-colors"
                >
                  <AiTwotoneDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* If no books found */}
        {displayBooks.length === 0 && (
          <p className="text-center text-xl text-gray-500 py-20 border-2 border-dashed rounded-2xl">
            No books found in this list.
          </p>
        )}
      </div>
    </div>
  );
};

export default ListedBooks;

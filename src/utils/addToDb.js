import { toast } from "react-toastify";

// Local Storage থেকে ডাটা চেক করা
const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    return JSON.parse(storedListStr);
  }
  return [];
};

// নতুন বই Read List এ যোগ করা
const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    toast.warn("This book is already in your Read List!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
    toast.success("Book added to Read List!");
  }
};

// ১. Wishlist এর ডাটা পড়ার জন্য
const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    return JSON.parse(storedWishListStr);
  }
  return [];
};

// ২. Wishlist এ যোগ করার জন্য
const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  const storedReadList = getStoredReadList(); // Read List টাও চেক করছি

  if (storedReadList.includes(id)) {
    toast.error("Already Read! Can't add to wishlist.");
  } else if (storedWishList.includes(id)) {
    toast.info("This book is already in your wishlist.");
  } else {
    storedWishList.push(id);
    localStorage.setItem("wish-list", JSON.stringify(storedWishList));
    toast.success("Added to Wishlist!");
  }
};

// read-list থেকে ডিলিট করা
const removeFromStoredReadList = (id) => {
    const storedList = getStoredReadList();
    const remaining = storedList.filter(bookId => bookId !== id);
    localStorage.setItem('read-list', JSON.stringify(remaining));
}

const removeFromStoredWishList = (id) => {
    const storedList = getStoredWishList();
    const remaining = storedList.filter(bookId => bookId !== id);
    localStorage.setItem('wish-list', JSON.stringify(remaining));
}


export {
  addToStoredReadList,
  getStoredReadList,
  addToStoredWishList,
  getStoredWishList,
  removeFromStoredReadList,
  removeFromStoredWishList
};




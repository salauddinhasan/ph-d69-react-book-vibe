import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import ListedBooks from "./pages/ListedBooks";
import PagesToRead from "./pages/PagesToRead";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="listedBooks" element={<ListedBooks />} />
        <Route path="pagesToRead" element={<PagesToRead />} />


        <Route path="book/:bookId" 
         element={
          <Suspense fallback={<p>Loading Book Details</p>}>
            <BookDetails/>
          </Suspense>
         }
        />
      </Route>

      
    </Routes>

    <ToastContainer/>
    </>
  );
};

export default App;

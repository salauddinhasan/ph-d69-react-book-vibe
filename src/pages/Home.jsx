import React, { Suspense } from "react";
import Banner from "../component/Banner";
import Books from "../component/Books";

const getData = async () => {
  const res = await fetch("/data.json");
   return res.json();
};

const Home = () => {
  const getDataPromise = getData();
  return (
    <div>
      <Banner />
      <Suspense fallback={<p>salauddin...</p>}>
        <Books getDataPromise={getDataPromise} />
      </Suspense>
    </div>
  );
};

export default Home;

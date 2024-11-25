import React from "react";
import Loader from "./Loader";
import {
  useGetAllCryptoNewsQuery,
  useGetTopCryptoNewsQuery,
} from "../services/cryptoNewsApi";
import NewsCard from "./NewsCard";

const News = ({ count = 100 }) => {
  const { data, isFetching } = useGetAllCryptoNewsQuery();
  // const { data, isFetching } = useGetTopCryptoNewsQuery();

  if (isFetching)
    return (
      <>
        {" "}
        <Loader />
      </>
    );
  console.log(data);
  return (
    <div
      className={`${count == 10 ? "p-4" : "mt-[100px] p-4 lg:ml-[300px] lg:mt-0"}`}
    >
      <h1 className="text-xl font-semibold lg:text-5xl">Top News</h1>
      <section className="mt-[10px] grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3">
        {count > 10 &&
          data?.coincu?.map((element) => <NewsCard element={element} />)}

        {count == 10 &&
          data?.coincu
            ?.slice(0, 10)
            .map((element) => <NewsCard element={element} />)}
      </section>
    </div>
  );
};

export default News;

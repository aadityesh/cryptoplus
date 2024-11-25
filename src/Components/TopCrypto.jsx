import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CryptoCard from "./CryptoCard";

const TopCrypto = ({ count }) => {
  const { data, isFetching } = useGetCryptosQuery(count);
  if (isFetching) return <>Loading</>;
  const coins = data?.data?.coins;
  console.log(coins);

  return (
    <>
      <section
        className={`${count == 12 ? "mt-[40px]" : "mt-[20px] p-4"} flex flex-col pb-4`}
      >
        <section className="max-w-[100%] rounded-md p-2 text-xl font-semibold lg:max-w-[25%] lg:text-3xl">
          <p>Top {count} Cryptos</p>
        </section>
        <section className="mt-[15px] grid flex-1 grid-cols-1 grid-rows-1 gap-4 pr-[20px] md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-3">
          {coins?.map((coin) => (
            <CryptoCard coin={coin} />
          ))}
        </section>
      </section>
    </>
  );
};

export default TopCrypto;

import React from "react";
import { useGetGlobalStatsQuery } from "../services/cryptoApi";

const GlobalStats = () => {
  const { data, isFetching } = useGetGlobalStatsQuery();
  console.log(data);

  //    referenceCurrencyRate: 1;
  //    total24hVolume: "203954885757";
  //    totalCoins: 45686;
  //    totalExchanges: 188;
  //    totalMarketCap: "3495835788667";
  //    totalMarkets: 48559;

  return (
    <>
      <section className="flex max-w-[100%] flex-col gap-2 lg:flex-row lg:items-center lg:justify-around">
        <section className="flex flex-col text-xl lg:pr-[20px] lg:text-5xl">
          <h1 className="font-bold">Welcome to Crypto+</h1>
          <p className="text-blue-600 lg:text-2xl">
            A digital platform that fulfills <br /> all of your crypto needs.
          </p>
        </section>
        <section className="flex max-w-[375px] flex-col gap-4 rounded-md bg-blue-600 p-4 lg:max-w-[800px]">
          <p className="text-2xl font-semibold lg:text-4xl">
            Global Statistics
          </p>
          <section className="grid grid-cols-2 grid-rows-2 gap-4">
            <section>
              <p className="text-[22px] font-medium lg:text-[26px]">
                Total Market Cap
              </p>
              <p className="text-[20px]">
                {"$"}
                {(data?.data?.totalMarketCap / 1e12).toFixed(2)}T
              </p>
            </section>
            <section>
              <p className="text-[22px] font-medium lg:text-[26px]">
                Total Cryptocurrencies
              </p>
              <p className="text-[20px]">{data?.data?.totalCoins}</p>
            </section>
            <section>
              <p className="text-[22px] font-medium lg:text-[26px]">
                Total 24Hr Volume
              </p>
              <p className="text-[20px]">
                ${(data?.data?.total24hVolume / 1e9).toFixed(2)}B
              </p>
            </section>
            <section>
              <p className="text-[22px] font-medium lg:text-[26px]">
                Total Markets
              </p>
              <p className="text-[20px]">{data?.data?.totalMarkets}</p>
            </section>
            <section>
              <p className="text-[22px] font-medium lg:text-[26px]">
                Total Exchanges
              </p>
              <p className="text-[20px]">{data?.data?.totalExchanges}</p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default GlobalStats;

import React, { useEffect, useState } from "react";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import CryptoOverview from "./CryptoOverview";
import CryptoOtherDetails from "./CryptoOtherDetails";
import CryptoDetailsChart from "./CryptoDetailsChart";
import CrytoDesc from "./CrytoDesc";

const CryptoDetails = ({ setSelectedPage }) => {
  const { id } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(id);

  useEffect(() => {
    setSelectedPage("Cryptocurrencies");
  }, []);

  if (isFetching) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const coin = data.data.coin;
  // console.log(data);
  // console.log(coin);

  return (
    <>
      <section className="mt-[100px] p-4 pt-[25px] lg:ml-[300px] lg:mt-0 lg:min-w-[1200px]">
        <section className="flex items-center justify-between rounded-md p-2">
          <section className="flex flex-col gap-1 pl-2">
            <p className="text-2xl font-semibold lg:text-5xl">{coin?.name}</p>
            <p className="text-xl">Symbol: {coin?.symbol}</p>
          </section>
          <img
            className="h-[50px] w-[50px] rounded-md md:h-[80px] md:w-[80px]"
            src={`${coin?.iconUrl}`}
            alt="coin_img"
          />
        </section>

        <section className="grid grid-cols-1 gap-4 pt-[50px] md:grid-cols-2">
          <CrytoDesc coin={coin} />
          <CryptoOtherDetails coin={coin} />
          <CryptoOverview coin={coin} />
        </section>
        <section className="pt-[25px]">
          <CryptoDetailsChart id={id} name={coin.name} />
        </section>
      </section>
    </>
  );
};

export default CryptoDetails;

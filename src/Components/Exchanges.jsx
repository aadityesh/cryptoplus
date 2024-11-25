import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";

const Exchanges = () => {
  const exchanges = [
    {
      slug: "binance",
      name: "Binance",
      type: "CEX",
      website: "https://www.binance.com",
      src: "/binance.svg",
    },
    {
      slug: "kucoin",
      name: "Kucoin",
      type: "CEX",
      website: "https://www.kucoin.com",
      src: "/kucoin.svg",
    },
    {
      slug: "mexc",
      name: "MEXC",
      type: "CEX",
      website: "https://www.mexc.com",
      src: "/mexc.jpeg",
    },
    {
      slug: "okx",
      name: "OKX",
      type: "CEX",
      website: "https://www.okx.com",
      src: "/okx.png",
    },
    {
      slug: "bitmart",
      name: "BitMart",
      type: "CEX",
      website: "https://www.bitmart.com",
      src: "/bitmart.jpeg",
    },
    {
      slug: "gate",
      name: "Gate",
      type: "CEX",
      website: "https://www.gate.io",
      src: "/gate_logo.png",
    },
    {
      slug: "aevo",
      name: "Aevo",
      type: "DEX",
      website: "https://www.aevo.xyz",
      src: "/aevo.png",
    },
  ];

  return (
    <div className="mt-[80px] p-2 lg:ml-[300px] lg:mt-2">
      <h1 className="text-2xl font-semibold lg:text-5xl">Exchanges</h1>
      <section className="grid grid-cols-1 grid-rows-1 gap-2 pt-[30px] md:grid-cols-2 md:grid-rows-2 md:gap-5">
        {exchanges.map((exchange) => (
          <ExchangeCard exchange={exchange} />
        ))}
      </section>
    </div>
  );
};

export default Exchanges;

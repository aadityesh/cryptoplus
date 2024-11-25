import React from "react";
import { Link } from "react-router-dom";

const CryptoCard = ({ coin }) => {
  const price = coin.price;
  return (
    <>
      <Link to={`/crypto/${coin.uuid}`}>
        <section className="flex max-h-[400px] max-w-[500px] flex-col rounded-md bg-blue-600 p-2">
          <section className="flex items-center justify-between">
            <p className="text-xl font-medium">
              {coin?.rank}
              {". "}
              {coin?.name}
            </p>
            <img
              className="h-[30px] w-[30px]"
              src={`${coin?.iconUrl}`}
              alt="coin_img"
            />
          </section>
          <section className="flex flex-col pt-4">
            <p>Symbol: {coin?.symbol}</p>
            <p>Rank: {coin?.rank}</p>
            <p>Tier: {coin?.tier}</p>
            <p>Price: {Number(price).toFixed(2)}$</p>
          </section>
        </section>
      </Link>
    </>
  );
};

export default CryptoCard;

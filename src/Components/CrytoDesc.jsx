import React from "react";

const CrytoDesc = ({ coin }) => {
  const url = coin?.links.filter((obj) => obj.type == "website");
  return (
    <>
      <section className="flex flex-col rounded-md bg-blue-600 p-2 lg:text-xl">
        <p className="font-bold lg:text-3xl">What is {coin.name}?</p>
        <section className="pt-[10px]">
          <p className="text-justify">{coin.description}</p>
          <p className="text-justify">
            Take a bird's eye view of {coin.name} and then decide whether to
            invest or not
          </p>
          {/* <p className="text-justify">
            Investing in cryptocurrencies involves significant risk and may not
            be suitable for all investors. Please conduct thorough research
            before making any investment decisions. This information is not
            financial advice.
          </p> */}
          <p className="text-justify">
            To know more, please visit:{" "}
            <a href={`${url[0].url}`} target="_blank">
              {url[0].url}{" "}
            </a>
          </p>
        </section>
      </section>
    </>
  );
};

export default CrytoDesc;

import React from "react";

const ExchangeCard = ({ exchange }) => {
  // slug: "gate",
  //   name: "Gate",
  //   type: "CEX",
  //   website: "https://www.gate.io",
  //   src: "/gate_logo.png",

  return (
    <a
      className="h-[100px] w-[200px] rounded-lg bg-blue-600 p-2 lg:h-[120px] lg:w-[400px]"
      href={exchange.website}
      target="_blank"
    >
      <section className="flex flex-col">
        <section className="flex items-center justify-between">
          <section>
            <p className="text-xl lg:text-2xl">{exchange.name}</p>
            <p>{exchange.type}</p>
          </section>
          <img
            className="h-[30px] w-[30px] rounded-lg lg:h-[50px] lg:w-[50px]"
            src={exchange.src}
            alt={exchange.name}
          />
        </section>
        <section className="pt-[20px]">
          <p className="text-[10px]">{exchange.website}</p>
        </section>
      </section>
    </a>
  );
};

export default ExchangeCard;

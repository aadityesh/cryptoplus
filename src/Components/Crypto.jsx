import React from "react";
import Loader from "./Loader";
import TopCrypto from "./TopCrypto";

const Crypto = () => {
  return (
    <div className="mt-[80px] p-2 lg:ml-[300px] lg:mt-0">
      <TopCrypto count={100} />
    </div>
  );
};

export default Crypto;

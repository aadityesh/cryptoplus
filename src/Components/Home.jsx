import React from "react";
import Loader from "./Loader";
import {
  useGetCryptosQuery,
  useGetGlobalStatsQuery,
} from "../services/cryptoApi";
import GlobalStats from "./GlobalStats";
import TopCrypto from "./TopCrypto";
import News from "./News";

const Home = () => {
  return (
    <>
      <div className="mt-[100px] flex flex-col overflow-x-hidden pl-3 pt-[20px] lg:ml-[300px] lg:mt-0">
        {/* <Loader /> */}
        <GlobalStats />
        <TopCrypto count={10} />
        <News count={10} />
      </div>
    </>
  );
};

export default Home;

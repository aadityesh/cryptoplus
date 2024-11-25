import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import TagIcon from "@mui/icons-material/Tag";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import StoreIcon from "@mui/icons-material/Store";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { ConnectWithoutContact } from "@mui/icons-material";
import millify from "millify";

/*
Number Of Markets
2601
Number Of Exchanges
107
Aprooved Supply icon
Total Supply
$ 19.8M
Circulating Supply
$ 19.8M
*/
const CryptoOverview = ({ coin }) => {
  return (
    <>
      <div className="flex flex-col rounded-md bg-blue-600 p-2 md:col-span-2 md:text-2xl">
        <h3 className="text-2xl font-medium lg:text-4xl">Overview</h3>
        <section className="flex flex-col gap-2 pt-[10px] md:text-xl">
          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <TagIcon />
              </p>
              <p>Rank:</p>
            </section>
            <p>{coin?.rank}</p>
          </section>
          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <AttachMoneyIcon />
              </p>
              <p>Price:</p>
            </section>
            <p>${millify(Number(coin?.price), { precision: 2 })}</p>
          </section>

          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <EqualizerIcon />
              </p>
              <p>24Hr Volume: </p>
            </section>
            <p>${millify(Number(coin["24hVolume"]), { precision: 2 })}</p>
          </section>

          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <StoreIcon />
              </p>
              <p>Market Cap</p>
            </section>
            <p>${millify(Number(coin.marketCap), { precision: 2 })}</p>
          </section>
          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <TrendingUpIcon />
              </p>
              <p>All Time High (Daily Avg.): </p>
            </section>
            <p>
              ${millify(Number(coin?.allTimeHigh?.price), { precision: 2 })}
            </p>
          </section>
        </section>
      </div>
    </>
  );
};

export default CryptoOverview;

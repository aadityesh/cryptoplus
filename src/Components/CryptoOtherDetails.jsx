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
import TaskIcon from "@mui/icons-material/Task";
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
const CryptoOtherDetails = ({ coin }) => {
  return (
    <>
      <div className="flex flex-col rounded-md bg-blue-600 p-2">
        <h3 className="text-2xl font-medium md:text-3xl">Statistics</h3>
        <section className="flex flex-col gap-2 md:pt-[15px] md:text-xl">
          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <TagIcon />
              </p>
              <p>Number of Exchanges:</p>
            </section>
            <p>{coin?.numberOfExchanges}</p>
          </section>
          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <TagIcon />
              </p>
              <p>Number of Markets:</p>
            </section>
            <p>{coin?.numberOfMarkets}</p>
          </section>

          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <TaskIcon />
              </p>
              <p>Approved Supply: </p>
            </section>
            <p>{coin?.supply?.confirmed == true ? "Yes" : "No"}</p>
          </section>
          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <TrendingUpIcon />
              </p>
              <p>Circulating Supply</p>
            </section>
            <p>
              ${millify(Number(coin?.supply?.circulating), { precision: 2 })}
            </p>
          </section>
          <section className="flex items-center justify-between gap-2">
            <section className="flex items-center gap-2">
              <p>
                <StoreIcon />
              </p>
              <p>Total Supply</p>
            </section>
            <p>${millify(Number(coin?.supply?.total), { precision: 2 })}</p>
          </section>
        </section>
      </div>
    </>
  );
};

export default CryptoOtherDetails;

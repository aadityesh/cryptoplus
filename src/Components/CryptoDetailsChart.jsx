import React, { useState } from "react";
import { useGetCryptoHistoryQuery } from "../services/cryptoApi";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { LineChart } from "@mui/x-charts";
import { DateTime } from "luxon";
import Loader from "./Loader";

const CryptoDetailsChart = ({ id, name }) => {
  const [timePeriod, setTimePeriod] = useState("7d");
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];
  const { data, isFetching } = useGetCryptoHistoryQuery({ id, timePeriod });

  if (isFetching) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const history = data?.data?.history;
  const prices = [];
  const timeStamps = [];
  for (let i = 0; i < history.length; i += 1) {
    prices.push(history[i].price);
    timeStamps.push(new Date(history[i].timestamp * 1000).toLocaleDateString());
  }

  // console.log(data);
  // console.log(timePeriod);
  // console.log(history);
  // console.log(prices);
  // console.log(timeStamps);
  const chartData = {
    labels: timeStamps,
    datasets: [
      {
        label: "Prices in $",
        data: prices,
        backgroundColor: "#fff",
        borderColor: "#fff",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#fff",
      },
    ],
  };
  // options.plugins.legend.labels;
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#fff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
        },
      },
      y: {
        ticks: {
          color: "#fff",
        },
      },
    },
  };
  return (
    <>
      <section className="mt-[20px] min-w-[100%] rounded-md">
        <p className="max-w-[400px] text-xl font-bold capitalize md:text-3xl">
          {name} Price Chart
        </p>
        <section className="mt-[20px] flex items-center justify-end gap-2 rounded-md p-2">
          <p className="text-white">Time Period: </p>
          <select
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            className="rounded-md p-1 text-[20px] text-black outline-none lg:min-w-[150px]"
          >
            {time.map((period) => (
              <option
                key={`${period}`}
                className="hover:bg-blue-600"
                value={`${period}`}
              >
                {period}
              </option>
            ))}
          </select>
        </section>
        <section className="h-[200px] w-full overflow-x-auto md:h-[400px] lg:h-[650px]">
          <Line data={chartData} options={options} />
        </section>
      </section>
    </>
  );
};

export default CryptoDetailsChart;

import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const navbarItems = [
    {
      item: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      item: "Cryptocurrencies",
      icon: <MonetizationOnIcon />,
      path: "/crypto",
    },
    {
      item: "Exchanges",
      icon: <AssuredWorkloadIcon />,
      path: "/exchanges",
    },
    {
      item: "News",
      icon: <NewspaperIcon />,
      path: "/news",
    },
  ];

  return (
    <>
      <div className="fixed left-0 top-0 z-[10] flex w-[100%] items-center gap-2 bg-[#14171a] p-2 text-xl shadow-md lg:min-h-[100vh] lg:w-[300px] lg:flex-col lg:gap-10 lg:border-r-[4px] lg:border-slate-400 lg:pl-[20px] lg:text-2xl">
        <section className="hidden min-w-[50px] gap-2 lg:flex lg:min-w-[100px] lg:items-center lg:justify-center lg:gap-4 lg:pt-[30px]">
          <img
            className="h-[30px] w-[30px] lg:h-[60px] lg:w-[60px]"
            src="/logo.svg"
            alt=""
          />
          <h1 className="ml-1 hidden font-bold text-blue-600 lg:block lg:text-2xl">
            Crypto+
          </h1>
        </section>
        <section className="flex min-w-[100%] flex-1 justify-around gap-4 overflow-x-auto pr-2 text-[14px] md:text-xl lg:flex-col lg:justify-normal lg:gap-10 lg:overflow-hidden lg:pt-[30px] lg:text-[18px]">
          {navbarItems.map((nav) => (
            <>
              <Link to={`${nav.path}`}>
                <section
                  onClick={() => setSelectedPage(`${nav.item}`)}
                  className={`flex items-center gap-2 rounded-md p-2 hover:bg-blue-600 ${nav.item == selectedPage ? "bg-blue-600 font-semibold" : ""}`}
                >
                  <p className="text-center">{nav.icon}</p>
                  <p className="text-center">{nav.item}</p>
                </section>
              </Link>
            </>
          ))}
        </section>
      </div>
    </>
  );
};

export default Navbar;

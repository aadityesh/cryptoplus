import React from "react";
import he from "he";
const NewsCard = ({ element }) => {
  // const coincu = data?.coincu;
  // console.log(coincu);
  // let element;
  // if (coincu.length > 0) {
  //   element = coincu[4];
  //   console.log(element);
  // }
  return (
    <>
      <a
        className="flex w-[270px] flex-col items-center justify-center rounded-md bg-blue-600 p-2 lg:w-[350px]"
        href={`${element?.url}`}
        target="_blank"
      >
        <section className="flex flex-col items-center justify-center rounded-md lg:w-[350px]">
          <section>
            <img
              className="w-[250px] rounded-md lg:h-[200px] lg:min-h-[100px] lg:w-[320px]"
              src={`${element?.thumbnail}`}
              alt="news_thumbnail"
              lazyloading
            />
          </section>
          <section className="flex max-h-[200px] max-w-[320px] flex-col items-center justify-center rounded-md p-2">
            <p className="text-[12px] font-semibold lg:text-[16px]">
              {element?.title}
            </p>
            {/* <p className="text-[14px]">
            {he.decode(element?.description.slice(0, 130))}
          </p> */}
          </section>
        </section>
      </a>
    </>
  );
};

export default NewsCard;

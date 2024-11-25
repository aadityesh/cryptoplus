import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="flex min-h-[100%] min-w-[100%] flex-col items-center justify-center">
        <h1 className="text-xl lg:text-3xl">
          Taking time ? - Monthly Quota Exceeded
        </h1>
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          strokeColor="blue"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </>
  );
};

export default Loader;

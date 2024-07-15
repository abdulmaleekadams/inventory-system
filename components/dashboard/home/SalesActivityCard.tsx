import React from "react";

const SalesActivityCard = ({
  title,
  unit,
  icon,
  total,
  textColor,
}: {
  title: string;
  unit: string;
  icon: JSX.Element;
  total: number;
  textColor: string;
}) => {
  return (
    <div
      className={`rounded-lg shadow bg-white border border-slate-400 transition-all duration-300 hover:border-blue-600 px-6 pt-8 pb-4 h-36 w-44 md:w-40 cursor-pointer flex items-center justify-between flex-col gap-y-1`}
    >
      <p
        className={`text-4xl flex flex-col justify-center items-center font-semibold ${textColor}`}
      >
        {total}
        <span className="text-slate-400 text-sm ">{unit}</span>
      </p>
      <div className="flex gap-x-2 items-center">
        {icon}
        <span className="uppercase text-sm whitespace-nowrap md:text-xs">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SalesActivityCard;

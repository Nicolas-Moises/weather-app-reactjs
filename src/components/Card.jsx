import React from "react";
import propTypes from "prop-types";

function Card({ data }) {
  const { location, current } = data;
  return (
    <div className="bg-white p-9 mt-10 rounded-3xl hover:shadow-md shadow-sm min-w-[220px] min-h-[300px]">
      <div className="text-center">
        <span className="block text-2xl font-bold text-slate-700">
          {location.name}
        </span>
        <span className="text-slate-400 text-sm font-medium">{`${location.region}, ${location.country}`}</span>
      </div>
      <div className="font-bold text-slate-700 justify-center flex mt-4 mb-2">
        <span className="text-7xl">{current.temp_c}</span>
        <span className="text-2xl mt-2">°C</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={current.condition.icon} alt="" />
        <span className="text-slate-700 font-medium">
          {current.condition.text}
        </span>
      </div>
      <div className="text-center mt-3">
        <span className="text-slate-400 font-light mr-1">Humidity</span>
        <span className="text-slate-500 font-medium ">{`${current.humidity}%`}</span>
      </div>
    </div>
  );
}
export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;

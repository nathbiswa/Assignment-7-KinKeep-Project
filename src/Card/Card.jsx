import React from "react";
import { NavLink } from "react-router";

const Card = ({ item }) => {
  const { status, picture, name, days_since_contact } = item;

  return (
   
      <NavLink to={`/${item.id}`} className="card bg-base-100 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center space-y-3a">
          <h2 className="card-title">{name}</h2>
          <p className="text-sm text-gray-400">
            {days_since_contact}d <span>ago</span>
          </p>
          <div>
            {item.tags.map((tag, idex) => (
              <span
                key={idex}
                className="text-[12px] font-bold px-3 py-1 rounded-full bg-green-300 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            className={`text-[12px] py-2 px-4 rounded-full text-white ${status === "Almost Due" ? "bg-[#EFAD44]" : status === "Overdue" ? "bg-[#EF4444]" : status === "On Track" ? "bg-[#244D3F]" : ""}`}
          >
            {status}
          </div>
        </div>
      </NavLink>
   
  );
};

export default Card;

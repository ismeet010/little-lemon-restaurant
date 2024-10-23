import React from "react";
import type { FC } from "react";

interface IEntry {
  image: string;
  name: string;
  alt: string;
  quote: string;
  rating: number;
}

interface ITcard {
  entry: IEntry;
}

const Tcard: FC<ITcard> = ({ entry }) => {
  // const numToStarRating = (num) => {
  //   // return <i className="fab fa-facebook"></i>;

  //   const icon = '<i className="fab fa-facebook"></i>';
  //   var result = "";
  //   for (let i = 0; i < num; i++) {
  //     result = result + icon;
  //   }
  //   var htmlObject = document.createElement("div");
  //   htmlObject.innerHTML = "";
  //   return htmlObject;
  // };
  return (
    <div className="card">
      <img src={entry.image} alt={entry.alt} />
      <h4>{entry.name}</h4>
      <span>
        {/* {entry.rating.map((e) => (
          <i className="fab fa-facebook"></i>
        ))} */}
      </span>
      <q>{entry.quote}</q>
    </div>
  );
};

export { Tcard };

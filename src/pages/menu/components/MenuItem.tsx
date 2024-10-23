import React, { FC } from "react";

interface IData {
  name: string;
  price: string;
  desc: string;
}

interface IMenuItem {
  data: IData;
}

const MenuItem: FC<IMenuItem> = ({ data }) => {
  return (
    <div className="flex-column menu-width margin-bottom">
      <div className="flex-row space-between bottomborder">
        <h2>{data.name}</h2>
        <span>{data.price}</span>
      </div>
      <p>{data.desc}</p>
    </div>
  );
};

export default MenuItem;

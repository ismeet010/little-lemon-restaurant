import React from "react";
import {
  MenuItemContainer,
  MenuItemName,
  MenuItemDesc,
  MenuItemPrice,
} from "./menu-item.styles";

interface MenuItemProps {
  data: {
    name: string;
    price: string;
    desc: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ data }) => {
  const { name, price, desc } = data;

  return (
    <MenuItemContainer>
      <div>
        <MenuItemName variant="subtitle1">{name}</MenuItemName>
        <MenuItemDesc variant="body2">{desc}</MenuItemDesc>
      </div>
      <MenuItemPrice variant="body1">{price}</MenuItemPrice>
    </MenuItemContainer>
  );
};

export { MenuItem };

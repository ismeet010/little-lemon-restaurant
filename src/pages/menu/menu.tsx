import React from "react";
import { MenuItem } from "./components/menu-item";
import {
  MenuContainer,
  MenuSections,
  MenuCategory,
  MenuCategoryHeading,
} from "./menu.styles.ts";
import { MenuData } from "./defines/data.ts";
import { ComTitle } from "../../commons/style/style.ts";
import { ResMenuIcon } from "../../commons/icons/res-menu-icon.tsx";

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <ComTitle variant="h2">
        Our Menu <ResMenuIcon fill="#495e57" />{" "}
      </ComTitle>
      <MenuSections>
        {Object.entries(MenuData).map(([category, items]) => (
          <MenuCategory key={category}>
            <MenuCategoryHeading variant="h3">{category}</MenuCategoryHeading>
            {items.map((item) => (
              <MenuItem key={item.name} data={item} />
            ))}
          </MenuCategory>
        ))}
      </MenuSections>
    </MenuContainer>
  );
};

export { Menu };

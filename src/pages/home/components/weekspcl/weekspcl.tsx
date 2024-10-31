import React from "react";
import "./wspcl.css";
import { spcldata } from "../../defines/data";
import {
  WspContainer,
  MaxWidthContainer,
  ContainerHeader,
  ContainerBody,
} from "./weekspcl.styles";
import { Spclcard } from "./spclcard";

const Weekspcl = () => {
  return (
    <WspContainer>
      <MaxWidthContainer>
        <ContainerHeader>
          <h2>This week Specials!</h2>
          <button>Check menu</button>
        </ContainerHeader>
        <ContainerBody>
          {spcldata.map((entry) => (
            <Spclcard entry={entry} />
          ))}
        </ContainerBody>
      </MaxWidthContainer>
    </WspContainer>
  );
};

export { Weekspcl };

import React from "react";
import { specialData } from "../../defines/data";
import {
  WspContainer,
  MaxWidthContainer,
  ContainerHeader,
  ContainerBody,
  Heading,
} from "./weekspcl.styles";
import { SpecialCard } from "../special-card/special-card";
import { ComButton } from "../../../../commons/style/style";

const Weekspcl = () => {
  return (
    <WspContainer>
      <MaxWidthContainer>
        <ContainerHeader>
          <Heading>This week Specials!</Heading>
          <ComButton href="/little-lemon-restaurant/menu">Check menu</ComButton>
        </ContainerHeader>
        <ContainerBody>
          {specialData.map((entry) => (
            <SpecialCard entry={entry} />
          ))}
        </ContainerBody>
      </MaxWidthContainer>
    </WspContainer>
  );
};

export { Weekspcl };

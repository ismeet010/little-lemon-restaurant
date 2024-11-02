import React from "react";
import {
  HeroContainer,
  MaxWidthContainer,
  HeroContent,
  HeroHeading,
  HeroSubheading,
  HeroParagraph,
  HeroImage,
} from "./hero.styles";
import { useTranslation } from "react-i18next";
import { ComButton } from "../../../../commons/style/style";

const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <HeroContainer>
      <MaxWidthContainer>
        <HeroContent>
          <HeroHeading variant="h2">Little Lemon</HeroHeading>
          <HeroSubheading variant="h3">Chicago</HeroSubheading>
          <HeroParagraph variant="body1">{t("hero-paragraph")}</HeroParagraph>
          <ComButton
            variant="contained"
            href="/little-lemon-restaurant/reservation"
          >
            {t("reserve-a-table")}
          </ComButton>
        </HeroContent>
        <HeroImage
          src="https://littlelemon.alexismenest.vercel.app/static/media/restaurant-food.827fb0bfe6f625329f41.jpg"
          alt="little lemon"
        />
      </MaxWidthContainer>
    </HeroContainer>
  );
};

export { Hero };

import React from "react";
import {
  HeroContainer,
  MaxWidthContainer,
  HeroContent,
  HeroHeading,
  HeroSubheading,
  HeroParagraph,
  HeroButton,
  HeroImage,
} from "./hero.styles";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <HeroContainer>
      <MaxWidthContainer>
        <HeroContent>
          <HeroHeading variant="h2">Little Lemon</HeroHeading>
          <HeroSubheading variant="h3">Chicago</HeroSubheading>
          <HeroParagraph variant="body1">{t("hero-paragraph")}</HeroParagraph>
          <HeroButton variant="contained">{t("reserve-a-table")}</HeroButton>
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

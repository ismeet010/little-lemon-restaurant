import React from "react";
import type { FC } from "react";
import { Testimonial } from "./components/testimonial/testimonial";
import { Weekspcl } from "./components/weekspcl/weekspcl";
import { Hero } from "./components/hero/hero";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Weekspcl />
      <Testimonial />
    </>
  );
};

export { Home };

import React from "react";
import type { FC } from "react";
import { Testimonial } from "../testimonial/testimonial";
import { Weekspcl } from "../weekendSpecial/weekspcl";
import { Hero } from "../hero";

const Home: FC = () => {
  return (
    <>
      <main>
        <Hero />
        <Weekspcl />
        <Testimonial />
      </main>
    </>
  );
};

export { Home };

import React from "react";
import { TestimonialCard } from "../testimonial-card/testimonial-card";
import { testimonialData } from "../../defines/data";
import {
  TestimonialContainer,
  MaxWidthContainer,
  Heading,
  TestimonialContent,
} from "./testimonial.styles";

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <MaxWidthContainer>
        <Heading>What people say about us!</Heading>
        <TestimonialContent>
          {testimonialData.map((entry) => (
            <TestimonialCard entry={entry} />
          ))}
        </TestimonialContent>
      </MaxWidthContainer>
    </TestimonialContainer>
  );
};

export { Testimonial };

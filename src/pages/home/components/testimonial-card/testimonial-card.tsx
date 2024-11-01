import React from "react";
import type { FC } from "react";
import { Card, CardImage, CardHeading } from "./testimonial-card.styles";

interface IEntry {
  image: string;
  name: string;
  alt: string;
  quote: string;
  rating: number;
}

interface ITestimonialCard {
  entry: IEntry;
}

const TestimonialCard: FC<ITestimonialCard> = ({ entry }) => {
  // const numToStarRating = (num) => {
  //   // return <i className="fab fa-facebook"></i>;

  //   const icon = '<i className="fab fa-facebook"></i>';
  //   var result = "";
  //   for (let i = 0; i < num; i++) {
  //     result = result + icon;
  //   }
  //   var htmlObject = document.createElement("div");
  //   htmlObject.innerHTML = "";
  //   return htmlObject;
  // };
  return (
    <Card>
      <CardImage src={entry.image} alt={entry.alt} />
      <CardHeading>{entry.name}</CardHeading>
      <span>
        {/* {entry.rating.map((e) => (
          <i className="fab fa-facebook"></i>
        ))} */}
      </span>
      <q>{entry.quote}</q>
    </Card>
  );
};

export { TestimonialCard };

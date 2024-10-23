import React from "react";
import { Tcard } from "./tCard";
import "./testimonial.css";

const Testimonial = () => {
  const data = [
    {
      image:
        "https://hips.hearstapps.com/rover/profile_photos/67055711-c808-4a4d-811a-e7155a2bce10_1667409691.file",
      alt: "Maria Sanchez",
      name: "Maria Sanchez",
      rating: 3.5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://littlelemon.alexismenest.vercel.app/static/media/customer2.333854849cb34643a28e.jpg",
      alt: "Antony Clifton",
      name: "Antony Clifton",
      rating: 3.5,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://littlelemon.alexismenest.vercel.app/static/media/customer4.fa4be855aa1466a1fcb3.jpg",
      alt: "Brandon Ming",
      name: "Brandon Ming",
      rating: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      image:
        "https://littlelemon.alexismenest.vercel.app/static/media/customer3.ba5a7f9f30d58ab385d9.jpg",
      alt: "Tamika Jackson",
      name: "Tamika Jackson",
      rating: 3,
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <section className="testimonials gap">
      <div className="max-width">
        <h2 className="heading white-bold">What people say about us!</h2>
        <div className="cards">
          {data.map((entry) => (
            <Tcard entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial };

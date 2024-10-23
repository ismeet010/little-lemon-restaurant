import React from "react";
import { Spclcard } from "./spclcard";
import "./wspcl.css";

const Weekspcl = () => {
  const spcldata = [
    {
      imgsrc:
        "https://littlelemon.alexismenest.vercel.app/static/media/greek-salad.25fc793faeb3d58ed9fb.jpg",
      imgalt: "Greek Salad",
      name: "Greek Salad",
      price: "$15",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      imgsrc:
        "https://littlelemon.alexismenest.vercel.app/static/media/bruschetta.d54e450bda5efcf06010.jpg",
      imgalt: "Bruschetta",
      name: "Bruschetta",
      price: "$12",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      imgsrc:
        "https://littlelemon.alexismenest.vercel.app/static/media/lemon-dessert.a146cfc0ccf8ce82fae4.jpg",
      imgalt: "Lemon Dessert",
      name: "Lemon Dessert",
      price: "$14",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <section className="wsp">
      <div className="max-width">
        <div className="flex-row gap space-between">
          <h2>This week Specials!</h2>
          <button>Check menu</button>
        </div>
        <div className="wspcl">
          {spcldata.map((entry) => (
            <Spclcard entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Weekspcl };

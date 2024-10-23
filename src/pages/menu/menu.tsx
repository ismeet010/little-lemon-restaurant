import React from "react";
import MenuItem from "./components/MenuItem";
import "./menu.css";

const Menu = () => {
  const Tacos = [
    {
      name: "TACOS AL PASTOR",
      price: "$10",
      desc: "contains pork, pineapple, onion and cilantro",
    },
    {
      name: "TACOS DE PESCADO",
      price: "$10.5",
      desc: "contains fish, cabbage, avocado and sour cream ",
    },
    {
      name: "TACOS DE BIRRIA",
      price: "$11.5",
      desc: "contains goat meat, cheese, cilantro and onion",
    },
  ];

  const Burritos = [
    {
      name: "BURRITOS DE POLLO",
      price: "$9",
      desc: "contains shredded chicken, tomato sauce, salsa and cheese",
    },
    {
      name: "BURRITOS DE CARNE",
      price: "$14",
      desc: "containe beef, mexican rice, beans and cheddar cheese",
    },
    {
      name: "BURRITOS VEGANO",
      price: "$10",
      desc: "containe beans, vegan sour cream, guacamole and salsa",
    },
  ];
  return (
    <div className="flex-column menu-div">
      <h2 className="menu-heading">Menu</h2>
      <section className="flex-row menu">
        <div className="menu-col-1">
          <h3 className="menu-h3">Tacos</h3>
          {/* <MenuItem data={Tacos} /> */}
          {Tacos.map((data) => (
            <MenuItem data={data} />
          ))}
        </div>
        <div className="menu-col-2">
          <h3 className="menu-h3">Burritos</h3>
          {/* <MenuItem data={Burritos} /> */}
          {Burritos.map((data) => (
            <MenuItem data={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export { Menu };

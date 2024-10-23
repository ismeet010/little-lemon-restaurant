import React from "react";
import type { FC } from "react";

const About: FC = () => {
  return (
    <div className="about-bg">
      <div className="max-width">
        <div className="about-content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like). Where does it come from? Contrary to popular belief, Lorem
            Ipsum is not simply random text.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://littlelemon.alexismenest.vercel.app/static/media/chefs-mario-and-adrian_a.baf0d2e31dc6977f913f.jpg"
            alt="little-lemon restaurant"
          ></img>
          <img
            src="https://littlelemon.alexismenest.vercel.app/static/media/chefs-mario-and-adrian_a.baf0d2e31dc6977f913f.jpg"
            alt="little-lemon restaurant"
          ></img>
        </div>
      </div>
    </div>
  );
};

export { About };

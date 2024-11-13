import React from "react";
import {
  AboutContainer,
  AboutTitle,
  AboutDescription,
  AboutImage,
  AboutContent,
  StyledCard,
  Quote,
  QuoteAuthor,
} from "./about.styles";
import { CardContent } from "@mui/material";

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle variant="h2">About Little Lemon</AboutTitle>

      <AboutDescription variant="body1">
        Nestled in the heart of Chicago, Little Lemon is a family-owned
        Mediterranean restaurant that brings together the rich flavors of the
        Mediterranean with a modern twist. Our journey began with a simple love
        for traditional recipes passed down through generations, and a desire to
        share these cherished dishes with our community.
      </AboutDescription>

      <AboutContent>
        <AboutImage
          src="https://misterwils.eu/wp-content/uploads/2022/06/misterwils-blog-decorate-restaurants-mediterranean-style-4.jpeg"
          alt="Restaurant Interior"
        />
        <AboutImage
          src="https://misterwils.eu/wp-content/uploads/2022/06/misterwils-blog-restaurant-decoration-for-inspiration-12.jpeg"
          alt="Restaurant Interior"
        />
      </AboutContent>

      <StyledCard>
        <CardContent>
          <AboutDescription variant="body1">
            Inspired by our grandmother’s kitchen, where the aroma of fresh
            herbs and spices filled the air, we set out to create a space that
            feels like home. Every dish at Little Lemon is crafted with care,
            using the finest ingredients sourced from local farmers and trusted
            suppliers. We believe that food is not just sustenance; it’s an
            experience that brings people together.
          </AboutDescription>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <AboutDescription variant="body1">
            Our menu features a delightful variety of Mediterranean classics,
            from savory kebabs to fresh salads, all infused with our signature
            flair. Whether you’re indulging in our creamy hummus or savoring the
            spices in our signature tagine, each bite tells a story of our
            heritage and passion for authentic flavors.
          </AboutDescription>
        </CardContent>
      </StyledCard>

      <Quote variant="body1">
        "At Little Lemon, we believe that food is not just about taste; it's
        about creating memories with loved ones."
      </Quote>
      <QuoteAuthor>- The Little Lemon Family</QuoteAuthor>

      <StyledCard>
        <CardContent>
          <AboutDescription variant="body1">
            At Little Lemon, we take pride in creating a welcoming atmosphere
            where families and friends can gather to enjoy great food and each
            other’s company. Our staff is dedicated to providing exceptional
            service, ensuring that your dining experience is memorable from the
            moment you walk through our doors.
          </AboutDescription>
        </CardContent>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <AboutDescription variant="body1">
            As we continue to grow, we remain committed to our core values of
            community, quality, and authenticity. We invite you to join us on
            this culinary journey and experience the warmth and flavors of the
            Mediterranean right here in Chicago. Thank you for being a part of
            our family!
          </AboutDescription>
        </CardContent>
      </StyledCard>
    </AboutContainer>
  );
};

export {About}

// import React from "react";
// import {
//   AboutContainer,
//   AboutTitle,
//   AboutDescription,
//   AboutImage,
//   AboutContent,
// } from "./about.styles";

// const About = () => {
//   return (
//     <AboutContainer>
//       <AboutTitle variant="h2">About Little Lemon</AboutTitle>

//       <AboutDescription variant="body1">
//         Nestled in the heart of Chicago, Little Lemon is a family-owned
//         Mediterranean restaurant that brings together the rich flavors of the
//         Mediterranean with a modern twist. Our journey began with a simple love
//         for traditional recipes passed down through generations, and a desire to
//         share these cherished dishes with our community.
//       </AboutDescription>

//       <AboutDescription variant="body1">
//         Inspired by our grandmother’s kitchen, where the aroma of fresh herbs
//         and spices filled the air, we set out to create a space that feels like
//         home. Every dish at Little Lemon is crafted with care, using the finest
//         ingredients sourced from local farmers and trusted suppliers. We believe
//         that food is not just sustenance; it’s an experience that brings people
//         together.
//       </AboutDescription>

//       <AboutContent>
//         <AboutImage
//           src="https://misterwils.eu/wp-content/uploads/2022/06/misterwils-blog-decorate-restaurants-mediterranean-style-4.jpeg"
//           alt="Restaurant Interior"
//         />
//         <AboutImage
//           src="https://misterwils.eu/wp-content/uploads/2022/06/misterwils-blog-restaurant-decoration-for-inspiration-12.jpeg"
//           alt="Restaurant Interior"
//         />
//       </AboutContent>

//       <AboutDescription variant="body1">
//         Our menu features a delightful variety of Mediterranean classics, from
//         savory kebabs to fresh salads, all infused with our signature flair.
//         Whether you’re indulging in our creamy hummus or savoring the spices in
//         our signature tagine, each bite tells a story of our heritage and
//         passion for authentic flavors.
//       </AboutDescription>

//       <AboutDescription variant="body1">
//         At Little Lemon, we take pride in creating a welcoming atmosphere where
//         families and friends can gather to enjoy great food and each other’s
//         company. Our staff is dedicated to providing exceptional service,
//         ensuring that your dining experience is memorable from the moment you
//         walk through our doors.
//       </AboutDescription>

//       <AboutDescription variant="body1">
//         As we continue to grow, we remain committed to our core values of
//         community, quality, and authenticity. We invite you to join us on this
//         culinary journey and experience the warmth and flavors of the
//         Mediterranean right here in Chicago. Thank you for being a part of our
//         family!
//       </AboutDescription>
//     </AboutContainer>
//   );
// };

// export { About };

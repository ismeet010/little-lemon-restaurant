import React from "react";
import { Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  FooterContainer,
  FooterGrid,
  FooterItem,
  FooterTitle,
  FooterLink,
  SocialLinksContainer,
  SocialIconButton,
  FooterLogo,
} from "./footer.styles";
import logo from "../../../assets/logo-footer.png";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterGrid container>
        {/* Logo Section */}
        <FooterItem>
          <FooterLogo src={logo} alt="little lemon logo" />
        </FooterItem>

        {/* Useful Links */}
        <FooterItem>
          <FooterTitle variant="subtitle1">Useful links</FooterTitle>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Menu</FooterLink>
          <FooterLink href="#">Reservation</FooterLink>
          <FooterLink href="#">Login</FooterLink>
        </FooterItem>

        {/* Contact Us */}
        <FooterItem>
          <FooterTitle variant="subtitle1">Contact us</FooterTitle>
          <Typography variant="body1">
            29, Mithila Nagar, Banjara Hills,
          </Typography>
          <Typography variant="body1">
            Hyderabad, India <Typography variant="body2">500034</Typography>
          </Typography>
        </FooterItem>

        {/* Connect With Us */}
        <FooterItem>
          <FooterTitle variant="subtitle1">Connect with us</FooterTitle>
          <SocialLinksContainer>
            <SocialIconButton aria-label="Twitter">
              <TwitterIcon /> <Typography>/little_lemon</Typography>
            </SocialIconButton>
            <SocialIconButton aria-label="Facebook">
              <FacebookIcon /> <Typography>/little_lemon</Typography>
            </SocialIconButton>
            <SocialIconButton
              onClick={() =>
                window.open("https://www.instagram.com/ismeet_chhabda")
              }
              aria-label="Instagram"
            >
              <InstagramIcon /> <Typography>/little_lemon</Typography>
            </SocialIconButton>
          </SocialLinksContainer>
        </FooterItem>
      </FooterGrid>
    </FooterContainer>
  );
};

export { Footer };

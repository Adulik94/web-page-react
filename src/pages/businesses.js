import React from "react";
import Navbar from "../components/Navbar";
import ContentCardsSection from "./../components/ContactCardSection";

function BusinessesPage(props) {
  return (
    <>
      <Navbar
        color="default"
        logo="https://uploads.divjoy.com/logo.svg"
        logoInverted="https://uploads.divjoy.com/logo-white.svg"
      />
      <ContentCardsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Businesses"
        subtitle=""
      />
    </>
  );
}

export default BusinessesPage;

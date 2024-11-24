import React from "react";
import DelieverDetails from "../../Components/DelieverDetails";
import LinkImg from "../../Components/LinkImg";
import FewCollecction from "../../Components/FewCollecction";
import HeroSection from "../../Components/HeroSection";

function Heroes() {
  return (
    <main className="space-y-20">
      <HeroSection />
      <DelieverDetails />
      <LinkImg />
      <FewCollecction />
    </main>
  );
}

export default Heroes;

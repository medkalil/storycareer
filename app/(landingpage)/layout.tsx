import React from "react";
import Navbar from "./_component/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <div> footer </div>
      
    </div>
  );
};

export default LandingPageLayout;

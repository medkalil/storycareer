import React from "react";
import Navbar from "./_component/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full">{children}</main>
      <div> footer</div>
    </div>
  );
};

export default LandingPageLayout;

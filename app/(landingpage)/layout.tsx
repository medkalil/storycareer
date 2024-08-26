import React from "react";
import Navbar from "./_component/navbar";
import Footer from "./_component/footer";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full max-w-7xl mx-auto px-5 relative">{children}</main>
      <Footer />
    </div>
  );
};

export default LandingPageLayout;

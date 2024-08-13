import React from "react";
import Header from "./_component/header";

const PlateformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-5 h-full">
      <Header />
      <div className="h-full flex items-start md:space-x-5">{children}</div>
    </div>
  );
};

export default PlateformLayout;

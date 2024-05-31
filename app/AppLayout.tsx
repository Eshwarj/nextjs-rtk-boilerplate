import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" background-light900_dark900 text-light950_dark-950 relative flex min-h-screen flex-col">
      <Navbar />
      <div className="flex ">
        <section className="flex flex-1 flex-col  pb-6 pt-[6rem] max-md:pb-14">
          {children}
        </section>
      </div>
      {/* Toaster */}
      <div className=" mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default AppLayout;

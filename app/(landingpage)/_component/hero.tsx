import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-32 text-center space-y-3 min-h-full px-5">
      <h2 className="text-sm font-medium">welcome to stroycareer</h2>
      <h1 className="text-3xl md:text-5xl font-bold max-w-2xl">
        Discover and Share Inpiring Carrer Journeys
      </h1>
      <p className="max-w-lg text-muted-foreground">
        Stroycareer is a unique plateform where individual from all walks of
        life can share their careeer syories, challenges, and sucesses. wether
        tou&apos;re just starting out.
      </p>
      <Link href="/stories">
        <Button>Discouver peaple stories</Button>
      </Link>
      <Image  src={"/reading.svg"} alt="reading" width={500} height={500}/>
    </section>
  );
};

export default Hero;

'use client';

import { useEffect, useState } from "react";
import HeroSection from "./_components/HeroSection/HeroSection";
import FloatingPhoneSection from "./_components/MainSection/floating-phone-section";
import Entrance from "./_components/entrance";

const Page = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Entrance />
      ) : (
        <>
          <HeroSection />
          <FloatingPhoneSection />
        </>
      )
      }

    </>
  )
}

export default Page;
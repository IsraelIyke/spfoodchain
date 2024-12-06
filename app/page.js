"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="container">
      <header>
        <nav>
          <b>SPFC</b>
          
        </nav>
      </header>

      <div className="image2">
        <Image
          src="/image1.jpg"
          height={1000}
          width={1000}
          className="image1"
          alt="Background"
        />
        <div className="WText" data-aos="flip-left" data-aos-duration="100">SP Food Chain
            <p className="slogan">Get all your healthy foods at your doorstep 🥦</p>
            <p className="welcome">Welcome</p>
            </div>
      </div>

    </div>
  );
            }

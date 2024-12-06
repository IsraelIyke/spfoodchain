"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="container">
      <nav>nav</nav>
      <div className="sub-container" data-aos="fade-up">
        <div className="banner">banner</div>
        <div className="card" data-aos="fade-down-right">
          <div>card</div>
        </div>
        <div className="card-2">
          <div data-aos="flip-left" data-aos-duration="3000">
            card
          </div>
          <div data-aos="flip-right" data-aos-duration="500">
            card
          </div>
        </div>
        <div className="card-3">
          <div data-aos="zoom-in">card</div>
          <div data-aos="zoom-in-up">card</div>
          <div data-aos="zoom-in-down">card</div>
        </div>
      </div>
    </div>
  );
}

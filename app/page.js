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
          <div>
            <GiHamburgerMenu className="menu" />
          </div>
        </nav>
      </header>

      <div className="image2">
        <Image
          src="/image1.jpg"
          height={800}
          width={800}
          className="image1"
          alt="Background"
        />
        <div className="WText" data-aos="zoom-in" data-aos-duration="1000">
          <p className="welcome">Welcome</p>
          SP Food Chain
          <p className="slogan">
            Get all your healthy foods at your doorstep 🥦
          </p>
        </div>
      </div>
      <div id="services">
        <h2 className="service-title">What we offer</h2>
        <div className="services-section">
          <div className="card" data-aos="flip-left">
            <h3>Courier Services</h3>
            <p>
              Reliable delivery of fresh and healthy food to your doorstep with
              speed and care.
            </p>
            <button className="card-button">Learn More</button>
          </div>
          <div className="card" data-aos="flip-left">
            <h3>Storage Services</h3>
            <p>
              Secure, temperature-controlled storage for raw food, dairy and other animal products to
              ensure freshness.
            </p>
            <button className="card-button">Learn More</button>
          </div>
          <div className="card" data-aos="flip-left">
            <h3>On Demand Healthy Food</h3>
            <p>
              Delivering fresh, nutritious meals tailored to your needs with
              timely, eco-friendly service.
            </p>
            <button className="card-button">Learn More</button>
          </div>
        </div>
      </div>

      <section id="about-us">
        <div class="about-container">
          <h2>About Us</h2>
          <p>
            Welcome to <span class="business-name">SP Food Chain</span>, where
            healthy living begins with the food you eat!
          </p>
          <p>
            We are dedicated to solving critical food-related issues, including
            food scarcity, the lack of healthy meals, and the ignorance
            surrounding healthy dieting. Our mission is to make certified
            healthy meals accessible to everyone, regardless of their schedule
            or lifestyle.
          </p>
          <p>
            Through sustainable agricultural practices, we ensure that every
            product we offer meets the highest standards of nutrition and
            quality. Our services go beyond just food delivery — we provide
            convenient storage solutions for raw food, dairy products and other animal products, making
            it easier for our customers to maintain a healthy diet.
          </p>
          <p>
            With us, you&apos;re not just getting food; you&apos;re gaining a
            partner in your journey toward a healthier life. Let&apos;s
            transform the way you eat, one healthy bite at a time!
          </p>
        </div>
      </section>
      <section id="blog">
        <div class="blog-container">
          <h2>Our Blog</h2>
          <div class="blog-list">
            <div class="blog-item" data-aos="flip-left">
              <Image
                src="/image5.jpg"
                height={500}
                width={500}
                alt="Blog Image 1"
                class="blog-image"
              />
              <h3 class="blog-title">The Importance of Eating Healthy</h3>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
            <div class="blog-item" data-aos="flip-left">
              <Image
                src="/image3.jpg"
                height={500}
                width={500}
                alt="Blog Image 2"
                class="blog-image"
              />
              <h3 class="blog-title">Tips for Sustainable Agriculture</h3>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
            <div class="blog-item" data-aos="flip-left">
              <Image
                src="/image4.jpg"
                height={500}
                width={500}
                alt="Blog Image 3"
                class="blog-image"
              />
              <h3 class="blog-title">Healthy Recipes for Busy Lifestyles</h3>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-us">
        <div class="contact-container">
          <h2>Contact Us</h2>
          <p>
            We&apos;d love to hear from you! Whether you have questions,
            feedback, or need assistance, feel free to reach out.
          </p>

          <form id="contact-form">
            <div class="form-group">
              <label for="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div class="form-group">
              <label for="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div class="form-group">
              <label for="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message here"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer id="footer">
        <div class="footer-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffa500"
              fill-opacity="1"
              d="M0,160L34.3,160C68.6,160,137,160,206,149.3C274.3,139,343,117,411,133.3C480,149,549,203,617,192C685.7,181,754,107,823,74.7C891.4,43,960,53,1029,64C1097.1,75,1166,85,1234,101.3C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div class="footer-content">
          <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact-us">Contact</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div class="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: contact@spfoodchain.com</p>
            <p>Phone: +123 456 7890</p>
            <div class="social-links">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2024 SP Food Chain. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLeaf, 
  FaTruck, 
  FaWarehouse, 
  FaClock, 
  FaArrowRight, 
  FaCheckCircle 
} from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about-us" },
    { label: "Blog", href: "#blog-section" },
    { label: "Contact", href: "#contact-us" },
  ];

  const services = [
    {
      icon: FaTruck,
      title: "Courier Services",
      description: "Reliable delivery of fresh and healthy food to your doorstep with speed and care.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FaWarehouse,
      title: "Storage Services",
      description: "Secure, temperature-controlled storage for raw food, dairy and other animal products to ensure freshness.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: FaClock,
      title: "On Demand Healthy Food",
      description: "Delivering fresh, nutritious meals tailored to your needs with timely, eco-friendly service.",
      color: "from-blue-500 to-cyan-600"
    }
  ];

  const blogPosts = [
    {
      image: "/image5.jpg",
      title: "The Importance of Eating Healthy",
      excerpt: "Discover how a balanced diet can transform your health and energy levels.",
      readTime: "5 min read"
    },
    {
      image: "/image3.jpg",
      title: "Tips for Sustainable Agriculture",
      excerpt: "Learn about eco-friendly farming practices that benefit both people and planet.",
      readTime: "7 min read"
    },
    {
      image: "/image4.jpg",
      title: "Healthy Recipes for Busy Lifestyles",
      excerpt: "Quick and nutritious meal ideas for those with packed schedules.",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2">
              <FaLeaf className="text-2xl text-green-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                SPFC
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-green-600 hover:text-green-800 font-medium transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-green-600 text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-4 right-4 mt-2 backdrop-blur-xl bg-white/90 border border-white/20 rounded-2xl shadow-xl p-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 font-medium py-2 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Order Now
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/image1.jpg"
              fill
              className="object-cover"
              alt="Healthy food background"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="max-w-4xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <FaLeaf className="text-green-400" />
              <span className="text-green-100 font-semibold">Welcome to</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              SP Food Chain
              <span className="block text-2xl md:text-5xl text-green-300 mt-2">
                Healthy Living Delivered
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto px-4">
              Get all your healthy foods at your doorstep 🥦 Fresh, nutritious, and delivered with care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 md:px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start Ordering
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 md:px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              What We <span className="text-green-600">Offer</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your healthy food needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-100 rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                      <Icon className="text-2xl md:text-3xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm md:text-base">{service.description}</p>
                    <button className="flex items-center text-green-600 font-semibold">
                      Learn More
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Section */}
     <section id="about-us" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
  <div className="container mx-auto px-4"> 
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-green-600">Us</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Welcome to <span className="font-bold text-green-700">SP Food Chain</span>, where healthy living begins with the food you eat!
                </p>
                <p className="text-gray-700 align-center">
               

We are dedicated to solving critical food-related issues, including food scarcity, the lack of healthy meals, and the ignorance surrounding healthy dieting. Our mission is to make certified healthy meals accessible to everyone, regardless of their schedule or lifestyle.

Through sustainable agricultural practices, we ensure that every product we offer meets the highest standards of nutrition and quality. Our services go beyond just food delivery — we provide convenient storage solutions for raw food, dairy products and other animal products, making it easier for our customers to maintain a healthy diet.

With us, you are not just getting food; you are gaining a partner in your journey toward a healthier life. Let us transform the way you eat, one healthy bite at a time!
                </p>
               
              </div>
            </div>            
          
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Latest <span className="text-green-600">Insights</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Discover tips, recipes, and stories about healthy living
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={post.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center text-green-600 font-semibold"
                  >
                    Read Article
                    <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-us" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-1 md:px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Get In <span className="text-green-600">Touch</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                We would love to hear from you! Whether you have questions, feedback, or need assistance.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 font-medium">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                    placeholder="Type your message here"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <FaLeaf className="text-3xl text-green-400" />
                <span className="text-2xl font-bold">SP Food Chain</span>
              </div>
              <p className="text-gray-400 mb-6">
                Delivering health and happiness to your doorstep since 2020.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                  <FaFacebook />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-gray-400 hover:text-green-400 transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">Courier Services</li>
                <li className="text-gray-400">Storage Solutions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <p className="text-gray-400">contact@spfoodchain.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} SP Food Chain. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

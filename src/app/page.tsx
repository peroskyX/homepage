'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D47A1] text-[#BBDEFB]">
      <header className={`sticky top-0 transition-all duration-300 z-10 ${isScrolled ? 'bg-[#0D47A1] shadow-md py-2' : 'py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold text-[#BBDEFB]">
            <a href="/" aria-label="Windowshop.ai Homepage">Windowshop.ai</a>
          </div>
          <nav className="hidden md:block" aria-label="Main Navigation">
            <ul className="flex gap-8">
              <li><a href="#intro" className="hover:text-[#BBDEFB] transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-[#BBDEFB] transition-colors">Products</a></li>
              <li><a href="#mission" className="hover:text-[#BBDEFB] transition-colors">Mission</a></li>
              <li><a href="#vision" className="hover:text-[#BBDEFB] transition-colors">Vision</a></li>
              <li><a href="#contact" className="hover:text-[#BBDEFB] transition-colors">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden" aria-label="Toggle mobile menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        {/* Hero/Intro Section */}
        <section id="intro" className="py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl">
              Crafting digital experiences
            </h1>
            <p className="text-xl md:text-2xl text-[#BBDEFB] max-w-2xl">
              We build innovative mobile and web apps being used by entrepreneurs.
            </p>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-20 bg-[#0D47A1]">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Product</h2>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/api/placeholder/800/450"
                    alt="CrossPromote.ai Platform - Cross promotion tool for entrepreneurs"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">CrossPromote.ai</h3>
                <p className="text-xl text-[#BBDEFB] font-medium mb-4">100x your marketing</p>
                <p className="text-lg text-[#BBDEFB] mb-6">
                  A cross-promotion platform for intelligent entrepreneurs. Connect with complementary 
                  businesses, share audiences, and grow together without increasing your marketing budget.
                </p>
                <a 
                  href="https://crosspromote.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#BBDEFB] text-[#0D47A1] rounded-md font-medium hover:bg-[#BBDEFB]/30 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Visit CrossPromote.ai website"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Mission */}
              <div id="mission">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-[#BBDEFB] mb-4">
                  To build simple apps solving small pain points at scale.
                </p>
                <p className="text-lg text-[#BBDEFB]">
                  We believe that the most impactful solutions often address specific problems with 
                  elegant simplicity. Our focus is on creating tools that integrate seamlessly into 
                  the workflows of entrepreneurs and deliver immediate value.
                </p>
              </div>
              
              {/* Vision */}
              <div id="vision">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-[#BBDEFB] mb-4">
                  To house multiple successful products from A-Z.
                </p>
                <p className="text-lg text-[#BBDEFB]">
                  We're building a portfolio of specialized applications that each solve distinct 
                  problems with excellence. Our goal is to create an ecosystem of intuitive 
                  digital tools that help entrepreneurs work smarter, not harder.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 bg-[#0D47A1]">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-[#BBDEFB] mb-6 max-w-2xl">
              Interested in our products or want to collaborate? We'd love to hear from you.
            </p>
            <div className="text-lg">
              <p className="mb-2">
                <span className="font-medium">Email:</span>{' '}
                <a href="mailto:hello@windowshop.ai" className="text-[#BBDEFB] hover:underline">
                  hello@windowshop.ai
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-[#0D47A1]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <p className="text-[#BBDEFB]">&copy; {new Date().getFullYear()} Windowshop.ai. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <nav aria-label="Footer Navigation">
                <ul className="flex flex-wrap gap-6">
                  <li><a href="#intro" className="text-[#BBDEFB] hover:text-[#BBDEFB] transition-colors">Home</a></li>
                  <li><a href="#products" className="text-[#BBDEFB] hover:text-[#BBDEFB] transition-colors">Products</a></li>
                  <li><a href="#mission" className="text-[#BBDEFB] hover:text-[#BBDEFB] transition-colors">Mission</a></li>
                  <li><a href="/terms" className="text-[#BBDEFB] hover:text-[#BBDEFB] transition-colors">Terms</a></li>
                  <li><a href="/privacy" className="text-[#BBDEFB] hover:text-[#BBDEFB] transition-colors">Privacy</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Add structured data for the product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "CrossPromote.ai",
            "description": "A cross-promotion platform for intelligent entrepreneurs",
            "url": "https://crosspromote.ai",
            "brand": {
              "@type": "Brand",
              "name": "Windowshop.ai"
            }
          })
        }}
      />
    </div>
  );
}
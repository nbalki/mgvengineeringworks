import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 shadow-md backdrop-blur-lg border-b border-white/30'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            {/* logo image from public/images */}
            <img
              src="/images/MGV-LOGO.png"
              alt="MGV Engineering Works logo"
              onLoad={() => setLogoLoaded(true)}
              onError={(e) => {
                // fallback to a generic placeholder if image fails
                (e.currentTarget as HTMLImageElement).src =
                  '/images/placeholder.png';
              }}
              className={`h-10 w-10 object-contain transition-transform duration-300 ease-in-out group-hover:rotate-[15deg] ${
                logoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              width={40}
              height={40}
            />

            <span className="font-bold text-xl text-brand-heading hidden sm:block">
              MGV Engineering Works
            </span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-secondary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block bg-brand-secondary text-white font-semibold py-2 px-6 rounded-md hover:bg-opacity-90 transition-all"
          >
            Get a Quote
          </a>
          {/* Mobile menu button could be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;

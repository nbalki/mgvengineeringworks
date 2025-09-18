import React from 'react';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const About: React.FC = () => {
  const { ref, animationClasses } = useFadeInOnScroll<HTMLElement>();

  return (
    <section ref={ref} id="about" className={`py-20 bg-gray-50/50 ${animationClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-base font-semibold text-brand-secondary uppercase">What We Stand For</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-brand-heading sm:text-4xl">
              Local Craftsmanship, Modern Engineering
            </p>
            <p className="mt-6 text-lg text-brand-text">
              At MGV Engineering Works, we merge decades of local construction knowledge with modern manufacturing techniques. Based in the heart of Villupuram, we are dedicated to supplying South India's growth with building materials that are not only strong and reliable but also cost-effective.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-brand-heading">Our Mission</h3>
              <p className="mt-2 text-brand-text">
                To be the most trusted manufacturer of precast concrete products and building materials in the region, empowering builders and contractors with superior quality products and reliable service.
              </p>
              <h3 className="mt-6 text-xl font-bold text-brand-heading">Our Vision</h3>
              <p className="mt-2 text-brand-text">
                To build a stronger South India by contributing to the development of robust infrastructure, from individual homes to large-scale community projects, ensuring a legacy of quality for generations to come.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="images/aboutus.png" 
              alt="Construction workers planning" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
             <div className="absolute -bottom-4 -right-4 bg-brand-primary/50 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white w-48 text-center shadow-lg">
                <div className="font-bold text-4xl">10+</div>
                <div className="text-sm uppercase tracking-wider">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
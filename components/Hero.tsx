
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger the animation shortly after the component mounts
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img src="images/hero.jpg" alt="Construction Site" className="absolute inset-0 w-full h-full object-cover" />
            <div className={`relative z-10 text-center px-4 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">
                    Building Foundations of <span className="text-amber-300">South India</span>
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
                    Manufacturing high-quality RCC products and building materials with precision, strength, and trust in Villupuram.
                </p>
                <div className="space-x-4">
                    <a href="#services" className="bg-brand-secondary text-white font-semibold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all text-lg">
                        Our Products
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
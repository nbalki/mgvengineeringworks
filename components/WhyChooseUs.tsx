import React from "react";
import { WHY_CHOOSE_US_ITEMS } from "../constants";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const WhyChooseUs: React.FC = () => {
  const { ref, animationClasses } = useFadeInOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      id="why-choose-us"
      className={`py-20 bg-gray-900 text-white ${animationClasses}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Choose MGV Engineering Works?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We're more than just a supplier; we're a partner in your
              construction journey, committed to delivering excellence at every
              step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US_ITEMS.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg"
              >
                <h3 className="text-5xl font-bold text-brand-secondary">
                  {item.id}
                </h3>
                <h4 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

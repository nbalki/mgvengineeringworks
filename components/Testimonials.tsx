import React from "react";
import { TESTIMONIALS } from "../constants";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const Testimonials: React.FC = () => {
  const { ref, animationClasses } = useFadeInOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      id="testimonials"
      className={`py-20 bg-gray-50 ${animationClasses}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-heading sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={testi.avatar}
                alt={testi.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="text-gray-600 italic">“{testi.quote}”</p>
              <h4 className="mt-4 font-semibold text-brand-heading">
                {testi.name}
              </h4>
              <span className="text-sm text-gray-500">{testi.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { FAQ } from "../constants";
import { useFadeInOnScroll } from "../hooks/useFadeInOnScroll";

const Faq: React.FC = () => {
  const { ref, animationClasses } = useFadeInOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      id="faq"
      className={`py-20 bg-white ${animationClasses}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-brand-heading sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Find answers to common questions about our products and services.
          </p>
        </div>
        <div className="space-y-8 max-w-3xl mx-auto">
          {FAQ.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-brand-heading">
                {item.q}
              </h3>
              <p className="mt-2 text-gray-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

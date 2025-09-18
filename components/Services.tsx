// Services.tsx
import React from "react";

const services = [
  {
    title: "Mechanical Design",
    description: "CAD modelling, FEA checks and producible shop drawings.",
    image: "images/services/mechanical-design.jpg",
  },
  {
    title: "Sheet Metal Fabrication",
    description:
      "Laser cutting, bending, welding and finishing — small to large batches.",
    image: "images/services/sheet-metal.jpg",
  },
  {
    title: "Assembly & Integration",
    description:
      "Sub-assembly, final assembly and quality checks for production runs.",
    image: "images/services/assembly.jpg",
  },
  {
    title: "Inspection & Testing",
    description:
      "Dimensional inspection, pressure & safety tests, and certification support.",
    image: "images/services/testing.jpg",
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 mb-10">
          Explore the wide range of engineering services we offer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-20 h-20 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

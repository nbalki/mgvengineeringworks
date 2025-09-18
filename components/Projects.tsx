import React from 'react';
import { PROJECTS } from '../constants';
import { useFadeInOnScroll } from '../hooks/useFadeInOnScroll';

const Projects: React.FC = () => {
    const { ref, animationClasses } = useFadeInOnScroll<HTMLElement>();

    return (
        <section ref={ref} id="projects" className={`py-20 bg-gray-50/50 ${animationClasses}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-brand-secondary uppercase">Our Work</h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-brand-heading sm:text-4xl">
                        Expertly Crafted Engineering Products
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Our products have been a trusted choice for a diverse range of construction projects across the region.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {PROJECTS.map((project) => (
                        <div key={project.title} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <img src={project.image} alt={project.title} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/50 backdrop-blur-md border-t border-white/20 text-white">
                                <span className="text-sm bg-brand-secondary text-white py-1 px-2 rounded">{project.category}</span>
                                <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
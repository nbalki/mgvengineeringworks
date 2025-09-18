import React, { useState } from 'react';
import { MgvLogo, PhoneIcon, MailIcon, MapPinIcon } from './Icons';

const Footer: React.FC = () => {
    const contactInfo = {
        name: 'Muralidharan .D',
        phones: ['8248926504', '9443229859'],
        email: 'mgvengineeringworks2021@gmail.com',
        address: 'RS No. 194/1 & 196/1, Chinnakarikattipattu Village, V. Kempatty - Pt., Kiliyanur Post, Vanur Taluk, Villupuram Dist - 604 102.'
    };

    const quickLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'FAQ', href: '#faq' },
    ];

    const initialFormState = {
        name: '',
        email: '',
        phone: '',
        message: '',
    };

    const [formData, setFormData] = useState(initialFormState);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Contact Form Submission:', formData);
        setIsSubmitted(true);
        setFormData(initialFormState);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    const handleClear = () => {
        setFormData(initialFormState);
        setIsSubmitted(false);
    };

    return (
        <footer id="contact" className="bg-brand-heading text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left side: Info */}
                    <div>
                         <div className="mb-10">
                            <a href="#home" className="flex items-center gap-3 group">
                                <MgvLogo className="h-12 w-12 text-white transition-transform duration-300 ease-in-out group-hover:rotate-12" />
                                <span className="font-bold text-2xl">MGV Engineering</span>
                            </a>
                            <p className="mt-4 text-gray-300 max-w-md">
                                Your trusted partner for quality construction materials in South India.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                             {/* Contact Info */}
                            <div>
                                <h3 className="text-lg font-semibold tracking-wider uppercase">Contact Info</h3>
                                <ul className="mt-4 space-y-3">
                                    <li className="flex items-start group">
                                        <PhoneIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-brand-secondary transition-transform duration-300 ease-in-out group-hover:-translate-y-1" />
                                        <span>
                                            {contactInfo.name}<br/>
                                            <a href={`tel:${contactInfo.phones[0]}`} className="hover:text-brand-secondary">{contactInfo.phones[0]}</a>, <a href={`tel:${contactInfo.phones[1]}`} className="hover:text-brand-secondary">{contactInfo.phones[1]}</a>
                                        </span>
                                    </li>
                                    <li className="flex items-start group">
                                        <MailIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-brand-secondary transition-transform duration-300 ease-in-out group-hover:-translate-y-1" />
                                        <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-secondary break-all">{contactInfo.email}</a>
                                    </li>
                                    <li className="flex items-start group">
                                        <MapPinIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-brand-secondary transition-transform duration-300 ease-in-out group-hover:-translate-y-1" />
                                        <span>{contactInfo.address}</span>
                                    </li>
                                </ul>
                            </div>
                            {/* Quick Links */}
                            <div>
                                <h3 className="text-lg font-semibold tracking-wider uppercase">Quick Links</h3>
                                <ul className="mt-4 space-y-2">
                                    {quickLinks.map(link => (
                                        <li key={link.name}>
                                            <a href={link.href} className="text-gray-300 hover:text-brand-secondary transition-colors">{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Form */}
                    <div>
                        <h3 className="text-2xl font-bold">Get in Touch</h3>
                        <p className="mt-2 text-gray-300 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
                        
                        {isSubmitted ? (
                            <div className="bg-green-500/10 border border-green-500 text-green-300 px-4 py-3 rounded-lg" role="alert">
                                <strong className="font-bold">Success! </strong>
                                <span className="block sm:inline">Your message has been sent. Thank you!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full bg-white/10 border border-white/20 backdrop-blur-sm rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/70 transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full bg-white/10 border border-white/20 backdrop-blur-sm rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/70 transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" placeholder="Your Phone Number (Optional)" value={formData.phone} onChange={handleChange} className="w-full bg-white/10 border border-white/20 backdrop-blur-sm rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/70 transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">Message</label>
                                    <textarea name="message" id="message" rows={4} placeholder="Your Message" required value={formData.message} onChange={handleChange} className="w-full bg-white/10 border border-white/20 backdrop-blur-sm rounded-md py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/70 transition-all"></textarea>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button type="submit" className="w-full bg-brand-secondary text-white font-semibold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all">
                                        Send Message
                                    </button>
                                    <button type="button" onClick={handleClear} className="w-full bg-transparent border border-gray-600 text-gray-300 font-semibold py-3 px-6 rounded-md hover:bg-gray-800 hover:text-white transition-all">
                                        Clear Form
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            <div className="bg-black/20 py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} MGV Engineering Works. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
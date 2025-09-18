
export interface Service {
  name: string;
  image: string;
  description: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
}

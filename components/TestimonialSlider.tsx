'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Ariko's dedication to our community is unmatched. His vision for change is exactly what we need.",
    author: "Sarah Johnson",
    role: "Community Leader",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    quote: "I've seen firsthand how committed he is to making real, positive changes in our neighborhood.",
    author: "Michael Chen",
    role: "Local Business Owner",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    quote: "His approach to problem-solving and community engagement sets him apart from other candidates.",
    author: "Emily Rodriguez",
    role: "Education Advocate",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    quote: "Ariko truly listens to the community and takes action based on our needs.",
    author: "David Wilson",
    role: "Youth Mentor",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative min-h-[400px] w-full max-w-4xl mx-auto px-4">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-24 h-24 mb-6">
                <Image 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  fill
                  className="rounded-full object-cover border-4 border-primary/10 dark:border-primary/20"
                />
              </div>
              <div className="mb-6">
                <svg 
                  className="w-8 h-8 text-primary/20 dark:text-primary/30 mx-auto mb-4" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic">
                  {testimonials[currentIndex].quote}
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex 
                ? 'bg-primary dark:bg-primary/80' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
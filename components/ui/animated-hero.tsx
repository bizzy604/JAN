"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AnimatedHero() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold text-foreground mb-6"
      >
        Dr. John Ariko Namoit
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="block text-primary mt-4 text-4xl md:text-6xl"
        >
          For Governor 2027
        </motion.span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-2xl md:text-3xl text-muted-foreground mb-12 font-light"
      >
        Building a Better Turkana Together
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-6 justify-center"
      >
        <Button size="lg" className="text-lg px-12 py-8 bg-primary hover:bg-orange-500" asChild>
          <Link href="/contact">Join the Movement <ArrowRight className="ml-2 h-6 w-6" /></Link>
        </Button>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-lg px-12 py-8 text-primary border-primary hover:bg-orange-500" 
          asChild
        >
          <Link href="/priorities">Learn More</Link>
        </Button>
      </motion.div>
    </div>
  );
} 
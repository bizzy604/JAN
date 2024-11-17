"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, TrendingUp, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/animated-text";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedHero } from "@/components/ui/animated-hero";
import LetterSection from '@/components/LetterSection';
import { RotatingTagline } from "@/components/rotating-tagline";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)]">
            {/* Image Container - Left Side */}
            <div className="relative h-[300px] md:h-[600px] order-2 md:order-1">
              <div className="absolute inset-0">
                <Image
                  src="/home-image.jpg"
                  alt="Dr. John Ariko Campaign"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/20 rounded-lg" />
              </div>
            </div>

            {/* Text Content - Right Side */}
            <div className="z-10 space-y-8 order-1 md:order-2">
              <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-lg">
                <AnimatedHero />
                {/* <p className="text-2xl md:text-3xl text-primary font-semibold mt-4">
                  Building a Greater Turkana, Together
                </p>
                <p className="text-lg md:text-xl text-muted-foreground mt-2">
                  Leadership that Listens, Actions that Matter
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RotatingTagline />

      {/* Vision Section */}
      <section className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8">Our Vision for Change</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Together, we can build a stronger, more prosperous state that works for everyone. 
                Join us in creating meaningful change for our communities.
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-orange-500" asChild>
                <Link href="/priorities">Read Our Plan <ArrowRight className="ml-2" /></Link>
              </Button>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/about-image.jpg"
                alt="Campaign Vision"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Priorities Section */}
      <section className="py-24">
        <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Key Priorities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Economic Growth",
                description: "Creating jobs and fostering innovation for a stronger economy",
                icon: TrendingUp,
              },
              {
                title: "Healthcare",
                description: "Ensuring accessible and affordable healthcare for all",
                icon: Heart,
              },
              {
                title: "Education",
                description: "Investing in our future through quality education",
                icon: Users,
              },
            ].map((priority, index) => (
              <AnimatedSection key={index}>
                <Card className="rounded-lg border bg-card hover:bg-accent transition-colors">
                  <CardHeader>
                    <priority.icon className="h-8 w-8 mb-2 text-primary" />
                    <CardTitle className="text-xl">{priority.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{priority.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Add the letter section here */}
      <section className="bg-[#F5F5F5] py-16">
        <LetterSection />
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Campaign</h2>
          <p className="text-xl mb-12">
            Be part of the movement to bring positive change to our state.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg py-6"
              asChild
            >
              <Link href="/contact">Be a Dozer Patriot</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg py-6"
              asChild
            >
              <Link href="/contact">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
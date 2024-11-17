import TestimonialSlider from '@/components/TestimonialSlider';
import Image from 'next/image';
import { Card } from "@/components/ui/card";

export default function Why() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-primary/5 dark:bg-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Ariko
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My commitment to positive change and community development sets me apart.
              Learn more about my vision and values.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">My Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I am dedicated to creating positive change in our community through
                  transparent leadership and inclusive policies.
                </p>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-6 dark:text-white">My Values</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Integrity, transparency, and community engagement are at the core of
                  everything we do.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What People Have to Say Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
            What People Have to Say
          </h2>
          <div className="relative">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Join Our Movement</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Together, we can make a real difference in our community. Join us in
              building a better future for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
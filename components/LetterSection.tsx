import Image from 'next/image';

export default function LetterSection() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="letter-body bg-white p-8 md:p-12 shadow-lg rounded-lg">
        {/* Letter Header */}
        <div className="letter-header text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-4 text-primary">
            Our Vision <br />For Change
          </h2>
          <div className="date flex items-center justify-center gap-4">
            <svg className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h4 className="text-lg font-semibold text-primary">2024</h4>
            <svg className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        {/* Double Horizontal Lines */}
        <div className="hr-block space-y-2 mb-8">
          <hr className="border-t-2 border-primary/50" />
          <hr className="border-t-2 border-primary/50" />
        </div>

        {/* Letter Content */}
        <div className="space-y-6 text-lg text-black">
          <p>Our commitment to change runs deep. We envision a future where every citizen has access to quality healthcare, education, and economic opportunities.</p>
          
          <p>Together, we can build a stronger, more inclusive community that works for everyone, not just a select few.</p>
          
          <p>Our campaign is built on the foundation of transparency, integrity, and genuine concern for the well-being of our constituents. <em>We believe in action over words, and results over promises.</em></p>
          
          <p className="font-bold">This is more than just a campaign – it's a movement for positive change in our community.</p>
          
          <p>We stand for progress in healthcare, education, economic development, and environmental protection. <span className="underline">These aren't just campaign promises; they're our commitment to you.</span></p>
          
          <p>We're fighting for better schools, safer streets, and more opportunities for small businesses. We're advocating for sustainable development and protecting our natural resources for future generations.</p>
          
          <p className="font-bold">Every voice matters. Every vote counts. <span className="underline">Together, we can make a difference.</span></p>
          
          <p>Join us in this journey toward a better tomorrow. Your support and engagement are what make real change possible.</p>
          
          <p>Let's work together to build the future we all deserve.</p>
        </div>

        {/* Signature Section */}
        <div className="signature text-center mt-12 space-y-4">
          <div className="h-20 relative">
            <h3 className="text-3xl font-bold text-black italic">Dr. John Ariko Namoit</h3>
          </div>
          <div className="space-y-1 text-primary">
            <h5 className="font-semibold">Dr. John Ariko Namoit</h5>
            <h5 className="font-semibold">2024</h5>
          </div>
        </div>

        {/* Bottom Stars */}
        <div className="center mt-12 text-center">
          <div className="flex justify-center gap-4">
            <svg className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
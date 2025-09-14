import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Banner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-green-50 py-16 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        <div className="flex-1 text-left max-w-md">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            <div>Build Skills With</div>
            <div>Online Courses</div>
          </h1>
          <p className="text-gray-600 mb-6">
            We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg cursor-pointer">
            Posts Comment
          </Button>
        </div>

        <div className="flex-1 hidden md:block"></div>

        <div className="flex-1 relative hidden md:flex justify-end">
          <Image
            src="/assets/images/student-girl.png"    
            alt="Online School"
            width={500}
            height={500}
            className="object-contain relative z-20"
            priority
          />
        </div>

      </div>

      <Image
        src="/assets/images/banner-girl.png"     
        alt="Background decoration"
        fill
        className="object-cover opacity-90"
      />
    </section>
  );
};

export default Banner;
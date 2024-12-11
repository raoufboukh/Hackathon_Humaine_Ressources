import React from "react";
import Footer from "../Footer";
import Header from "../Header";

function AboutUs() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Purpose Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Purpose</h2>
            <p className="text-lg text-gray-600">
              The purpose of this project is to provide businesses with a
              comprehensive HR solution that streamlines processes, enhances
              employee engagement, and ensures compliance across all HR
              functions.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Vision</h2>
            <p className="text-lg text-gray-600">
              Our vision is to become the ultimate platform for managing human
              resources, bringing innovation and efficiency to every
              organization, large or small.
            </p>
          </div>

          {/* Goals Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Goals</h2>
            <ul className="text-lg text-gray-600 list-disc list-inside">
              <li>Optimize HR processes for increased productivity</li>
              <li>Enhance employee experience and engagement</li>
              <li>Ensure seamless compliance and data security</li>
              <li>Provide advanced analytics to improve decision-making</li>
            </ul>
          </div>

          {/* Offer Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600">
              Our platform provides a comprehensive suite of HR services,
              including recruitment, payroll, performance management, benefits
              administration, and more—all backed by user-friendly design and
              robust data protection.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;

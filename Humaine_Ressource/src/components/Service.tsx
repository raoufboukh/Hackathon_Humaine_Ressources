import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Import images
import AbsenceVacationImage from "/src/assets/christina-wocintechchat-com-vzfgh3RAPzM-unsplash.jpg";
import PaymentFilesImage from "/src/assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg";
import AccountantsReportImage from "/src/assets/sebastian-herrmann-O2o1hzDA7iE-unsplash.jpg";

function Service() {
  return (
    <>
      <Header />
      <section className="mt-10">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
            Our Services
          </h1>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Left side: Large Image */}
              <div className="w-full md:w-1/2 h-64 bg-gray-200 flex justify-center items-center mb-4 md:mb-0 md:mr-6">
                <img
                  src={AbsenceVacationImage}
                  alt="Absence and Vacation Management"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Right side: Text */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">
                  Absence and Vacation Management
                </h2>
                <p className="text-sm text-gray-600">
                  Effortlessly manage absences and vacations with our intuitive
                  system, enabling you to streamline requests and approvals, and
                  ensure team productivity.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Left side: Large Image */}
              <div className="w-full md:w-1/2 h-64 bg-gray-200 flex justify-center items-center mb-4 md:mb-0 md:mr-6">
                <img
                  src={PaymentFilesImage}
                  alt="Track Payment Files"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Right side: Text */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">Track Payment Files</h2>
                <p className="text-sm text-gray-600">
                  Monitor and access payment records anytime, anywhere,
                  providing clarity and transparency in financial operations.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              {/* Left side: Large Image */}
              <div className="w-full md:w-1/2 h-64 bg-gray-200 flex justify-center items-center mb-4 md:mb-0 md:mr-6">
                <img
                  src={AccountantsReportImage}
                  alt="Accountant's Report"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Right side: Text */}
              <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 text-gray-800">
                <h2 className="text-2xl font-bold mb-4">Accountant's Report</h2>
                <p className="text-sm text-gray-600">
                  Generate detailed and accurate reports for accountants,
                  reducing manual workload and enhancing financial planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Service;

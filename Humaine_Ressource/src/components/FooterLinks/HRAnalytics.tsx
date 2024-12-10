import React from "react";
import { FaChartLine, FaQrcode, FaNetworkWired } from "react-icons/fa";

const HRAnalytics = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">HR Analytics</h1>
          <p className="text-gray-600">
            Harness IoT and QR technologies to revolutionize HR analytics and
            workforce management.
          </p>
        </header>

        <section className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Key Metrics Powered by IoT and QR
          </h2>
          <p className="text-gray-600 mb-6">
            Leverage the power of IoT sensors and QR code technology to collect
            real-time data and optimize HR processes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaNetworkWired className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">IoT-Enabled Workspaces</h3>
              <p className="mt-2">
                Monitor office conditions such as temperature, lighting, and
                occupancy using IoT sensors.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaQrcode className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">QR Code Attendance</h3>
              <p className="mt-2">
                Streamline attendance tracking with QR codes, enabling quick and
                accurate employee check-ins.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 hover:bg-buttonColor hover:text-white transition duration-300">
              <FaChartLine className="text-2xl mb-2" />
              <h3 className="text-lg font-medium">Real-Time Analytics</h3>
              <p className="mt-2">
                Gain actionable insights with real-time data collected from IoT
                devices and QR code scans.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            IoT and QR Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <h3 className="text-lg font-medium">Employee Wellbeing</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Use IoT sensors to monitor air quality, noise levels, and
                ergonomic conditions in the workspace.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <h3 className="text-lg font-medium">Secure Access</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Enhance security with QR code-based access control to restricted
                areas and resources.
              </p>
            </div>
            <div className="bg-gray-50 shadow-sm rounded-lg p-4 group hover:bg-buttonColor hover:text-white transition duration-300">
              <h3 className="text-lg font-medium">Optimized Scheduling</h3>
              <p className="text-gray-600 mt-2 group-hover:text-white transition duration-300">
                Utilize IoT data to plan meetings and resource allocation based
                on real-time workspace availability.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HRAnalytics;

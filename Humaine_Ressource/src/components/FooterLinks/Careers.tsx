import React, { useState } from "react";
import {
  FaUsers,
  FaChartLine,
  FaBuilding,
  FaGraduationCap,
  FaBriefcase,
  FaHandshake,
  FaAward,
  FaBook,
} from "react-icons/fa";

const Careers = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
              <FaBuilding className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Our Culture</h3>
              <p className="text-gray-600">
                We foster an inclusive, innovative, and collaborative work
                environment that empowers employees to grow and excel.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
              <FaHandshake className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Values</h3>
              <p className="text-gray-600">
                Integrity, innovation, teamwork, and continuous learning are the
                core principles that drive our organization forward.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
              <FaAward className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-600">
                Comprehensive professional development programs, mentorship, and
                career growth opportunities for all employees.
              </p>
            </div>
          </div>
        );
      case "benefits":
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
              <FaBook className="text-4xl text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Learning Stipend</h3>
              <p className="text-gray-600">
                Annual budget for courses, conferences, and professional
                development resources.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
              <FaGraduationCap className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Continuous Training
              </h3>
              <p className="text-gray-600">
                Ongoing professional development programs, workshops, and skill
                enhancement initiatives.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all">
              <FaBriefcase className="text-4xl text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Career Progression</h3>
              <p className="text-gray-600">
                Clear career paths, internal mobility, and opportunities for
                advancement within the organization.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Careers at Our Organization
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join a dynamic team that values innovation, growth, and personal
            development. Discover opportunities to make a meaningful impact.
          </p>
        </header>

        <div className="bg-white shadow-lg rounded-lg p-2 mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            {[
              { key: "overview", label: "Company Overview", icon: FaUsers },
              {
                key: "benefits",
                label: "Benefits & Growth",
                icon: FaChartLine,
              },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
                  ${
                    activeTab === tab.key
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }
                `}>
                <tab.icon className="text-lg" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="p-6">{renderContent()}</div>
        </div>

        <section className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Human Resources Philosophy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in creating an ecosystem where employees can thrive,
            grow, and contribute to meaningful projects. Our HR approach focuses
            on holistic development, continuous learning, and creating an
            inclusive work environment that celebrates diversity and individual
            potential.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Careers;

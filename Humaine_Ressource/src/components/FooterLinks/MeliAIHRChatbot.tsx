import React, { useState } from "react";
import {
  FaRobot,
  FaClipboardList,
  FaComments,
  FaBalanceScale,
  FaBook,
  FaFileAlt,
  FaUser,
} from "react-icons/fa";

const MeliAIHRChatbot = () => {
  const [activeSection, setActiveSection] = useState("features");

  const chatbotFeatures = [
    {
      icon: <FaClipboardList className="text-2xl mb-2" />,
      title: "Employee Onboarding",
      description:
        "Streamline new hire orientation, documentation, and initial training processes.",
    },
    {
      icon: <FaBalanceScale className="text-2xl mb-2" />,
      title: "Compliance Assistance",
      description:
        "Navigate complex HR regulations and ensure organizational compliance.",
    },
    {
      icon: <FaBook className="text-2xl mb-2" />,
      title: "Training & Development",
      description:
        "Personalized learning recommendations and skill development tracking.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex justify-center items-center mb-4">
            <FaRobot className="text-5xl text-buttonColor mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">
              MeliAI HR Chatbot
            </h1>
          </div>
          <p className="text-gray-600">
            Your intelligent HR assistant, providing comprehensive support,
            guidance, and insights across all human resources functions.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-8">
          <div className="flex justify-center gap-4">
            {[
              { id: "features", label: "Features", icon: <FaClipboardList /> },
              { id: "support", label: "Support", icon: <FaComments /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className="flex items-center justify-center p-4 rounded-lg transition duration-300 hover:bg-blue-100">
                {React.cloneElement(item.icon, { className: "mr-2 text-xl" })}
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        {activeSection === "features" && (
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              AI-Powered HR Intelligence
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {chatbotFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300">
                  {feature.icon}
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "support" && (
          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              24/7 HR Support Channel
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-medium mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-4">
                  Direct AI-assisted support for all your HR-related queries and
                  concerns.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold">Email Support</p>
                  <p className="text-gray-600">hr.support@meliai.com</p>
                  <p className="font-semibold mt-2">Helpline</p>
                  <p className="text-gray-600">+1 (800) MELI-HR</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Support Channels</h3>
                <ul className="space-y-3">
                  <li className="bg-gray-50 p-3 rounded-lg flex items-center">
                    <FaComments className="mr-3 text-buttonColor" />
                    Live Chat Support
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg flex items-center">
                    <FaFileAlt className="mr-3 text-buttonColor" />
                    Ticket Management System
                  </li>
                  <li className="bg-gray-50 p-3 rounded-lg flex items-center">
                    <FaUser className="mr-3 text-buttonColor" />
                    Personal HR Consultant Scheduling
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default MeliAIHRChatbot;

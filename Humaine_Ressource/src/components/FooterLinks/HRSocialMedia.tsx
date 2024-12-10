import React, { useState } from "react";
import {
  FaUsers,
  FaChartBar,
  FaRegPaperPlane,
  FaRegCommentDots,
  FaUserTie,
  FaClipboardList,
  FaRegCalendarAlt,
  FaNetworkWired,
  FaUserCheck,
  FaAward,
} from "react-icons/fa";

const HRSocialMedia = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data for employee network and engagement
  const employeeNetworkStats = [
    { label: "Total Employees", value: 250, icon: <FaUsers /> },
    { label: "Active Network", value: "85%", icon: <FaNetworkWired /> },
    { label: "Engagement Rate", value: "72%", icon: <FaChartBar /> },
  ];

  const recruitmentChannels = [
    { platform: "LinkedIn", connections: 1200, newHires: 35 },
    { platform: "Internal Referrals", connections: 450, newHires: 22 },
    { platform: "Company Website", connections: 750, newHires: 15 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            HR Social Media Management
          </h1>
          <p className="text-gray-600 text-lg">
            Comprehensive platform for managing employee networks, recruitment,
            and organizational social presence
          </p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex mb-8 space-x-4">
          {[
            { id: "overview", label: "Overview", icon: <FaChartBar /> },
            { id: "recruitment", label: "Recruitment", icon: <FaUserTie /> },
            {
              id: "engagement",
              label: "Employee Engagement",
              icon: <FaRegCommentDots />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-blue-100"
                }
              `}>
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-10">
          {employeeNetworkStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white shadow-md rounded-lg p-6 flex items-center hover:shadow-xl transition-all duration-300">
              <div className="mr-4 text-buttonColor text-3xl">{stat.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {stat.value}
                </h3>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Recruitment Channels */}
        <section className="bg-white shadow-md rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Recruitment Channels
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recruitmentChannels.map((channel) => (
              <div
                key={channel.platform}
                className="bg-gray-50 p-6 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4">
                  {channel.platform}
                </h3>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Total Connections:</span>
                    <span className="font-bold">{channel.connections}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">New Hires:</span>
                    <span className="font-bold text-green-600">
                      {channel.newHires}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key HR Social Media Features */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaUserCheck />,
              title: "Employee Verification",
              description:
                "Validate and verify employee professional profiles and credentials.",
            },
            {
              icon: <FaRegPaperPlane />,
              title: "Internal Communication",
              description:
                "Streamline communication across departments and teams.",
            },
            {
              icon: <FaClipboardList />,
              title: "Performance Tracking",
              description: "Monitor and analyze employee performance metrics.",
            },
            {
              icon: <FaRegCalendarAlt />,
              title: "Event Management",
              description:
                "Organize and track corporate events and team-building activities.",
            },
            {
              icon: <FaNetworkWired />,
              title: "Professional Networking",
              description:
                "Enhance cross-departmental and inter-organizational connections.",
            },
            {
              icon: <FaAward />,
              title: "Recognition Program",
              description:
                "Implement and track employee achievement and recognition.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="text-4xl mb-4 text-buttonColor group-hover:text-blue-800 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HRSocialMedia;

import React, { useState } from "react";
import {
  FaFileContract,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaGraduationCap,
  FaUserTie,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const FAQItem = ({
  icon: Icon,
  question,
  answer,
  additionalDetails,
}: {
  icon: React.ComponentType<{ className?: string }>;
  question: string;
  answer: string;
  additionalDetails?: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-lg mb-4 overflow-hidden">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition duration-300">
        <div className="flex items-center space-x-4">
          <Icon className="text-buttonColor text-2xl" />
          <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        </div>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </div>
      {isOpen && (
        <div className="p-5 bg-gray-50 border-t">
          <p className="text-gray-700 mb-4">{answer}</p>
          {additionalDetails && (
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {additionalDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

const HRFAQPage = () => {
  const faqCategories = [
    {
      category: "Employment Policies",
      icon: FaFileContract,
      faqs: [
        {
          question: "What are the basic employment contract types?",
          answer:
            "We offer various contract types to suit different employment needs and legal requirements.",
          additionalDetails: [
            "Permanent Full-Time Contract",
            "Fixed-Term Contract",
            "Part-Time Contract",
            "Temporary/Seasonal Contract",
            "Freelance/Consultant Contract",
          ],
        },
        {
          question: "What is our probation period policy?",
          answer:
            "Our probation period is designed to ensure mutual fit and performance evaluation.",
          additionalDetails: [
            "Standard probation period is 3-6 months",
            "Performance review conducted mid-way and at end of probation",
            "Confirmation of employment based on satisfactory performance",
            "Additional training and support provided during probation",
          ],
        },
      ],
    },
    {
      category: "Leave and Time Off",
      icon: FaCalendarAlt,
      faqs: [
        {
          question: "What types of leave are available?",
          answer:
            "We provide comprehensive leave policies to support employee well-being and work-life balance.",
          additionalDetails: [
            "Annual Vacation Leave",
            "Sick Leave",
            "Maternity/Paternity Leave",
            "Bereavement Leave",
            "Personal Leave",
            "Study Leave",
            "Sabbatical Leave",
          ],
        },
        {
          question: "How do I request time off?",
          answer:
            "We have a streamlined process for requesting and approving time off.",
          additionalDetails: [
            "Submit request through online HR portal",
            "Notification sent to direct manager",
            "Approval usually processed within 2-3 business days",
            "Track leave balance in real-time",
            "Advance notice required for extended leaves",
          ],
        },
      ],
    },
    {
      category: "Compensation & Benefits",
      icon: FaMoneyBillWave,
      faqs: [
        {
          question: "What is our compensation structure?",
          answer:
            "We offer competitive and fair compensation packages aligned with industry standards.",
          additionalDetails: [
            "Base Salary",
            "Performance Bonuses",
            "Annual Increments",
            "Profit-Sharing Plans",
            "Salary Benchmarking",
            "Transparent Pay Scales",
          ],
        },
        {
          question: "What benefits do we provide?",
          answer:
            "Our comprehensive benefits package is designed to support employee health and well-being.",
          additionalDetails: [
            "Health Insurance",
            "Dental Coverage",
            "Vision Care",
            "Life Insurance",
            "Retirement Plans",
            "Employee Assistance Program",
            "Wellness Programs",
          ],
        },
      ],
    },
    {
      category: "Professional Development",
      icon: FaGraduationCap,
      faqs: [
        {
          question: "What training opportunities are available?",
          answer:
            "We are committed to continuous learning and professional growth.",
          additionalDetails: [
            "Internal Training Programs",
            "External Workshop Sponsorships",
            "Online Learning Platforms",
            "Mentorship Programs",
            "Skill Development Workshops",
            "Leadership Training",
            "Conference Attendance Support",
          ],
        },
      ],
    },
    {
      category: "Performance Management",
      icon: FaUserTie,
      faqs: [
        {
          question: "How does performance evaluation work?",
          answer:
            "Our performance management system is designed to be fair, transparent, and supportive.",
          additionalDetails: [
            "Bi-annual performance reviews",
            "360-degree feedback mechanism",
            "Goal-setting and tracking",
            "Performance improvement plans",
            "Recognition and rewards",
            "Career progression discussions",
          ],
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Human Resources FAQ
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive answers to frequently asked questions about our HR
            policies and processes
          </p>
        </header>

        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-10">
            <div className="flex items-center mb-6">
              <category.icon className="text-buttonColor text-3xl mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">
                {category.category}
              </h2>
            </div>
            {category.faqs.map((faq, faqIndex) => (
              <FAQItem
                key={faqIndex}
                icon={category.icon}
                question={faq.question}
                answer={faq.answer}
                additionalDetails={faq.additionalDetails}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HRFAQPage;

import React from "react";

const BlogInsights = () => {
  const blogPosts = [
    {
      title: "The Future of HR: Embracing AI",
      description:
        "AI is transforming HR by automating repetitive tasks and enhancing decision-making capabilities.",
    },
    {
      title: "Importance of Employee Well-Being",
      description:
        "Employee wellness plays a crucial role in creating a productive and engaged workforce.",
    },
    {
      title: "Building a Diverse Workforce",
      description:
        "Diversity in the workplace fosters innovation and leads to better business outcomes.",
    },
    {
      title: "Remote Work and Its Impact on HR",
      description:
        "Explore how remote work is changing HR practices, from recruitment to employee engagement.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Page Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">
            HR Blog & Insights
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Explore the latest trends and best practices in Human Resources.
          </p>
        </header>

        {/* Blog List */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <a href="#" className="text-blue-600 mt-4 inline-block">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogInsights;

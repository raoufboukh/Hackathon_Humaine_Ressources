import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Contact() {
  return (
    <>
      <Header />
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>

          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                placeholder="Write your message"
                required></textarea>
            </div>

            {/* Send Button */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Employee from "./components/Employee/Employee";
import Doc from "./components/Employee/Doc";
import Settings from "./components/Employee/Settings";
import Attendance from "./components/Employee/Attendance";
import Performance from "./components/Employee/Performance";
import Profile from "./components/Employee/Profile";
import Support from "./components/Employee/Support";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Service from "./components/Service";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Chatbot from "./components/Chatbot/Chat";
import EmployeeManagement from "./components/FooterLinks/EmployeeManagement";
import AttendanceTracking from "./components/FooterLinks/AttendanceTracking";
import HRAnalytics from "./components/FooterLinks/HRAnalytics";
import PaymentFiles from "./components/FooterLinks/PaymentFiles";
import AccountantReports from "./components/FooterLinks/AccountantReports";
import Careers from "./components/FooterLinks/Careers";
import HRSocialMedia from "./components/FooterLinks/HRSocialMedia";
import HRPrivacyPolicy from "./components/FooterLinks/HRPrivacyPolicy";
import HRFAQPage from "./components/FooterLinks/HRFAQPage";
import MeliAIHRChatbot from "./components/FooterLinks/MeliAIHRChatbot";
import BlogInsights from "./components/FooterLinks/BlogInsights";
// import Admin from "./components/Admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing />
              <Services />
              <Work />
              <Footer />
            </>
          }
        />
        <Route path="/employee" element={<Employee />} />

        <Route path="/performance" element={<Performance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Employee />} />
        <Route path="/document" element={<Doc />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<ErrorPage />} />

        <Route path="/employee/document" element={<Doc />} />
        <Route path="/employee/settings" element={<Settings />} />

        <Route path="/employee/attendance" element={<Attendance />} />
        <Route path="/employee/performance" element={<Performance />} />
        <Route path="/employee/profile" element={<Profile />} />
        <Route path="/employee/support" element={<Support />} />

        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/employee-managment" element={<EmployeeManagement />} />
        <Route path="/attendance-tracking" element={<AttendanceTracking />} />
        <Route path="/hr-analytics" element={<HRAnalytics />} />
        <Route path="/payment-files" element={<PaymentFiles />} />
        <Route path="/acountant-reports" element={<AccountantReports />} />
        <Route path="/carrers" element={<Careers />} />
        <Route path="/social-media" element={<HRSocialMedia />} />
        <Route path="/privacy-policy" element={<HRPrivacyPolicy />} />
        <Route path="/faqs" element={<HRFAQPage />} />
        <Route path="/meliAI-ChatBot" element={<MeliAIHRChatbot />} />
        <Route path="/blogs" element={<BlogInsights />} />
        <Route path="/chatbot" element={<Chatbot />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

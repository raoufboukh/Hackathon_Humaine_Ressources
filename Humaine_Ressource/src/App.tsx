import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Employee from "./components/Employee/Employee";
import Doc from "./components/Employee/Doc";
import Settings from "./components/Employee/Settings";
import Vacation from "./components/Employee/Vacation";
import Performance from "./components/Employee/Performance";
import Profile from "./components/Employee/Profile";
import Support from "./components/Employee/Support";
import Contact from "./components/Contact";
import Service from "./components/Service";
import About from "./components/About";
import ContacUS from "./components/FooterLinks/ContacUS";
import AboutUs from "./components/FooterLinks/AboutUs";
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
        <Route path="/employee/document" element={<Doc />} />
        <Route path="/employee/settings" element={<Settings />} />
        <Route path="/employee/vacation" element={<Vacation />} />
        <Route path="/employee/performance" element={<Performance />} />
        <Route path="/employee/profile" element={<Profile />} />
        <Route path="/employee/support" element={<Support />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact-us" element={<ContacUS />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route
          path="/features/employee-management"
          element={<EmployeeManagement />}
        />
        <Route
          path="/features/attendance-tracking"
          element={<AttendanceTracking />}
        />
        <Route path="/features/hr-analytics" element={<HRAnalytics />} />
        <Route path="/features/payment-files" element={<PaymentFiles />} />
        <Route
          path="/features/accountant-reports"
          element={<AccountantReports />}
        />
        <Route path="/careers" element={<Careers />} />
        <Route path="/social-media" element={<HRSocialMedia />} />
        <Route path="/privacy-policy" element={<HRPrivacyPolicy />} />
        <Route path="/faqs" element={<HRFAQPage />} />
        <Route path="/meliAI-chatbot" element={<MeliAIHRChatbot />} />
        <Route path="/blogs" element={<BlogInsights />} />
      </Routes>
    </>
  );
}

export default App;

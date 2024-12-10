import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Employee from "./components/Employee/Employee";
import Doc from "./components/Employee/Doc";
import Settings from "./components/Employee/Settings";
import Service from "./components/Service";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";

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
<Route path="/Service" element={<Service />} />
<Route path="/About" element={<About />} />
<Route path="/login" element={<Login />} />
<Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* )} */}
    </>
  );
}

export default App;

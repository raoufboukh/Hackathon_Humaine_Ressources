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
<<<<<<< HEAD
=======
import ErrorPage from "./components/ErrorPage";
>>>>>>> 668825fc5439b4a0f5504c1cedd2a3670b9ca05a
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
<<<<<<< HEAD
=======
        {/* <<<<<<< HEAD */}
>>>>>>> 668825fc5439b4a0f5504c1cedd2a3670b9ca05a
        <Route path="/employee/vacation" element={<Vacation />} />
        <Route path="/employee/performance" element={<Performance />} />
        <Route path="/employee/profile" element={<Profile />} />
        <Route path="/employee/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
=======
        <Route path="*" element={<ErrorPage />} />
        {/* >>>>>>> 3c4d2f64fe040dffe1cb96501b2ba7c270cbdd38 */}
>>>>>>> 668825fc5439b4a0f5504c1cedd2a3670b9ca05a
      </Routes>
      {/* )} */}
    </>
  );
}

export default App;

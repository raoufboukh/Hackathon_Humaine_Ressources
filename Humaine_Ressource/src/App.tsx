import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Employee from "./components/Employee/Employee";
import Doc from "./components/Employee/Doc";
<<<<<<< HEAD
import Settings from "./components/Employee/Settings";
=======
import Vacation from "./components/Employee/Vacation";
>>>>>>> 3b8cbc7730ebb710385bce9e61dc554116d020d7

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
<<<<<<< HEAD
        <Route path="/employee/settings" element={<Settings />} />
        {/* <Route path="/employee/vacation" element={<Vacation />} />
        <Route path="/employee/performance" element={<Performance />} />*/}
=======
        <Route path="/employee/vacation" element={<Vacation />} />
        {/* <Route path="/employee/performance" element={<Performance />} /> */}
>>>>>>> 3b8cbc7730ebb710385bce9e61dc554116d020d7
      </Routes>
    </>
  );
}

export default App;

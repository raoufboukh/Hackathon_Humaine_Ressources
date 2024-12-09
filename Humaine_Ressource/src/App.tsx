import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Header />
      <Landing />
      <Routes>
        <Route path="" element={""} />
        <Route path="" element={""} />
        <Route path="" element={""} />
      </Routes>
    </>
  );
}

export default App;

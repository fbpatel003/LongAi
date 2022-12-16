import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectPage from "./Components/ProjectPage";
import DashBoard from "./Components/DashBoard";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectPage />}>
          <Route path="/MyProject" element={<ProjectPage />} />
          <Route path="/Dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

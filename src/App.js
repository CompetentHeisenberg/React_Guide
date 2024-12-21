import React from "react";
import MPAGE from "./pages/mpage";
import HTMLPAGE from "./pages/html_tut";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MPAGE />} />
          <Route path="/html" element={<HTMLPAGE />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

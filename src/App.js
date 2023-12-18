// import { BrowserRouter } from "react-router-dom";
// import "./App.css";
// import LandingPage from "./components/MainLanding";

// function App() {
//   return (
//     <div>
//     <BrowserRouter>
//     <LandingPage> </LandingPage>
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App;


// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/MainLanding";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
};

export default App;

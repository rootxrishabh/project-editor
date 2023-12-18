
// import React from "react";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <div>
//       <h1>Welcome to CodeLand!</h1>
//       <p>Let's Code!</p>
//       <Link to="./Landing">
//         <button>Start Coding</button>
//       </Link>
//     </div>
//   );
// };

// export default LandingPage;

// LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../LandingPage.css"; // Import your CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-content">
        <h1>Welcome to MorseCodef!</h1>
        <p>Let's Code!</p>
        <Link to="/landing">
          <button className="start-coding-button">Start Coding</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;


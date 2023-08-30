import React, { useState } from "react";
import Spinner from "./Spinner";
const MainFile = () => {
  const [isOpen, setIsopen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  // const [checkfirst, setcheckfirst] = useState(false);
  const [dropdownActive1, setDropdownActive1] = useState(false);
  const [dropdownActive2, setDropdownActive2] = useState(false);
  const [dropdownActive3, setDropdownActive3] = useState(false);
  const [dropdownActive4, setDropdownActive4] = useState(false);
  const [dropdownActive5, setDropdownActive5] = useState(false);
  const [dropdownActive6, setDropdownActive6] = useState(false);
  const [dropdownActive7, setDropdownActive7] = useState(false);
  const [dropdownActive8, setDropdownActive8] = useState(false);
  const [dropdownActive9, setDropdownActive9] = useState(false);
  const [dropdownActive10, setDropdownActive10] = useState(false);
  const [result, setResult] = React.useState(".");
    const [question, setQuestion] = React.useState("");

  //   const [loading, setLoading] = React.useState(false);
  const handlequestion = async () => {
    setLoading(true);
    let response = await fetch("http://localhost:5000/handleAPIRequest", {
      method: "POST",
      body: JSON.stringify({
        question,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    // console.log(response.data);
    setResult(response.data);
    setQuestion("");
    setLoading(false);
  };



  const toggleDropdown1 = () => {
    setDropdownActive1(!dropdownActive1);
  };
  const toggleDropdown2 = () => {
    setDropdownActive2(!dropdownActive2);
  };
  const toggleDropdown3 = () => {
    setDropdownActive3(!dropdownActive3);
  };
  const toggleDropdown4 = () => {
    setDropdownActive4(!dropdownActive4);
  };
  const toggleDropdown5 = () => {
    setDropdownActive5(!dropdownActive5);
  };
  const toggleDropdown6 = () => {
    setDropdownActive6(!dropdownActive6);
  };
  const toggleDropdown7 = () => {
    setDropdownActive7(!dropdownActive7);
  };
  const toggleDropdown8 = () => {
    setDropdownActive8(!dropdownActive8);
  };
  const toggleDropdown9 = () => {
    setDropdownActive9(!dropdownActive9);
  };
  const toggleDropdown10 = () => {
    setDropdownActive10(!dropdownActive10);
  };

  return (
    <div>
      <div className="mainheading">
        <h1>Basics of rocket</h1>
      </div>
      <div className="innerdata">
        <div>
          <button className="dropbtn" onClick={toggleDropdown1}>
            Day-1: Introduction to Rockets
          </button>
          <div className={`dropdown-content ${dropdownActive1 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Understand the historical significance and purposes of
                rockets.
              </li>
              <li className="no-bullet">
                • Differentiate between space rockets and other types of
                vehicles.
              </li>
              <li className="no-bullet">
                • Discover how rockets have played a role in space exploration.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive1 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown2}>
            Day-2: Propulsion Basics
          </button>
          <div className={`dropdown-content ${dropdownActive2 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Explore Newton's third law of motion and how it relates to
                rocket propulsion.
              </li>
              <li className="no-bullet">
                • Learn about the action-reaction principle and its significance
                in rocketry.
              </li>
              <li className="no-bullet">
                • Discuss the fundamental principles of generating thrust in
                rocket engines.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive2 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown3}>
            Day-3: Rocket Components
          </button>
          <div className={`dropdown-content ${dropdownActive3 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Study the key components of a rocket, including payload,
                stages, and engines.
              </li>
              <li className="no-bullet">
                • Understand the roles of each component in the rocket's
                journey.
              </li>
              <li className="no-bullet">
                • Discuss how the arrangement of components contributes to a
                rocket's functionality.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive3 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown4}>
            Day-4: Rocket Design and Aerodynamics
          </button>
          <div className={`dropdown-content ${dropdownActive4 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Learn about the importance of aerodynamics in rocket design.
              </li>
              <li className="no-bullet">
                • Explore the concept of center of gravity and its impact on
                stability.
              </li>
              <li className="no-bullet">
                • Understand how the shape of a rocket influences its flight
                trajectory.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive4 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown5}>
            Day-5: Space Exploration and Launch Vehicles
          </button>
          <div className={`dropdown-content ${dropdownActive5 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Discover various space agencies and their contributions to
                space exploration.
              </li>
              <li className="no-bullet">
                • Learn about different launch vehicles used to carry payloads
                into space.
              </li>
              <li className="no-bullet">
                • Understand the challenges and considerations in launching
                vehicles beyond Earth's atmosphere.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive5 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown6}>
            Day-6: Newton's Laws in Rocketry
          </button>
          <div className={`dropdown-content ${dropdownActive6 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Recap Newton's three laws of motion and how they apply to
                rockets.
              </li>
              <li className="no-bullet">
                • Discuss the forces acting on a rocket during different phases
                of flight.
              </li>
              <li className="no-bullet">
                • Explore the relationship between force, mass, and acceleration
                in rocketry.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive6 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown7}>
            Day-7: Rocket Propulsion Systems
          </button>
          <div className={`dropdown-content ${dropdownActive7 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Differentiate between liquid and solid propellant rocket
                engines.
              </li>
              <li className="no-bullet">
                • Learn about thrust-to-weight ratio and its significance in
                rocket design.
              </li>
              <li className="no-bullet">
                • Discuss the efficiency and limitations of various propulsion
                systems.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive7 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown8}>
            Day-8: Mission Planning and Trajectories
          </button>
          <div className={`dropdown-content ${dropdownActive8 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Understand the phases of a rocket mission: launch, ascent,
                orbit, and reentry.
              </li>
              <li className="no-bullet">
                • Explore different types of trajectories, such as suborbital
                and orbital.
              </li>
              <li className="no-bullet">
                • Discuss the calculations and considerations involved in
                planning rocket missions.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive8 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown9}>
            Day-9: Challenges in Rocket Science
          </button>
          <div className={`dropdown-content ${dropdownActive9 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Study the effects of microgravity on human bodies and
                materials.
              </li>
              <li className="no-bullet">
                • Explore the issue of space debris and its impact on space
                exploration.
              </li>
              <li className="no-bullet">
                • Discuss solutions and innovations aimed at addressing these
                challenges.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`shift-down ${dropdownActive9 ? "shift-down-active" : ""}`}
        >
          <button className="dropbtn" onClick={toggleDropdown10}>
            Day-10: Future of Space Exploration
          </button>
          <div className={`dropdown-content ${dropdownActive10 ? "show" : ""}`}>
            <ul>
              <li className="no-bullet">
                • Discuss upcoming trends and innovations in rocket technology.
              </li>
              <li className="no-bullet">
                • Explore the possibilities of human settlement on other
                celestial bodies.
              </li>
              <li className="no-bullet">
                • Understand how advancements in rocketry contribute to the
                future of space exploration.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div className="fixed-button">
          <button
            className="btn btn-primary insidenavbar"
            onClick={ToggleSidebar}
          >
            Chatbot
          </button>
        </div>

        
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="sd-header">
  <h4 className="mb-0">Chatbot</h4>
  <div className="btn btn-primary" onClick={ToggleSidebar}>
    <i >Close</i>
  </div>
</div>
<div className="input-group">
  <textarea
    type="text"
    placeholder="Enter Your Question"
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
  />
  <button type="submit" onClick={handlequestion}>
    Submit
  </button>
</div>

        <div className="sd-body">
          <div className="result">
          <hr />
            {result !== '' && !loading ? (
              <div>{result}</div>
            ) : (
              <div>
                <Spinner />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={ToggleSidebar}
      ></div>
    </div>
    </div>
  );
};

export default MainFile;

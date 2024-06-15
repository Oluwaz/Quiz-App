import React from "react";
import "./welcome.css";
import { Link } from "react-router-dom";
import Question from "../Question";
import htmlicon1 from "../../starter-code/assets/images/icon-html.svg";
import htmlicon2 from "../../starter-code/assets/images/icon-css.svg";
import htmlicon3 from "../../starter-code/assets/images/icon-js.svg";
import htmlicon4 from "../../starter-code/assets/images/icon-accessibility.svg";
import background from "../../starter-code/assets/images/pattern-background-desktop-light.svg";



const Welcome = () => {
  return (
    <section className="Welcome">
      <div className="Initial">
        <h1 className="initial-h1">
          <span id="own">Welcome to the </span> <br /> Frontend Quiz!
        </h1>
        <p className="initial-p">Pick a subject to get started.</p>
      </div>

      <div className="column-container">
        <Link id="link" to="/questions" state={{ index: 0 }}>
          <div className="column-item">
            <div style={{ background: "#fff1e9" }} className="img-div">
              <img className="img-out" src={htmlicon1} />
            </div>
            HTMLS
          </div>
        </Link>
        <Link id="link" to="/questions" state={{ index: 1 }}>
          <div className="column-item">
            <div style={{ background: "#e0fdff" }} className="img-div">
              <img className="img-out" src={htmlicon2} />
            </div>
            CSS
          </div>
        </Link>
        <Link id="link" to="/questions" state={{ index: 2 }}>
          <div className="column-item">
            <div style={{ background: "#ebf0ff" }} className="img-div">
              <img className="img-out" src={htmlicon3} />
            </div>
            JavaScript
          </div>
        </Link>
        <Link id="link" to="/questions" state={{ index: 3 }}>
          <div className="column-item">
            <div style={{ background: "#f6e7ff" }} className="img-div">
              <img className="img-out" src={htmlicon4} />
            </div>
            ACCESSIBILITY
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Welcome;

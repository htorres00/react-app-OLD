import { useEffect } from "react";
import logo from "../images/logo.png";
import { BsClockFill } from "react-icons/bs";
import Radium, { StyleRoot } from "radium";
import { fadeInUp } from "react-animations";

const styles = {
  fadeInUp: {
    animation: "x 1s",
    animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
  },
};


const Welcome = (props) => {
  let textInput = null;
  const firstName = new URLSearchParams(window.location.search).get('first_name') || "";

  useEffect(() => {
    textInput.focus();
  }, []);

  useEffect(() => {
    //console.log(props, "default props");
  }, []);
  return (
    <StyleRoot>
      <div className="welcome-screen" style={styles.fadeInUp}>
        <img src={logo} className="logo" alt="logo" />
        <h1>
          Hello{firstName ? ` ` : ''}{firstName},
          please respond to a few questions to get your service request started:
        </h1>
        <div className="butnWraper">
          <button
            className="start-form"
            onClick={props.nextStep}
            ref={(button) => {
              textInput = button;
            }}
          >
            Start
          </button>
          <span className="press">press Enter ↵</span>
        </div>

        <span className="form-fill-time">
          <BsClockFill></BsClockFill> Takes 3 mins
        </span>
      </div>
    </StyleRoot>
  );
};

export default Welcome;

import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
// import "../App.css";

const LearningObjectives = () => {
  const [Learningobjectives, setLearningobjectives] = useState([]);

  useEffect(() => {
    getLearningobjectives();
  }, []);

  const getLearningobjectives = () => {
    Axios.get("http://localhost:3003/learningobjectives").then((response) => {
      // setLearningobjectives(response.data);
      console.log(response.data);
      const allLearningobjectives = response.data;
      setLearningobjectives(allLearningobjectives);
      // console.log(Learningobjectives);
    });
  };
  let someHtml = Learningobjectives.map((value, key) => {
    return value.LearningObjective;
  });
  console.log("someHtml:" + someHtml);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: someHtml }}></div>
      {/* <div dangerouslySetInnerHTML={{ __html: someHtml }}></div> */}
      {/* dangerouslySetInnerHTML={{ __html: "<h1>Hi there!</h1>" }} */}

      {/* {Learningobjectives.map((value, key) => {
        return value.LearningObjective;
      })} */}
      {/* <div className="LOcontainer">
        <div className="LOtitleWrapper">
          <div className="LOtitle">Explore Scratch blocks</div>
          <div className="LOText">
            Learn the basic function of some basic scratch blocks such as "Say",
            "wait", "go to" and
          </div>
        </div>
        <div className="LOBlocksContainer">
          <div className="LOBlocksLeft">
            <div className="LOSubtitle">Look Blocks</div>
            <div className="LookBlockWrapper">
              <div className="LookBlockLeft">
                <img
                  src="../Images/Student Areas/Screen Shot 2020-04-29 at 9.09.52 PM@2x.png"
                  alt="#"
                ></img>
              </div>
              <div className="LookBlockRight">
                <img
                  src="../Images/Student Areas/Screen Shot 2020-04-25 at 11.30.04 PM@2x.png"
                  alt="#"
                ></img>
                <img
                  className="LookBlockRightPIC2"
                  src="../Images/Student Areas/Screen Shot 2020-04-25 at 11.32.03 PM@2x.png"
                  alt="#"
                ></img>
              </div>
            </div>
          </div>
          <div className="LOBlocksMiddle">
            <div className="LOSubtitle">Control Blocks</div>
            <div className="ControlBlockWrapper">
              <div className="ControlBlockLeft">
                <img
                  src="../Images/Student Areas/Screen Shot 2020-04-29 at 9.10.19 PM@2x.png"
                  alt="#"
                ></img>
              </div>
              <div className="ControlBlockRight">
                <img
                  src="../Images/Student Areas/Screen Shot 2020-04-25 at 11.30.43 PM@2x.png"
                  alt="#"
                ></img>
              </div>
            </div>
          </div>
          <div className="LOBlocksRight">
            <div className="LOSubtitle">Motion Blocks</div>
            <div className="MotionBlockWrapper">
              <div className="MotionBlockLeft">
                <img
                  src="../Images/Student Areas/Screen Shot 2020-04-29 at 9.10.04 PM@2x.png"
                  alt="#"
                ></img>
              </div>
              <div className="MotionBlockRight">
                <img
                  src="../Images/Student Areas/Screen Shot 2020-04-25 at 11.30.57 PM@2x.png"
                  alt="#"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
    </>
  );
};

export default LearningObjectives;

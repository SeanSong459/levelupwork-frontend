import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const Instructions = () => {
  const [Instruction, SetInstruction] = useState([]);

  useEffect(() => {
    getInstruction();
  }, []);

  const getInstruction = () => {
    Axios.get("http://localhost:3003/Instructions").then((response) => {
      console.log(response.data);
      SetInstruction(response.data);
    });
  };

  let someHtml = Instruction.map((value, key) => {
    return value.Instructions;
  });
  console.log("someHtml:" + someHtml);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: someHtml }}></div>
      {/* <div className="InstructionWrapper">
        <div className="InsArrowLeft">
          <img src="../../Images/Student Areas/asset1.png"></img>
        </div>
        <div className="InsMiddleWrapper">
          <div className="InstructionTitle">1. JOIN SCRATCH</div>
          <div className="InstructionTextWrapper">
            <div className="InstructionText">
              if you haven't used Scratch before, you will need to join Scratch
              first.
            </div>
            <div className="InstructionText">
              Go to https://scratch.mit.edu Click on{" "}
              <span className="JoinButton">Join Scratch</span>
            </div>
          </div>
          <img
            src="../../Images/Student Areas/Screen Shot 2020-04-25 at 9.10.36 PM.png"
            alt="*"
          ></img>
          <div className="InstructionTextWrapper2">
            <div className="InstructionText">
              Follow the instructions to join. You will need a username and a
              password that you will remember. If possible, you should also
              verify your email address so that you can Share projects later.
              Ask your teacher to help with this step if you don't have an email
              address, or if you are not sure what to do.
            </div>
          </div>
        </div>

        <div className="InsArrowRight">
          <img src="../../Images/Student Areas/asset2.png"></img>
        </div>
      </div> */}
    </>
  );
};

export default Instructions;

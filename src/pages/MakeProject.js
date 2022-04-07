import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";

const MakeProject = () => {
  const { StudentID } = useParams();

  const [ProjectScreenshot, SetProjectScreenshot] = useState([]);

  useEffect(() => {
    getScreenshot();
  }, [StudentID]);

  const getScreenshot = () => {
    Axios.get(`http://localhost:3003/MakeProject/${StudentID}`).then(
      (response) => {
        console.log(response.data);
        SetProjectScreenshot(response.data);
      }
    );
  };

  let Screenshot = ProjectScreenshot.map((value, key) => {
    return value.Submission;
  });

  return (
    <div className="MPWrapper">
      <img src={Screenshot}></img>
      {/* <img src="/Images/Student Areas/Screen Shot -1.png"></img> */}
    </div>
  );
};

export default MakeProject;

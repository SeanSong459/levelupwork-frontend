import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

const LearningObjectives = () => {
  const [Learningobjectives, setLearningobjectives] = useState([]);

  useEffect(() => {
    getLearningobjectives();
  }, []);

  const getLearningobjectives = () => {
    Axios.get("http://localhost:3003/learningobjectives").then((response) => {
      console.log(response.data);
      const allLearningobjectives = response.data;
      setLearningobjectives(allLearningobjectives);
    });
  };
  let someHtml = Learningobjectives.map((value, key) => {
    return value.LearningObjective;
  });
  console.log("someHtml:" + someHtml);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: someHtml }}></div>
    </>
  );
};

export default LearningObjectives;

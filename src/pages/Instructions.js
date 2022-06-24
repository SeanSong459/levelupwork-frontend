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
    </>
  );
};

export default Instructions;

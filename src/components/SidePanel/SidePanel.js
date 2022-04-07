import * as React from "react";
import CheckboxControl from "./CheckboxControl";
import { useState } from "react";
import "./SidePanel.css";

const SidePanel = () => {
  // const [Free, setFree] = useState(0);

  // useEffect(() => {
  //   getFree();
  // }, []);

  // const getFree = ()=> {
  //   fetch('localhost:3003/Projects', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       Subscription: 'Free',
  //     }),
  //   })
  //   .then((response) => {
  //     console.log("/Projects response:", response.data);
  //     setFree(response.data);
  //   })
  //     // .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log('error', error));

  // }

  return (
    <>
      <div className="panelWrapper">
        <div className="panelTitle">subcription</div>
        <hr />
        <CheckboxControl
          label="Free"
          // onChange={(event) => {
          //   setFree(event.target.value);
          // }}
        />
        <CheckboxControl label="Premium" />
        <div className="panelTitle">activity type</div>
        <hr />

        <CheckboxControl label="Animation" />
        <CheckboxControl label="Game" />
        <CheckboxControl label="Chatbot" />
        <CheckboxControl label="Augmented Reality" />

        <div className="panelTitle">year level</div>
        <hr />
        <CheckboxControl label="1 - 4" />
        <CheckboxControl label="5 - 6" />
        <CheckboxControl label="7 - 8" />
        <CheckboxControl label="9 - 13" />

        <div className="panelTitle">subject matter</div>
        <hr />
        <CheckboxControl label="Computer Science" />
        <CheckboxControl label="Maths" />
        <CheckboxControl label="Science" />
        <CheckboxControl label="Language" />
        <CheckboxControl label="Art" />
        <CheckboxControl label="Music" />
      </div>
    </>
  );
};

export default SidePanel;

import React from "react";
import "./HomePageContent1.css";

const HomePageContent1 = () => {
  return (
    <>
      {" "}
      <div className="section1container">
        <div className="sec1textwrapper">
          <div className="phrase">
            <h1>
              Prepare young minds for a better
              <span className="textfuture">future.</span>
            </h1>
          </div>
          {/* </div> */}
          <div className="txt">
            <p>
              Let us help you advance students in Digital Technologies and other
              learning areas with our project-based learning programme.
            </p>
          </div>
        </div>

        <div className="content-button">
          <div className="button1">LEARN MORE</div>
          <div className="button2">SIGN UP</div>
        </div>
        <div
          className="text-message
            "
        >
          *Basic subscription includes the first 15 projects free of charge.
        </div>
      </div>
    </>
  );
};

export default HomePageContent1;

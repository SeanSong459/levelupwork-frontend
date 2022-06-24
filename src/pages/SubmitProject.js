import React from "react";

const SubmitProject = () => {
  return (
    <>
      <div>
        <div className="SPWrapper">
          <div className="SPLeftWrapper">
            <img
              className="SPImg1"
              src="/Images/Student Areas/Screen Shot -1.png"
              alt="*"
            ></img>

            <div className="SPTitle">Submit project photo</div>
            <div className="SPText">
              After completing your project, take a screenshot of your project
              and upload it here
            </div>
            <button className="SPButtonWrapper">
              <img
                src="/Images/Student Areas/Icon material-photo.png"
                alt="*"
              ></img>
              <h5>Send Photo</h5>
            </button>
          </div>
          <div className="SPRightWrapper">
            <img
              className="SPImg1"
              src="/Images/Student Areas/annie-spratt-VFupoYdEYNs-unsplash.png"
              alt="*"
            ></img>

            <div className="SPTitle">Show your teacher</div>
            <div className="SPTextWrapper">
              <div className="SPText">
                If your teacher is in the same room as you, click the button
                below to let them know you are done.
              </div>
            </div>

            <button className="SPButtonWrapper2">
              <img
                src="/Images/Student Areas/Icon awesome-chalkboard-teacher.png"
                alt="*"
              ></img>
              <h5>Call Teacher</h5>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmitProject;

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

const ShowClasses = (props) => {
  const { courseName, description, time, imageUrl, teachersName } =
    props.course;

  const cardStyle = {
    img: {
      width: "100%",
      height: "200px",
      align: "center",
      justifyContent: "center",
    },

    buttonStyle: {
      padding: " 5px 20px",
      border: "none",
      borderRadius: "20px",
      backgroundColor: "#21B573",
      color: "white",
      width: "100px",
    },
  };

  return (
    <div className="">
      <div
        style={{
          margin: "10px",
          borderRadius: "20px",
          padding: "10px",
          boxShadow: "0px 10px 40px rgb(0 0 0 / 10%",
        }}
      >
        <img
          style={cardStyle.img}
          class="card-img-top"
          src={imageUrl}
          alt="Card image cap"
        />
        <div class="card-body">
          <div className="row">
            <div className="col-md-6">
              <h5 class="card-title">{courseName}</h5>
            </div>
            <div className="col-md-6">
              <h5 class="card-title">
                <span style={{ color: "green" }}>Teacher</span>: {teachersName}
              </h5>
            </div>
          </div>
          <p class="card-text">{description}</p>
          <FontAwesomeIcon icon={faCalendarWeek} className="mr-2" />{" "}
          <span>{time}</span>
          <button
            style={cardStyle.buttonStyle}
            type="button"
            class="btn  btn-lg btn-block mt-3"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowClasses;

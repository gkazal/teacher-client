import React from "react";
import image from "../../../../../images/Illustration.png";

const HeaderMain = () => {
  return (
    <div>
      <main className="row d-flex align-items-center offset-md-1 mt-5 pb-5">
        <div className="headerText col-md-5">
          <h1 className="text-bolt">
            Learn With Fun <br /> on any schedule
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />{" "}
            Itaque reiciendis rem, nisi ratione quisquam inventore.
          </p>

          <button
            class=" btn"
            style={{
              padding: " 5px 20px",
              border: "none",
              borderRadius: "20px",
              backgroundColor: "#21B573",
              color: "white",
            }}
          >
            JOIN US
          </button>
        </div>
        <div className="headerImage col-md-6">
          <img style={{ width: "80%", height: "100%" }} src={image} alt="" />
        </div>
      </main>
    </div>
  );
};

export default HeaderMain;

import React, { useEffect, useState } from "react";
import ShowClasses from "./ShowClasses";

const Classes = () => {
  const [course, setCourse] = useState([]);

  // show course list from DB
  useEffect(() => {
    fetch("http://localhost:6066/course")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);
  return (
    <div className="">
      <h2 className="d-flex justify-content-center mt-5">Our Courses</h2>
      <div className="row d-flex justify-content-center  mt-5">
        {course.map((course) => (
          <ShowClasses course={course}></ShowClasses>
        ))}
      </div>
    </div>
  );
};

export default Classes;

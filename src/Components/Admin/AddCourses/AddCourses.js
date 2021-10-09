import React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";

const AddCourses = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    const evenData = {
      teachersName: data.TeachersName,
      courseName: data.CourseName,
      description: data.Description,
      time: data.Timing,
      imageUrl: imageUrl,
    };
    const url = "http://localhost:6066/addCourse";
    console.log(evenData);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(evenData),
    }).then((res) => console.log("server side response", res));
    alert("Inserted Successfully");
  };

  const handleImage = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "0793feeaa770948dd7157bdf72c5c908");
    imageData.append("image", event.target.files[0]);
    fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: imageData,
    })
      .then((response) => response.json())
      .then((data) => {
        // setImageUrl(data.data.display_url)
        setImageUrl(data.data.display_url);
        // console.log(data)
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  return (
    <div>
      <div className="service-bg" style={{ marginTop: "150px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            style={{ color: "green", fontSize: "30px", fontWeight: "bold" }}
            for="validationTooltip01"
          >
            Teachers Name
          </label>
          <br />
          <input
            name="teachersName"
            defaultValue=""
            {...register("TeachersName")}
            required
          />
          <br />
          <label
            style={{ color: "green", fontSize: "30px", fontWeight: "bold" }}
            for="validationTooltip01"
          >
            Course Name
          </label>
          <br />
          <input
            name="courseName"
            defaultValue=""
            {...register("CourseName")}
            required
          />
          <br />
          <label
            style={{ color: "green", fontSize: "30px", fontWeight: "bold" }}
            for="validationTooltip01"
          >
            Description
          </label>
          <br />
          <input
            name="description"
            defaultValue=""
            {...register("Description")}
            required
          />
          <br />
          <label
            style={{ color: "green", fontSize: "30px", fontWeight: "bold" }}
            for="validationTooltip01"
          >
            Timing
          </label>
          <br />
          <input name="time" defaultValue="" {...register("Timing")} required />
          <br />
          <label
            style={{ color: "green", fontSize: "30px", fontWeight: "bold" }}
            for="validationTooltip01"
          >
            Choose Image
          </label>{" "}
          <br />
          <input name="example" type="file" onChange={handleImage} />
          <br />
          <input
            style={{ cursor: "pointer" }}
            className="submit-btn"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCourses;

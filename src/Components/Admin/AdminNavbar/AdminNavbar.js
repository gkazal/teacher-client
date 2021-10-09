import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light col-md-10 offset-md-1 ">
        E-School
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link mr-3" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link mr-3" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link mr-3" to="#">
                Add Teacher
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link mr-3" to="addCourse">
                Add Course
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;

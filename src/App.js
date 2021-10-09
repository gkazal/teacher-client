import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home/Home";
import AddCourses from "./Components/Admin/AddCourses/AddCourses";
import DashboardHome from "./Components/Admin/Dashboard/DashboardHome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/addCourse">
          <AddCourses></AddCourses>
        </Route>

        <Route path="/dashboard">
          <DashboardHome></DashboardHome>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

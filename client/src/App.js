import "./App.css";
import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { Route, Switch, Redirect } from "react-router-dom";
import http from "./services/httpService";
import { usersEndPoint } from "./config.json";
import Dashboard from "./components/dashboard";
import Jumotron from "./components/common/jumbotron";
import NotFound from "./components/not-found";
import NewPost from "./components/createpost";
import Log from "./components/log";
import Logout from "./components/logout";
import Register from "./components/register";
import NavBar from "./components/navbar";
import ProtectedRoute from "./components/common/protectedRoute";
import PostPage from "./components/PostPage";
//import DiabetesForm from "./components/diabetesForm";
import Glass from './components/diabetes'
import PCOS from './components/pcos'
import Cervical from './components/cervical'
import Health from './components/Health'
import DiseaseDetection from "./components/DiseaseDetection";
import Landing from "./components/common/Landing"

class App extends Component {
  state = {};
  async componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user_jwt = jwtDecode(jwt);
      const user = await http.get(`${usersEndPoint}${user_jwt._id}`);
      this.setState({ user: user.data });
    } catch (ex) { }
  }
  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        {/* on the dashboard, have a quesry string parameter to 
       to find the method of sorting of posts.(using query string package) */}
        <Switch>
          <Route path="/users/login" component={Log} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/logout" component={Logout} />
          <ProtectedRoute
            path="/dashboard"
            render={(props) => <Dashboard {...props} user={this.state.user} />}
          />
          <Route path="/not-found" component={NotFound} />
          <ProtectedRoute
            path="/new-post"
            render={(props) => <NewPost {...props} user={this.state.user} />}
          />
          {/* <ProtectedRoute
            path="/diabetes-prediction"
            render={(props) => <DiabetesForm {...props} user={this.state.user} />}
          /> */}
          <Route
            path="/post/:id"
            render={(props) => <PostPage {...props} user={this.state.user} />}
          />
          <Route exact path="/" component={Landing} />
          <Route exact path="/diabetes" component={Glass} />
          <Route exact path="/pcos" component={PCOS} />
          <Route exact path="/cervical" component={Cervical} />
          <Route exact path="/BMI" component={Health} />
          <Route exact path="/diseasepred" component={DiseaseDetection} />
          <Redirect from="/users" to="/users/login " />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;

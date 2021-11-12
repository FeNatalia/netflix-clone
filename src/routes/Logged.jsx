// NPM Packages
import { Route } from "react-router-dom";


// Project files

import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
//import VideoPage from "pages/VideoPage";
import EditPage from "pages/EditPage";

export default function Logged() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      {/*<Route component={VideoPage} path="/videos/:videoId" />*/}
      <Route component={EditPage} path="/edit/:id" />
    </>
  );
}
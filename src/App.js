import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./parts/Footer";
import bg from "./assets/bg.jpg";
import bg1 from "./assets/bg1.jpg";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";

const AppWrap = styled.div``;
const img1 = new Image();
img1.src = bg;
const img2 = new Image();
img2.src = bg1;
const img3 = new Image();
img3.src = bg2;
const img4 = new Image();
img4.src = bg3;

const routes = [
  { path: "/", name: "Home", Component: Home, bg: img3 },
  { path: "/facilities", name: "Facilities", Component: Facilities, bg: img1 },
  { path: "/rooms", name: "Rooms", Component: Rooms, bg: img2 },
  { path: "/contact", name: "Contact", Component: Contact, bg: img4 },
];

function App() {
  return (
    <Router>
      <AppWrap>
        <Switch>
          {routes.map(({ path, Component, name, bg }) => (
            <Route key={name} path={path} exact>
              <Component bg={bg} />
            </Route>
          ))}
        </Switch>
        <Footer />
      </AppWrap>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Project from "./pages/Project";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

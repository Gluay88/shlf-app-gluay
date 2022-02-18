import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import mockShlves from "./mockShlves.js";
import NotFound from "./pages/NotFound";
import ShlfIndex from "./pages/ShlfIndex";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shlves: mockShlves,
    };
  }
  render() {
    return (
      <>
        <Header />
        <h1>Shlf App - Hello World!</h1>
        <p>Content goes here.</p>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;

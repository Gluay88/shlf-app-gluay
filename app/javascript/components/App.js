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
import ShlfShow from "./pages/ShlfShow";
import Navbar from "./components/Navbar";

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
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route
              path="/shlfindex"
              render={(props) => <ShlfIndex shlves={this.state.shlves} />}
            />
            <Route
              path="/shlfshow/:id"
              render={(props) => {
                let id = props.match.params.id;
                let shlf = this.state.shlves.find((shlf) => shlf.id === +id);
                return <ShlfShow shlf={shlf} />;
            }}
            />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;

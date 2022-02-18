import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ShlfIndex from './pages/ShlfIndex'
import Blog from './pages/Blog'
import About from './pages/About'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import mockShlves from './mockShlves.js'


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shlves: mockShlves
    }
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
    )
  }
}

export default App
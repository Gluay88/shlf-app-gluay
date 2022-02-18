import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shlf from './pages/Shlf'
import Blog from './pages/Blog'
import About from './pages/Blog'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import { NavLink } from 'react-router-dom'


export class App extends Component {
  render() {
    return (
      <>
        <Header />
          <h1>Shlf App - Hello World!</h1>
          <h4>App.js Page</h4>
        <Footer />
      </>
    )
  }
}

export default App
import React, { Fragment,Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import HKlayout from "./components/HKlayout/index"
import Home from "./pages/Home"
import List from "./pages/List"
import News from "./pages/News"
import Profile from "./pages/Profile"

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <section>
            <Route path="/" exact render={()=> <HKlayout><Home/></HKlayout>}/>
            <Route path="/List" exact render={()=> <HKlayout><List/></HKlayout>}/>
            <Route path="/News" exact render={()=> <HKlayout><News/></HKlayout>}/>
            <Route path="/Profile" exact render={()=> <HKlayout><Profile/></HKlayout>}/>
          </section>
        </Router>
      </Fragment>
    )
  }
}


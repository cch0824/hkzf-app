import React, { Fragment, Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import HKlayout from "./components/HKlayout/index"
import Home from "./pages/Home"
import List from "./pages/List"
import News from "./pages/News"
import Profile from "./pages/Profile"
import CityList from "./pages/CityList"

import store from "./store"
import { citySet } from "./store/actionCreator"

export default class App extends Component {
  componentDidMount(){
    this.getCityName()
  }
  getCityName = () => {
    // 获取定位城市
    // localCity 百度地图内置方法
    let myCity = new window.BMap.LocalCity();
    // 获取当前定位位置
    myCity.get(result=>{
      // 获取定位位置的城市名
      let cityName=result.name
      // 调用redux 的方法，让store派发行为
      store.dispatch(citySet(cityName))
    }); 
  }
  render() {
    return (
      <Fragment>
        <Router>
          <section>
            <Route path="/" exact render={() => <HKlayout><Home /></HKlayout>} />
            <Route path="/List" exact render={() => <HKlayout><List /></HKlayout>} />
            <Route path="/News" exact render={() => <HKlayout><News /></HKlayout>} />
            <Route path="/Profile" exact render={() => <HKlayout><Profile /></HKlayout>} />
            <Route path="/CityList" component={CityList}></Route>
          </section>
        </Router>
      </Fragment>
    )
  }
}


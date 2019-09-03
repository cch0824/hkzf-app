import React, { Component } from 'react'
import styles from "./index.module.scss"
import store from "../../store/index"
import { withRouter } from "react-router-dom"
class SearchInput extends Component {
  state = {
    cityName: ""
  }
  constructor() {
    super()
    let storeState = store.getState()
    // 设置默认定位城市数据
    this.state={
      cityName: storeState.mapReducer.cityName
    }
    // 订阅当前城市数据变化
    store.subscribe(this.changeCity)
  }
  changeCity = () => {
    // 重新获取当前定位城市
    this.setState({ cityName: store.getState().mapReducer.cityName });
  }
  render() {
    return (
      <div className={styles.search_input}>
        <div className={styles.input_cont}>
          <div className={styles.city_name} onClick={()=>this.props.history.push("/CityList")}>
            <span>{this.state.cityName}</span>
            <i className={"iconfont icon-arrow " + styles["icon-arrow"]}></i>
          </div>
          <div className={styles.city_search}>
            <i className={"iconfont icon-seach " + styles["icon-seach"]}></i>
            <p>请输入小区或地址</p>
          </div>
        </div>
        <div className={styles.ditu}>
          <i className={"iconfont icon-map " + styles["icon-map"]}></i>
        </div>
      </div>
    )
  }
}
export default withRouter(SearchInput)
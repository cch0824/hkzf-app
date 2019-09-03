import React, { Component } from 'react'
// 引入组件
import { NavBar, Icon } from 'antd-mobile';

export default class CityList extends Component {
  constructor(){
    super()

  }
  componentDidMount(){

  }
  state={
    // 当前城市
    cityName:""
  }
  render() {
    return (
      <div className="CityList">
        {/* 头部导航 */}
        <div className="navbar">
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
          >城市选择</NavBar>
        </div>
        {/* 城市列表 */}
      
      </div>
    )
  }
}

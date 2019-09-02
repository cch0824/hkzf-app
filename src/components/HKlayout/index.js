import React from 'react'
import { TabBar } from 'antd-mobile';
import {withRouter} from "react-router-dom"

class HKlayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#4dc694"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={this.props.match.path==="/"}
            onPress={() => {
             this.props.history.push("/")
            }}
          >
           {this.props.match.path==="/" && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="List"
            selected={this.props.match.path==="/List"}
            onPress={() => {
              this.props.history.push("/List")
            }}
          >
           {this.props.match.path==="/List" && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="News"
            selected={this.props.match.path==="/News"}
            onPress={() => {
              this.props.history.push("/News")
            }}
          >
           {this.props.match.path==="/News" && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="My"
            selected={this.props.match.path==="/Profile"}
            onPress={() => {
              this.props.history.push("/Profile")
            }}
          >
           {this.props.match.path==="/Profile"&&this.props.children}           
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default withRouter(HKlayout)
import React, { Fragment, Component } from 'react'
import { axios } from "../../utils/request"
import { REACT_APP_API_AXIOS } from '../../utils/urls';

//引入antd-mobile的组件  
import { Carousel } from "antd-mobile"

// 引入导航栏图片
import nav1 from "../../assets/images/nav-1.png"
import nav2 from "../../assets/images/nav-2.png"
import nav3 from "../../assets/images/nav-3.png"
import nav4 from "../../assets/images/nav-4.png"

// 引入样式
import styles from "./index.module.scss"
export default class Home extends Component {
  componentDidMount() {
    // 请求轮播图数据
    axios.get("/home/swiper").then(res => {
      this.setState({ swiperList: res.body });
    })
    // 请求租房小组数据
    axios.get("/home/groups?area=AREA%7C88cff55c-aaa4-e2e0").then(res => {
      this.setState({ groupsList: res.body });
    })
    // 请求最新资讯数据
    axios.get("/home/news?area=AREA%7C88cff55c-aaa4-e2e0").then(res => {
      this.setState({ newsList: res.body });
    })
  }
  state = {
    // 轮播图
    swiperList: [],
    // 轮播图高度
    imgHeight: 176,
    // 导航数据
    navList: [
      { name: "整租", src: nav1 },
      { name: "合租", src: nav2 },
      { name: "地图找房", src: nav3 },
      { name: "去出租", src: nav4 }
    ],
    // 租房小组数据
    groupsList: [],
    // 最新资讯数据
    newsList: []
  }
  render() {
    let { swiperList } = this.state
    return (
      <div className={styles.home}>
        {/* 轮播图 */}
        <div className="swiper">
          {swiperList.length &&
            <Carousel
              autoplay
              infinite
            >
              {swiperList.map(val =>
                <a
                  key={val.id}
                  href="http://www.alipay.com"
                  style={{
                    display: 'inline-block', width: '100%', height: this.state.imgHeight
                  }}
                >
                  <img src={REACT_APP_API_AXIOS + val.imgSrc}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }} />

                </a>
              )}
            </Carousel>
          }
        </div>
        {/* 导航 */}
        <div className={styles.home_nav}>
          {
            this.state.navList.map(v =>
              <div className={styles.nav_item} key={v.src}>
                <img src={v.src} alt="" />
                <span>{v.name}</span>
              </div>)
          }
        </div>

        {/* 租房小组 */}
        <div className={styles.groups}>
          <div className={styles.groups_title}>
            <span>租房小组</span>
            <i>更多</i>
          </div>
          {this.state.groupsList.length &&
            <div className={styles.groups_cont}>
              {this.state.groupsList.map(v =>
                <div className={styles.groups_item} key={v.id}>
                  <div className={styles.item_info}>
                    <p>{v.title}</p>
                    <span>{v.desc}</span>
                  </div>
                  <div className={styles.item_img}>
                    <img src={REACT_APP_API_AXIOS + v.imgSrc} alt="" />
                  </div>
                </div>)}
            </div>
          }
        </div>

        {/* 最新资讯 */}
        <div className={styles.news}>
          <div className={styles.news_title}>最新资讯</div>
          {
            this.state.newsList.map(v =>
              <div className={styles.news_item} key={v.id}>
                <div className={styles.item_img}>
                  <img src={REACT_APP_API_AXIOS + v.imgSrc} alt="" />
                </div>
                <div className={styles.item_info}>
                  <p className={styles.item_title}>{v.title}</p>
                  <div className={styles.item_desc}>
                    <p>{v.from}</p>
                    <span>{v.date}</span>
                  </div>
                </div>
              </div>
            )
          }

        </div>

      </div>
    )
  }
}

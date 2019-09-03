import { SET_CITY } from "../actionTypes"
// 设置默认数据
const defaultState = {
  cityName: "xxxx"
}
// 暴露函数
export default (state = defaultState, action) => {
  // 将value和type解构出来
  const { value, type } = action
  // 拷贝state
  let newState = { ...state }
  if (type === SET_CITY) {
    // 将设置的城市名value值赋值给state中的城市名
    newState.cityName = value
    // 将新的state值return出去
    return newState
  }
  return state
}
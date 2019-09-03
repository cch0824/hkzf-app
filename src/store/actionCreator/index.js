import {SET_CITY} from "../actionTypes"

export const citySet=(cityName)=>{
  return {
    type:SET_CITY,
    value:cityName
  }
}
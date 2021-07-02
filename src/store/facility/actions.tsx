import * as types from "./action-types"

const creators = {
  getFacilities(data:any) {
    return {
      type: types.GET_FACILITIES,
      payload: { facility : data }
    }
  }
}

export const getFacilities = (page = 1) => {
  return (dispatch:any, getState:any) => {
    dispatch(creators.getFacilities("Hello"))
  }
}

export {}
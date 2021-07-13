import * as types from "./action-types";

const initialState: any = [];

const facilityReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_FACILITIES:
      return action.payload;
    default:
      return state;
  }
};

export default facilityReducer;

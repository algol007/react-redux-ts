import * as types from "./action-types";

const initialState = [
  {
    id: 1,
    name: "Rumah Sakit A",
    address: "Jalan Manonda",
    type: "Klinik",
  },
];

const facilityReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.GET_FACILITIES:
      return action.payload.facility;
    default:
      return state;
  }
};

export default facilityReducer;

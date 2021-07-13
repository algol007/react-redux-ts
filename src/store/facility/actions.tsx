import * as types from "./action-types";

export const getFacilities = (data: any) => {
  return {
    type: types.GET_FACILITIES,
    payload: data,
  };
};

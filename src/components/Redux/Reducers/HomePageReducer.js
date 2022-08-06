import { FETCH_DATA, FILTER_DATA } from "../Actions/HomePageAction";

const initialState = {
  resources: [],
};

export const resourceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DATA: {
      return { ...state, resources: payload };
    }
    case FILTER_DATA: {
      console.log(payload);
      return {
        ...state,
        resources: payload.data.filter((eachResource) =>
          eachResource.tag.includes(payload.tag)
        ),
      };
    }
    default:
      return { ...state };
  }
};

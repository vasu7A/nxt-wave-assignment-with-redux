import { RESOURCE_DETAILS, SORT_DATA } from "../Actions/ResourcePageAction";

const initial = {
  resource_details: {},
  resource_item: [],
};
export const resourceDetailsReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case RESOURCE_DETAILS: {
      return {
        ...state,
        resource_details: payload,
        resource_item: payload.resource_items,
      };
    }
    case SORT_DATA: {
      return {
        ...state,
        resource_item: [...state.resource_item].sort((a, b) => {
          if (payload === "ascending") {
            if (a.title < b.title) {
              return -1;
            }
          } else if (payload === "descending") {
            if (a.title > b.title) {
              return -1;
            }
          } else if (payload === "Recently") {
            if (a.createdAt < b.createdAt) {
              return -1;
            }
          }
        }),
      };
    }

    default: {
      return state;
    }
  }
};

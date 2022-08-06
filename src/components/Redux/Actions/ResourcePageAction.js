export const RESOURCE_DETAILS = "RESOURCE_DETAILS";
export const SORT_DATA = "SORT_DATA";

export const resourceDetails = (item) => {
  return {
    type: RESOURCE_DETAILS,
    payload: item,
  };
};

export const sortData = (by) => {
  return {
    type: SORT_DATA,
    payload: by,
  };
};

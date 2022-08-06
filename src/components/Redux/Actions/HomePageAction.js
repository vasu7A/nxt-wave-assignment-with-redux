export const FETCH_DATA = "FETCH_DATA";
export const FILTER_DATA = "FILTER_DATA";

export const fetchData = (resource) => {
  return {
    type: FETCH_DATA,
    payload: resource,
  };
};

export const filterData = ({ data, tag }) => {
  return {
    type: FILTER_DATA,
    payload: { data, tag },
  };
};

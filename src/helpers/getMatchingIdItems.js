import fetchData from "./fetchData";

export const getMatchingIdItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];

  return data.filter((item) => item[key] === value);
};

export default function fetchData(key) {
  return JSON.parse(localStorage.getItem(key));
}

const BACKEND_URL = getBackendURL();

function getBackendURL() {
  if (window.location.hostname.indexOf("localhost") !== -1) {
    return "https://localhost:4000/";
  } else {
    return "https://micromoment.onrender.com/";
  }
}

const TIME_FILTER_OPTIONS = [
  [0, 5],
  [6, 10],
  [11, 20],
  [21, Infinity],
];

const TYPES = ["Curiosity", "Connections", "Creating Value"];

export { BACKEND_URL, TIME_FILTER_OPTIONS, TYPES };

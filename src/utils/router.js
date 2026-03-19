const requestParams = new URLSearchParams(window.location.search);
const type = requestParams.get("type") || "default";
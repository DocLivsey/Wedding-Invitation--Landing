export function getType() {
    const requestParams = new URLSearchParams(window.location.search);
    return requestParams.get("type") || "default";
}
// ASKING IF BROWSER SUPPORTS THIS FEATURE
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceWorker.js").then(registration => console.log("success"))
    .catch(error => console.log(error));
}
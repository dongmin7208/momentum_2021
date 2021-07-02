const h1 = document.querySelector("div.hello:first-child h1");
// h1.style.color = "blue";
function handleTitleClick() {
    h1.innerText = "blue";
    // console.log("title was clicked!");
}
function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
    // console.log("mouse is here!");
}
function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "red";
}
function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOnline() {
    alert("ALL GOOOOD");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
// handleTitleClick();

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

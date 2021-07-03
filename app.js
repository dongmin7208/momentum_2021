const h1 = document.querySelector("div.hello:first-child h1");
// h1.style.color = "blue";
function handleTitleClick() {
    console.log(h1.style.color);
    h1.innerText = "blue";
    console.log(h1.style.color);
    // console.log("title was clicked!");
}
function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
    // console.log("mouse is here!");
}

h1.addEventListener("click", handleTitleClick);

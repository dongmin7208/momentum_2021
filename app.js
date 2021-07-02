const title = document.querySelector("div.hello:first-child h1");
title.style.color = "blue";
function handleTitleClick() {
    title.innerText = "blue";
    console.log("title was clicked!");
}
function handleMouseEnter() {
    title.innerText = "Mouse is here!";
    console.log("mouse is here!");
}
function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

handleTitleClick();

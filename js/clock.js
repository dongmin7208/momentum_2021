const clock = document.querySelector("h2#clock");
// const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;

}
//00에서 하기싫어 페이지로딩되면 바로 가져와줘
getClock(); 
setInterval(getClock, 1000);
//실시간으로 시간보여줘
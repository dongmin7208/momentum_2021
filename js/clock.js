const clock = document.querySelector("h2#clock");
// const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText=(`${hours}:${minutes}:${seconds}`);
//****condition ? block(true) : block(false) */
    //clock.innerText = `${hour < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` :
}
//00에서 하기싫어 페이지로딩되면 바로 가져와줘
getClock(); 
setInterval(getClock, 1000);
//실시간으로 시간보여줘
// setInterval만 실행하면 1000ms 뒤에 첫 실행이 되므로
// getClock();을 즉시 실행으로 1회 실행하면 page road후 지연 없이 실행 가능
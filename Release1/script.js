function digitalClock(){
    let dateFunction = new Date()
    let day = dateFunction.getDay()
    let hours = dateFunction.getHours()
    let minutes = dateFunction.getMinutes()
    let seconds = dateFunction.getSeconds()
    let timeFormat = 'AM'

    timeFormat = hours >= 12 ? 'PM' : 'AM'
    hours = hours == 0 ? 12 : hours
    hours = hours > 12 ? hours - 12 : hours
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    document.querySelector('.hours').innerHTML = hours
    document.querySelector('.minutes').innerHTML = minutes
    document.querySelector('.seconds').innerHTML = seconds
    document.querySelector('.format').innerHTML = timeFormat

    let todaysDay = document.querySelector(`.weekdays :nth-child(${day + 1})`)
    todaysDay.classList.add('active')
}
setInterval(digitalClock, 1000)

// Светлая/темная темы

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});
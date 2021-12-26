const toggle = document.querySelector(".toggle");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
setTime();

setInterval(setTime, 1000);

function setTime() {
    const time = new Date();
    const date = time.getDate();
    const hours = time.getHours();
    const day = time.getDay();
    const month = time.getMonth();
    const hoursForClock = hours % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();

    function scale(num, in_min, in_max, out_min, out_max) {
        return (
            ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        );
    }
    function edit(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function AmPm() {
        return hours >= 12 ? "PM" : "AM";
    }

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        11,
        0,
        360
    )}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        minute,
        0,
        59,
        0,
        360
    )}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
        second,
        0,
        59,
        0,
        360
    )}deg)`;

    timeEl.innerText = `${edit(hoursForClock)}:${edit(minute)} ${AmPm()}`;

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span> `;
}

toggle.addEventListener("click", (e) => {
    const html = document.querySelector("html");
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        e.target.innerText = "Dark Mode";
    } else {
        html.classList.add("dark");
        e.target.innerText = "Lite Mode";
    }
});

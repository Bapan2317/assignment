// click to change theme color
const colors = ["aqua", "cornflowerblue", "green"];
let index = 0;
document.getElementById("color-theme").addEventListener("click", function () {
  document.getElementById("body").style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
});

// discover

document.getElementById("discoverd").addEventListener("click", function () {
  window.location.href = "../main.html";
});

// date
function date() {
  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
  return formattedDate;
}
document.getElementById("dateDisplay").innerText = date();

// get time

function getTime() {
  const options = {
    timeZone: "Asia/Kolkata",hour: "2-digit",minute: "2-digit",second: "2-digit",hour12: true,
  };
  let currentTime = new Date().toLocaleTimeString("en-US", options);
  return currentTime;
}

// clear history

document
  .getElementById("clear-history")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const commentContainer = document.getElementById("comment-container");
    commentContainer.innerText = "";
  });

// call the all click buttons

getClickResult("assignment-one");
getComment("assignment-one", "assignment-one-title");

getClickResult("assignment-two");
getComment("assignment-two", "assignment-two-title");

getClickResult("assignment-three");
getComment("assignment-three", "assignment-three-title");

getClickResult("assignment-four");
getComment("assignment-four", "assignment-four-title");

getClickResult("assignment-five");
getComment("assignment-five", "assignment-five-title");

getClickResult("assignment-six");
getComment("assignment-six", "assignment-six-title");
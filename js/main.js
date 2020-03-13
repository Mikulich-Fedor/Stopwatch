var time = 0;
var running = 0;
function startPause() {
  if (running == 0) {
    running = 1;
    increment();
    document.getElementById("start").innerHTML = "Pause";
    document.getElementById("startPause").style.backgroundColor = "red";
    document.getElementById("startPause").style.borderColor = "red";
  } else {
    running = 0;
    document.getElementById("start").innerHTML = "Resume";
    document.getElementById("startPause").style.backgroundColor =
      " greenyellow";
    document.getElementById("startPause").style.borderColor = " greenyellow";
  }
}

function reset() {
  running = 0;
  document.getElementById("start").innerHTML = "Start";
  document.getElementById("output").innerHTML = "00:00:00";
  document.getElementById("startPause").style.borderColor = " greenyellow";
  window.location.reload();
}

function increment() {
  if (running == 1) {
    setTimeout(function() {
      time++;
      var tenth = time % 10;
      var secs = Math.floor((time / 10) % 60);
      var mins = Math.floor(time / 10 / 60);
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      document.getElementById("output").innerHTML =
        mins + ":" + secs + ":" + tenth + "0";
      increment();
      // Есть вопросики) по кругу)
      document
        .getElementById("circleBut")
        .addEventListener("click", function() {
          var container = document.getElementById("container");
          var result = document.createElement("div");
          result.classList.add("circle");
          time = 0;
          result.innerHTML = mins + ":" + secs + ":" + tenth + "0";
          container.appendChild(result);
        });
    }, 100);
  }
}

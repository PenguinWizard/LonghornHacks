/*
const circularProgress = document.querySelectorAll(".circular-progress");



Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 20,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

document.getElementById("checkSite").addEventListener("click", () => {
  window.location.href = "extension.html";
})
*/




chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
  var url = tabs[0].url;


  const apiUrl = "https://two025longhornhackathonapi.onrender.com/api/get-credibility?url=" + url;

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  fetch(proxyUrl + apiUrl, {
    method: "GET",
  })
  .then(response => response.json())
  .then(data => {
    
    result = data;
    sliced = result.credibility_analysis[0].replace("%", "");

    if (sliced == 0) {
      sliced = 1;
    }

    updateProgress(sliced);
    document.getElementById("p1").innerHTML = result.credibility_analysis[1];
    document.getElementById("p2").innerHTML = result.credibility_analysis[2];
    document.getElementById("p3").innerHTML = result.credibility_analysis[3];
    document.getElementById("p4").innerHTML = result.credibility_analysis[4];
    document.getElementById("p5").innerHTML = result.credibility_analysis[5];

})
  .catch(error => alert(error));
});






const circularProgress = document.querySelector(".circular-progress");

function updateProgress(percentage) {
  if (!circularProgress) return;

  // Update the data attribute
  circularProgress.setAttribute("data-percentage", percentage);

  // Get elements inside the progress container
  const progressValue = circularProgress.querySelector(".percentage");
  const innerCircle = circularProgress.querySelector(".inner-circle");

  let startValue = 0,
    endValue = Number(percentage), // Use the updated percentage
    speed = 20,
    progressColor = circularProgress.getAttribute("data-progress-color");

  clearInterval(window.progressInterval); // Clear previous intervals if any
  window.progressInterval = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = progressColor;

    innerCircle.style.backgroundColor = circularProgress.getAttribute("data-inner-circle-color");

    circularProgress.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg, ${circularProgress.getAttribute("data-bg-color")} 0deg)`;

    if (startValue === endValue) {
      clearInterval(window.progressInterval);
    }
  }, speed);
}

// Example: Call updateProgress(85) to dynamically change the percentage
document.getElementById("checkSite").addEventListener("click", () => {
  window.location.href = "extension.html";
})
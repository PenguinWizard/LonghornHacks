let text = "";
let textbox = document.getElementById("textbox");
let resultBox = document.getElementById("resultbox");
let percent = document.getElementById("percentage");
let credTitle = document.getElementById("credtitle");
let results = "";
let loadtext = document.getElementById("loadtext");
let reasonTitle = document.getElementById("reasontitle");
let reasonList = [document.getElementById("reason1"), document.getElementById("reason2"), document.getElementById("reason3"), document.getElementById("reason4"),document.getElementById("reason5")]

document.getElementById("textboxTitle").style.paddingBottom = window.innerHeight / 15 + "px";
textbox.style.width = window.innerWidth / 2 + "px";
textbox.style.height = window.innerWidth / 15 + "px";

resultBox.style.width = window.innerWidth / 2 + "px";
resultBox.style.height = window.innerHeight / 3 + "px";

textbox.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        text = textbox.value;
        textbox.value = "";
        resultBox.style.display = "block";
        const apiUrl = "https://two025longhornhackathonapi.onrender.com/api/get-credibility?url=" + text;
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";

        // Reset previous results
        loadtext.innerText = "Loading...";

        // Fetch request
        fetch(proxyUrl + apiUrl, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            loadtext.innerText = "";
            results = data; // Get the response datac
            credTitle.innerText = "Credibility Score:"
            percent.innerText = results.credibility_analysis[0]; // Display the credibility analysis result
            reasonTitle.innerText = "Reasons:"
            for (i=1; i<=5; i++) {
                reasonList[i-1].innerText = results.credibility_analysis[i];
            }
        })
        .catch(error => {
            console.error(error);
            resultBox.innerHTML = "Error fetching data.";
        });
    }
});
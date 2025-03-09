/*

give a creditability percentage but only the percentage, and only 1 number followed by a percent sign. then, Give me 5 pointers in a list that shows why you chose this percent. the list should be this format: title (new line) reasons. for absolutely no reason should you include any other info. only return the info that I input. keep all the responses concise and accurate. 

here is the article: 

*/
let text = "";
let textbox = document.getElementById("textbox");
let resultBox = document.getElementById("resultbox");
document.getElementById("textboxTitle").style.paddingBottom = window.innerHeight/15 +"px"
textbox.style.width = window.innerWidth/2 + "px";
textbox.style.height = window.innerWidth/15 + "px";

resultBox.style.width = window.innerWidth/2 + "px";
resultBox.style.height = window.innerHeight/3 + "px";
textbox.addEventListener("keydown", (event) => {
    if (event.key == 'Enter') {
        text = textbox.value;
        console.log(text);
        textbox.value = ""
        resultBox.style.display = "block"
    }
})


//document.getElementById("textboxTitle").addEventListener()
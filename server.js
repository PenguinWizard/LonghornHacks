require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
let ApiKey = process.env.OPEN_AI_KEY;

async function getOpenAIResponse(prompt) {
    try {const express = require('express');


        const response = await axios.post(
            "https://api.openai.com/v1/chat/completions",
            {
                model: "gpt-4o-mini", // You can change the model if needed
                messages: [{ role: "user", content: prompt }],
                max_tokens: 100
            },
            {
                 headers: {
                    "Authorization": `Bearer ${ApiKey}`,
                    "Content-Type": "application/json"
                }

            }
        );
        let responseText = response.data.choices[0].message.content;
        return responseText
    
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}
function getData(article){
// Example usage
(async () => {
    const e = await getOpenAIResponse(
        "give a accuracy of information percentage but only the percentage, and only 1 number followed by a percent sign. 0 percent means compleatley inacurate, while 100 percent means completely accurate. Make sure to cross reference the sources and facts before providing answer. then, Give me 5 pointers in a list that shows why you chose this percent. The list should be this format: title (new line) reasons. For absolutely no reason should you include any other info. It should be in the form ( - Reason) only return the info that I input. Keep all the responses concise and accurate. Here is the article: " + article
    );

    console.log(e)
    module.exports =e.split("\n")
})();
}
getData("https://google.com")
app.use(express.static(path.join(__dirname, 'public')));
app.get('/api/get-credibility', async (req, res) => {
    const articleUrl = req.query.url;
    const data = await getData(articleUrl);
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
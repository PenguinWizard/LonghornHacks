require('dotenv').config();
const axios = require('axios');

let ApiKey = process.env.OPEN_AI_KEY;

article = "https://www.bbc.com/news/articles/cy4lj15lyv3o"
async function getOpenAIResponse(prompt) {
    try {
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

// Example usage
(async () => {
    const e = await getOpenAIResponse(
        "give a credibility percentage but only the percentage, and only 1 number followed by a percent sign. 0 percent means untrustworthy, while 100 percent means completely trustworthy. then, Give me 5 pointers in a list that shows why you chose this percent. The list should be this format: title (new line) reasons. For absolutely no reason should you include any other info. It should be in the form ( - Reason) only return the info that I input. Keep all the responses concise and accurate. Here is the article: " + article
    );


    module.exports =e.split("\n")
})();

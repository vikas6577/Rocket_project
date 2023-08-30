const express = require("express");
require('dotenv').config();
const app = express();
app.use(express.json());
const cors = require("cors");
const OpenAI = require('openai').default;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
let history = [];
function storeHistory(question, response) {
  history.push({ question, response });
  if (history.length > 10) {
    history.shift();
  }
}

app.post("/handleAPIRequest", async (req, res) => {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `You are a teacher that is an expert in information related to rockets ,you know all the propulsion basics , its components, design  and aerodynamics. You can provide detailed explanation of all of them and everything related to it . Do not use any external URLs in your explanation. Do not refer to any blogs in your answer, and if the user answer other questions which are not related to rocket just say 'This question is not relevant to the topic, Please ask relevant questions', Answer the question in short and crips way and in not more than 550 characters. Don't answer the questions which are not relevant to the rockets ${history.join(", ")}, ${req.body.question}`,
      temperature: 0.55,
      max_tokens: 548,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(response);
    storeHistory(req.body.question,response.choices[0].text)
  res.send({data:response.choices[0].text});
});


app.listen(5000, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", 5000);
});

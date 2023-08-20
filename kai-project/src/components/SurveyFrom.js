import { useCallback } from 'react';
// Default V2 theme
import 'survey-core/defaultV2.min.css';
// Modern theme
// import 'survey-core/modern.min.css';
import { Model, EmailValidator } from 'survey-core';
import { Survey } from 'survey-react-ui';
// import surveyJson
import surveyJson from '../models/surveyJson';
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

/*const configuration = new Configuration({
 organization: "org-geHDbWQzO6NprgTQCkUYRLWx",
 apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const response = await openai.retrieveModel("text-davinci-003");
*/

//api
const SURVEY_ID = "H304BME03218235";

function SurveyForm() {
    const survey = new Model(surveyJson);
    const email = survey.getQuestionByName("email-address");
    email.validators.push(new EmailValidator());
    const surveyComplete = useCallback((sender) => {
        saveSurveyResults(
          "https://your-web-service.com/" + SURVEY_ID,
          sender.data
        )
      }, []);
    
    const alertResults = useCallback((sender) => {
        // const results = JSON.stringify(sender.data);
        // alert(results);
        // Pass the survey results to OpenAI API for chat completion
        sendSurveyDataToOpenAI(sender.data);
        // alert(results);
      }, []);

    survey.onComplete.add(alertResults);

    const sendSurveyDataToOpenAI = async (surveyData) => {
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/engines/text-davinci-003/completions",
          {
            prompt: JSON.stringify(surveyData),
            max_tokens: 2049, // Adjust the number of tokens as needed
          },
          {
            headers: {
              Authorization: "Bearer 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",
            },
          }
        );
        
        const openAIResponse = response.data.choices[0].text;
        // Do something with the response from OpenAI, such as updating your UI
        console.log("Full API Response:", response.data); // Print full response
        console.log("OpenAI response:", openAIResponse);
        alert(openAIResponse);
        return openAIResponse;
      } catch (error) {
        console.error("Error sending data to OpenAI:", error);
        console.log("Full Error Response:", error.response.data); // Print full error response
      }
    };  

    return <Survey model={survey} />;
}

function saveSurveyResults(url, json) {
    const request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.addEventListener('load', () => {
      // Handle "load"
    });
    request.addEventListener('error', () => {
      // Handle "error"
    });
    request.send(JSON.stringify(json));
}

export default SurveyForm;
import { useCallback } from 'react';
// Default V2 theme
import 'survey-core/defaultV2.min.css';
// Modern theme
// import 'survey-core/modern.min.css';
import { Model, EmailValidator } from 'survey-core';
import { Survey } from 'survey-react-ui';
// import surveyJson
import surveyJson from '../models/surveyJson';

//api
const SURVEY_ID = 1;

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
        const results = JSON.stringify(sender.data);
        alert(results);
      }, []);

    survey.onComplete.add(alertResults);

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
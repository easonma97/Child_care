import React, { useCallback } from 'react';
import 'survey-core/defaultV2.min.css';
import { Model, EmailValidator } from 'survey-core';
import { Survey } from 'survey-react-ui';
import surveyJson from '../models/surveyJson';

const SURVEY_ID = 1;

const SurveyForm = () => {
  const survey = new Model(surveyJson);
  const email = survey.getQuestionByName('email-address');
  email.validators.push(new EmailValidator());

  const surveyComplete = useCallback((sender) => {
    saveSurveyResults('https://your-web-service.com/' + SURVEY_ID, sender.data);
  }, []);

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return <Survey model={survey} />;
};

const saveSurveyResults = (url, json) => {
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
};

export default SurveyForm;

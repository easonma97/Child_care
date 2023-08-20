import React, { useState } from 'react';
import SurveyForm from '../components/SurveyForm';

const Form = () => {
  const [showSurvey, setShowSurvey] = useState(false);

  const handleStartNowClick = () => {
    setShowSurvey(true); // Set showSurvey to true when the button is clicked
  };

  return (
    <div>
      {showSurvey ? (
        <SurveyForm setShowSurvey={setShowSurvey} /> // Pass setShowSurvey as a prop
      ) : (
        <div id="Form" style={{ height: '800px' }}>
          <h1
            style={{
              fontSize: '50px',
              padding: '20%',
              cursor: 'pointer',
            }}
            onClick={handleStartNowClick} // Trigger the click event
          >
            Start Now
          </h1>
        </div>
      )}
    </div>
  );
};

export default Form;

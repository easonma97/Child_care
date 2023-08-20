import React from 'react';

const About = () => {
  return (
    <div id="About" style={{ height: '800px' }}>
      <h1 style={{ fontSize: '50px', padding: '20%' }}>
        About
        <p
          style={{
            fontSize: '18px',
            lineHeight: '1.6',
            textAlign: 'center',
            margin: '20px auto 0',
            maxWidth: '600px',
          }}
        >
          Welcome to the Child Care Report Generator! Our app is designed to
          simplify the process of creating comprehensive reports for child care
          teachers. Whether you're a teacher, caregiver, or administrator, our
          user-friendly platform empowers you to generate detailed reports by
          answering a series of questions tailored to child care settings.
        </p>
      </h1>

      {/* Add additional content here if needed */}
    </div>
  );
};

export default About;

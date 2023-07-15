const surveyJson = {
    pages: [
        {
            elements: [{
                name: "email-address",
                title: "Please enter your email address:",
                type: "text",
                isRequired: true
            }]
        },
        {
        elements: [{
            name: "child-name",
            title: "What is the child's name?",
            type: "text",
         
        }, {
            name: "age-group",
            title: "Which room (or age group) is the child in?",
            type: "radiogroup",
            choices: [
                { value: "Baby/Nursery", text: "Baby/Nursery" },
                { value: "Toddler", text: "Toddler" },
                { value: "Pre-Kindy", text: "Pre-Kindy" },
                { value: "Kindy", text: "Kindy" }
            ]
        }]
    }, {
        elements: [{
            type: "html",
            html: "<h3>Baby Room</h3>"
        },{
            name: "learning-story-activity",
            title: "What activity is this learning story focused on?",
            type: "radiogroup",
            choices: [
                { value: "Physical Development", text: "Physical Development" },
                { value: "Sensory Play Activities", text: "Sensory Play Activities" }
            ]
        }]
    }, 
    {
        elements: [{
            type: "html",
            html: "<h3>Sensory Play Activities</h3>"
        },{
            name: "sensory-activity",
            title: "What kind of sensory activity is it?",
            type: "radiogroup",
            choices: [
                { value: "Texture", text: "Texture" },
                { value: "Sound", text: "Sound" },
                { value: "Sight", text: "Sight" }
            ]
        }]
    },
    {
        elements: [{
            type: "html",
            html: "<h3>Texture</h3>"
        },{
            name: "texture-focused-activity",
            title: "Please select from one of the following texture-focused sensory activities.",
            type: "radiogroup",
            choices: [
                { value: "Bubble wrap", text: "Bubble wrap" },
                { value: "Sensory bags", text: "Sensory bags" },
                { value: "Water play", text: "Water play" },
                { value: "Sand and rice bin", text: "Sand and rice bin" },
                { value: "Play dough", text: "Play dough" },
            ]
        }]
    },
    {
        elements: [{
            type: "html",
            html: "<h3>Zip-lock bags with water Observation</h3>"
        }, {
            name: "hesitant-confident-type-one",
            title: "Hesitant/Unsure Vs Confident/Fascincated",
            type: "radiogroup",
            choices: [
                { value: "Hesitant/Unsure", text: "Hesitant/Unsure" },
                { value: "Confident/Fascincated", text: "Confident/Fascincated" },
            ]
        }, {
            name: "hesitant-confident-type-two",
            title: "Hesitant/Unsure Vs Confident/Fascincated",
            type: "radiogroup",
            choices: [
                { value: 5, text: "Fully Confident/Fascincated" },
                { value: 4, text: "Generally Confident/Fascincated" },
                { value: 3, text: "Neutral" },
                { value: 2, text: "Generally Hesitant/Unsure" },
                { value: 1, text: "Fully Hesitant/Unsure" }
            ]
        }, {
            name: "Start-touching-bags",
            title: "Start touching bags / watch from distant",
            type: "radiogroup",
            choices: [
                { value: "Start touching bags", text: "Start touching bags" },
                { value: "Watch from distant", text: "Watch from distant" },
            ]
        }, {
            name: "Graps-squeeze-bags",
            title: "Graps and squeeze the bag",
            type: "radiogroup",
            choices: [
                { value: "True", text: "True" },
                { value: "False", text: "False" },
            ]
        }, {
            name: "Watch",
            title: "Watch?",
            type: "radiogroup",
            choices: [
                { value: "Watch the water move inside the bag", text: "Watch the water move inside the bag" },
                { value: "Did not watch but went away", text: "Did not watch but went away" },
            ]
        }, {
            name: "Encouraged-exploration",
            title: "Encouraged exploration?",
            type: "radiogroup",
            choices: [
                { value: "True", text: "Yes" },
                { value: "False", text: "No" },
            ]
        }]
    },
    {
        elements: [
            {
                type: "html",
                html: "<h3>Learning Analysis & EYLF</h3>"
            },
            {
            name: "Learning-Analysis",
            title: "Learning Analysis (Pick relevant)",
            type: "checkbox",
            choices: [
                { value: "Curiosity and exploration", text: "Curiosity and exploration" },
                { value: "Confident and involved", text: "Confident and involved" },
                { value: "Gross motor skills", text: "Gross motor skills" },
                { value: "Hand-eye coordination", text: "Hand-eye coordination" },
                { value: "Fine Motor Skills", text: "Fine Motor Skills" },
            ]
            }, {
                name: "EYLF-Outcome",
                title: "EYLF Outcome",
                type: "checkbox",
                choices: [
                    { value: "1.1 Children feel safe, secure, and supported.", text: "1.1 Children feel safe, secure, and supported." },
                    { value: "1.2 Children develop their emerging autonomy, inter-dependence, resilience and sense of agency.", text: "1.2 Children develop their emerging autonomy, inter-dependence, resilience and sense of agency." },
                    { value: "1.3 Children develop knowledgeable and confident self identities.", text: "1.3 Children develop knowledgeable and confident self identities." },
                    { value: "1.4 Children learn to interact in relation to others with care, empathy and respect.", text: "1.4 Children learn to interact in relation to others with care, empathy and respect." },
                    { value: "2.1 Children develop a sense of belonging to groups and communities and an understanding of the reciprocal rights and responsibilities necessary for active community participation.", text: "2.1 Children develop a sense of belonging to groups and communities and an understanding of the reciprocal rights and responsibilities necessary for active community participation." },
                    { value: "2.2 Children respond to diversity with respect.", text: "2.2 Children respond to diversity with respect." },
                    { value: "2.3 Children become aware of fairness.", text: "2.3 Children become aware of fairness." },
                    { value: "2.4 Children become socially responsible and show respect for the environment.", text: "2.4 Children become socially responsible and show respect for the environment." },
                    { value: "3.1 Children become strong in their social and emotional wellbeing.", text: "3.1 Children become strong in their social and emotional wellbeing." },
                    { value: "3.2 Children take increasing responsibility for their own health and physical wellbeing.", text: "3.2 Children take increasing responsibility for their own health and physical wellbeing." },
                    { value: "4.1 Children develop dispositions for learning such as curiosity, cooperation, confidence, creativity, commitment, enthusiasm, persistence, imagination and reflexivity.", text: "4.1 Children develop dispositions for learning such as curiosity, cooperation, confidence, creativity, commitment, enthusiasm, persistence, imagination and reflexivity." },
                    { value: "4.2 Children develop a range of skills and processes such as problem solving, inquiry, experimentation, hypothesising, researching and investigating.", text: "4.2 Children develop a range of skills and processes such as problem solving, inquiry, experimentation, hypothesising, researching and investigating." },
                    { value: "4.3 Children transfer and adapt what they have learned from one context to another.", text: "4.3 Children transfer and adapt what they have learned from one context to another." },
                    { value: "4.4 Children resource their own learning through connecting with people, place, technologies and natural and processed materials.", text: "4.4 Children resource their own learning through connecting with people, place, technologies and natural and processed materials." },
                    { value: "5.1 Children interact verbally and non-verbally with others for a range of purposes.", text: "5.1 Children interact verbally and non-verbally with others for a range of purposes." },
                    { value: "5.2 Children engage with a range of texts and gain meaning from these texts.", text: "5.2 Children engage with a range of texts and gain meaning from these texts." },
                    { value: "5.3 Children express ideas and make meaning using a range of media.", text: "5.3 Children express ideas and make meaning using a range of media." },
                    { value: "5.4 Children begin to understand how symbols and pattern systems work.", text: "5.4 Children begin to understand how symbols and pattern systems work." },
                    { value: "5.5 Children use information and communication technologies to access information, investigate ideas and represent their thinking.", text: "5.5 Children use information and communication technologies to access information, investigate ideas and represent their thinking." },
                ]
        }]
    },
    {
        elements: [{
            name: "what-would-make-you-more-satisfied",
            title: "What can we do to make your experience more satisfying?",
            type: "comment",
        }, {
            name: "nps-score",
            title: "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
            type: "rating",
            rateMin: 0,
            rateMax: 10
        }],
    }, {
        elements: [{
            name: "how-can-we-improve",
            title: "In your opinion, how could we improve our product?",
            type: "comment"
        }],
    }, {
        elements: [{
            name: "disappointing-experience",
            title: "Please let us know why you had such a disappointing experience with our product",
            type: "comment"
        }],
    }]
};

export default surveyJson;
var quizQuestions = [

/*
  Questions 20 and 88 are the catche question to check participant attention 
*/

  {
      question: "You are:",
      answers: [
          {
              type: "answer-1",
              content: "Male"
          },
          {
              type: "answer-2",
              content: "Female"
          }
          
      ],
      qtype: "quiz",
      questionId: 1,
      surveytag: 'intro', 
      title: 'Introduction',
      constraint: [
        {min: ""},
        {max: ""}
      ] 
  },
  {
      question: "You are:",
      answers: [
          {
              type: "answer-1",
              content: "Right-handed"
          },
          {
              type: "answer-2",
              content: "Left-handed"
          },
      ],
      questionId: 2,
      surveytag: 'intro',
      title: 'Introduction',
      qtype:"quiz",
      constraint: [
        {min: ""},
        {max: ""}
      ]
  },
  {
      question: "Please, indicate your age (in years)",
      answers: [{
        type: "age",
        content: " "
      }],
      qtype: 'report',
      questionId: 3,
      surveytag: 'intro',
      title: 'Introduction',
      constraint: [
        {min: "17.99999"},
        {max: "100"}
      ]

  },
  
/*
  Part 2: ADULTHOOD 
*/
  // SES LADDER QUESTION  

  { 

    question:"Please, use the image below to answer.", 

    answers: [{
        type: "answer-1",
        content: "1"},
      
        {type: "answer-2",
        content: "2"}, 

        {type: "answer-3",
        content: "3"},
      
        {type: "answer-4",
        content: "4"}, 

        {type: "answer-5",
        content: "5"},
      
        {type: "answer-6",
        content: "6"},

        {type: "answer-7",
        content: "7"},
      
        {type: "answer-8",
        content: "8"},

        {type: "answer-9",
        content: "9"},
      
        {type: "answer-10",
        content: "10"},   
        
      ],
      qtype: 'quiz',
      questionId: 4,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: ""},
       {max: ""}
      ], 

      image:'ladder.png'

  },


{   
      question:"Do you currently receive an income for one or more professional activities?",
      
      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"}
        
      ],
      qtype: 'quiz',
      questionId: 5,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {
    question:"What is your personal income PER YEAR (after tax) in GBP? We are prohibited from communicating this information to third parties, such as tax authorities.",
      
      answers: [{
        type: "answer-1",
        content: "Less than ￡10.000"},
      
        {type: "answer-2",
        content: "￡10.000 - ￡19.999"}, 

        {type: "answer-3",
        content: "￡20.000 - ￡29.999"},

        {type: "answer-4",
        content: "￡30.000 - ￡39.999"}, 

        {type: "answer-5",
        content: "￡40.000 - ￡49.999"},

        {type: "answer-6",
        content: "￡50.000 - ￡59.999"}, 
         
        {type: "answer-7",
        content: "￡60.000 - ￡69.999"}, 
        
        {type: "answer-8",
        content: "￡70.000 - ￡79.999"}, 

        {type: "answer-9",
        content: "￡80.000 - ￡89.999"}, 

        {type: "answer-10",
        content: "￡90.000 - ￡99.999"}, 

        {type: "answer-11",
        content: "￡100.000 - ￡149.999"}, 

        {type: "answer-12",
        content: "More than ￡150.000"}, 
        
      ],

      qtype: 'quiz',
      questionId: 6,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {
    question:"Including you, how many people live in your household?", 

      answers: [],
      qtype: 'report',
      questionId: 7,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: 0},
       {max: 25}
      ]

  },

  {
    question:"What is your total household income PER YEAR, including all earners in your household (after tax) in GBP? We are prohibited from communicating this information to third parties, such as tax authorities.", 

      answers: [{
        type: "answer-1",
        content: "Less than ￡10.000"},
      
        {type: "answer-2",
        content: "￡10.000 - ￡19.999"}, 

        {type: "answer-3",
        content: "￡20.000 - ￡29.999"},

        {type: "answer-4",
        content: "￡30.000 - ￡39.999"}, 

        {type: "answer-5",
        content: "￡40.000 - ￡49.999"},

        {type: "answer-6",
        content: "￡50.000 - ￡59.999"}, 
         
        {type: "answer-7",
        content: "￡60.000 - ￡69.999"}, 
        
        {type: "answer-8",
        content: "￡70.000 - ￡79.999"}, 

        {type: "answer-9",
        content: "￡80.000 - ￡89.999"}, 

        {type: "answer-10",
        content: "￡90.000 - ￡99.999"}, 

        {type: "answer-11",
        content: "￡100.000 - ￡149.999"}, 

        {type: "answer-12",
        content: "More than ￡150.000"}, 
        
      ],

      qtype: 'quiz',
      questionId: 8,
      surveytag: 'adulthood',
      title: 'Adult Life: economic situation', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  {   
      question:"Your highest level of education attained: ",
      
      answers: [
      
        {type: "answer-1",
        content: "Trade/technical school"},

        {type: "answer-2",
        content: "Post graduate"},  

        {type: "answer-3",
        content: "Completed college"}, 

        {type: "answer-4",
        content: "Some college"},

        {type: "answer-5",
        content: "Completed high school"},

        {type: "answer-6",
        content: "Some high school or less"},
      ],
      qtype: 'quiz',
      questionId: 9,
      surveytag: 'adulthood',
      title: 'Adult Life: education', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


/*
  Part 3: CHILDHOOD 
*/

{
      question: "Please, report your weight AT BIRTH (lb)",
      answers: [],
      
      qtype: 'report',
      questionId: 10,
      surveytag: 'childhood',
      title: 'Childhood',
      constraint: [

        // {min: "35"},
        // {max: "595"}
        {min: "2.0"}, // ~ 1 kg 
        {max: "17.0"}  // ~ 8  kg 
      ]

  },

  {   
      question:"Are you sure about your previous answer?",
      
      answers: [{
        type: "Conf-actual-weight-sure",
        content: "Sure"},

        {
        type: "Conf-actual-weight-unsure",
        content: "Not sure"}
      ],
      qtype: 'quiz',
      questionId: 11,
      surveytag: 'childhood',
      title: 'Childhood',
      constraint: [
       {min: ""},
      {max: ""}
      ]

  },


{
      question: "Please, report your height AT BIRTH (in inches)",
      answers: [],
      
      qtype: 'report',
      questionId: 12,
      surveytag: 'childhood',
      title: 'Childhood',
      constraint: [

        // {min: "35"},
        // {max: "595"}
        {min: "7.80"}, // ~ 20 cm  
        {max: "27.0"}  // ~ 70 cm 
      ]

  },

  {   
      question:"Are you sure about your previous answer?",
      
      answers: [{
        type: "Conf-actual-weight-sure",
        content: "Sure"},

        {
        type: "Conf-actual-weight-unsure",
        content: "Not sure"}
      ],
      qtype: 'quiz',
      questionId: 13,
      surveytag: 'childhood',
      title: 'Childhood',
      constraint: [
       {min: ""},
      {max: ""}
      ]

  },


{   
      question:"Did your father live with your mother during her pregnancy and until you were born?",
      
      answers: [{
        type: "answer-1",
        content: "Yes"},

        {
        type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"},
        
      ],
      qtype: 'quiz',
      questionId: 14,
      surveytag: 'childhood',
      title: 'Childhood',
      constraint: [
       {min: ""},
      {max: ""}
      ]

  },

{   
      question:"How many children did your mother give birth to BEFORE you?",
      
      answers: [

        {type: "answer-1",
        content: "0"},

        {type: "answer-2",
        content: "1"},  

        {type: "answer-3",
        content: "2"}, 

        {type: "answer-4",
        content: "3"},

        {type: "answer-5",
        content: "4"},

        {type: "answer-6",
        content: "5"},

        {type: "answer-7",
        content: "6"},

        {type: "answer-8",
        content: "7"},

        {type: "answer-9",
        content: "8"},

        {type: "answer-10",
        content: "9"},

        {type: "answer-11",
        content: "10"},

        {type: "answer-12",
        content: "More than 10"},
        
      ],
      qtype: 'quiz',
      questionId: 15,
      surveytag: 'childhood',
      title: 'Childhood', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


{   
      question:"How many children did your mother give birth to AFTER you?",
      
      answers: [

        {type: "answer-1",
        content: "0"},

        {type: "answer-2",
        content: "1"},  

        {type: "answer-3",
        content: "2"}, 

        {type: "answer-4",
        content: "3"},

        {type: "answer-5",
        content: "4"},

        {type: "answer-6",
        content: "5"},

        {type: "answer-7",
        content: "6"},

        {type: "answer-8",
        content: "7"},

        {type: "answer-9",
        content: "8"},

        {type: "answer-10",
        content: "9"},

        {type: "answer-11",
        content: "10"},

        {type: "answer-12",
        content: "More than 10"},
        
      ],
      qtype: 'quiz',
      questionId: 16,
      surveytag: 'childhood',
      title: 'Childhood', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

{   
      question:"The level of education attained by your FATHER at that time: ",
      
      answers: [

        {type: "answer-1",
        content: "Trade/technical school"},

        {type: "answer-2",
        content: "Post graduate"},  

        {type: "answer-3",
        content: "Completed college"}, 

        {type: "answer-4",
        content: "Some college"},

        {type: "answer-5",
        content: "Completed high school"},

        {type: "answer-6",
        content: "Some high school or less"},

        {type: "answer-7",
        content: "Not applicable"},
    
      ],
      qtype: 'quiz',
      questionId: 17,
      surveytag: 'childhood',
      title: 'Childhood: parental education', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


{   
      question:"The level of education attained by your MOTHER at that time: ",
      
      answers: [

        {type: "answer-1",
        content: "Trade/technical school"},

        {type: "answer-2",
        content: "Post graduate"},  

        {type: "answer-3",
        content: "Completed college"}, 

        {type: "answer-4",
        content: "Some college"},

        {type: "answer-5",
        content: "Completed high school"},

        {type: "answer-6",
        content: "Some high school or less"},

        {type: "answer-7",
        content: "Not applicable"},

      ],
      qtype: 'quiz',
      questionId: 18,
      surveytag: 'childhood',
      title: 'Childhood: parental education', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:" When I was younger than 12 ... I had a set morning routine on school days (I usually did the same thing each day to get ready). ",
      
      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 19,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  // THis is a ctach question to check participant's attention 
      {
        question:" Please answer 'Never' for this question to show your attention.",

      answers: [{
        type: "answer-1",
        content: "Often"},
      
        {type: "answer-2",
        content: "Sometimes"},

        {type: "answer-3",
        content: "Rarely"},

        {type: "answer-4",
        content: "Never"},
  
       ],
      qtype: 'quiz',
      questionId: 20,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:" When I was younger than 12 ... My parents kept track of what I ate (made sure that I did not skip meals or tried to make sure I ate healthy foods). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 21,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:" When I was younger than 12 ... My family ate a meal together most days. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 22,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:" When I was younger than 12 ... My parents tried to make sure I got a good night sleep (e.g. I had a regular bedtime, my parents checked to make sure I went to sleep). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 23,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... I had a bedtime routine (e.g. my parents tucked me in, my parents read me a book, I took a bath). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 24,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... In my afterschool or free time hours at least one of my parents knew what I was doing. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 25,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents regularly checked that I did my homework. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 26,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents regularly kept track of my school progress. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 27,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one parent made time each day to see how I was doing. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 28,
      surveytag: 'childhood',
      title: 'Childhood: parental investment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... My parents were often late to pick me up (e.g. from school, aftercare or sports). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 29,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... I usually knew when my parents were going to be home. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 30,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... At least one of my parents had punishments that were unpredictable. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 31,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I often wondered whether or not one of my parents would come home at the end of the day. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 32,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... My family planned activities to do together. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 33,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... At least one of my parents would plan something for the family, but then not follow through with the plan. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 34,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... My family had holiday tradition that we did every year (e.g. cooking a special food at a particular time of year/decorate the house the same way). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 35,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents was disorganized. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 36,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... At least one of my parents was unpredictable. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 37,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... For at least one of my parents, when they were upset I did not know how they would act. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 38,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... One of my parents could go from calm to furious in an instant. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 39,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... One of my parents could go from calm to stressed or nervous in an instant. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 40,
      surveytag: 'childhood',
      title: 'Childhood: parental predictability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

{   
      question:"When I was younger than 12 ... There was a long period of time when I did not see one of my parents (e.g. military deployment, jail time, custody arrangements). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 41,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I experienced changes in my custody arrangements. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 42,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents changed jobs frequently. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 43,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... There were times when one of my parents was unemployed and couldn't find a job even though he/she wanted one.", 
      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 44,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... My parents had a stable relationship with each other. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 45,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... My parents got divorced. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 46,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... At least one of my parents had many romantic partners. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 47,
      surveytag: 'childhood',
      title: 'Childhood: parental environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... There were often people coming and going in my house that I did not expect to be there. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 48,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


   {   
      question:"When I was younger than 12 ... I moved frequently. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 49,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I changed schools frequently. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 50,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I changed schools mid-year. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 51,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I lived in a clean house. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 52,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },


  {   
      question:"When I was younger than 12 ... I lived in a cluttered house (e.g. piles of stuff everywhere). ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 53,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... In my house things I needed were often misplaced so that I could not find them. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 54,
      surveytag: 'childhood',
      title: 'Childhood: physical environment', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... There was a period of time when I often worried that I was not going to have enough food to eat. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 55,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... There was a period of time where I did not feel safe in my house. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 56,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I have suffered from sexual or physical abuse. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 57,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... My family usually had enough money for things when I was growing up. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 58,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I grew up in a relatively wealthy neighborhood. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 59,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I felt relatively wealthy compared to other kids in my school. ", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 60,
      surveytag: 'childhood',
      title: 'Childhood: safety and security', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I've had to deal with the death of my father (biological/adoptive).", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 61,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]

  },

  {   
      question:"When I was younger than 12 ... I've had to deal with the death of my mother (biological/adoptive).", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 62,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  }, 

  {   
      question:"When I was younger than 12 ... I've had to deal with the death of a sibling (biological/adoptive).", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 63,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
}, 


{   
      question:"When I was younger than 12 ... I've had to deal with the death of another member of my close family (biological/adoptive).", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 64,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
}, 

{   
      question:"When I was younger than 12 ... I've had to deal with the death of another family member of a friend.", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 65,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
}, 


{   
      question:"When I was younger than 12 ... I've had to deal with the death of another person who was part of my daily environment.", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"},

        {type: "answer-3",
        content: "I don't know / Not applicable"}
      ],
      qtype: 'quiz',
      questionId: 66,
      surveytag: 'childhood',
      title: 'Childhood: loss of a loved one', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
}, 


{   
      question:"Including you, how many people lived in your family household when you were younger than 12?", 

      answers: [{
        type: "answer-1",
        content: "1"},
      
        {type: "answer-2",
        content: "2"},

        {type: "answer-3",
        content: "3"},

        {type: "answer-4",
        content: "4"},

        {type: "answer-5",
        content: "5"}, 

        {type: "answer-6",
        content: "6"}, 

        {type: "answer-7",
        content: "7"}, 

        {type: "answer-8",
        content: "8"}, 
 
        {type: "answer-9",
        content: "9"},

        {type: "answer-10",
        content: "10"},

        {type: "answer-11",
        content: "More than 10"}, 
 
      ],
      qtype: 'quiz',
      questionId: 67,
      surveytag: 'childhood',
      title: 'Childhood: household', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
},

/*
  Part 4: Reproductive development 
*/

{   
      question:"For female participants: at what age did you reach puberty? That is, at what age (in years) did you have your first period?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 68,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: 5},
       {max: 100}
      ]
}, 


{   
      question:"For male participants: at what age did you reach puberty? That is, at what age did your voice begin to change, at what age did you notice the appearance of hairs or acne?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 69,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: 5},
       {max: 100}
      ]
}, 


{   
      question:"At what age did you have your first consented sexual intercourse?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 70,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: 0},
       {max: 999}
      ]
}, 


{   
      question:"How many different partners have you had sex with without considering a long-term relationship?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 71,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: -1},
       {max: 99}
      ]
}, 


{   
      question:"How many different partners have you had sex with while you were already committed in a relationship?",

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 72,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: -1},
       {max: 99}
      ]
}, 

{   
      question:"Do you have (biological) children?", 

      answers: [{
        type: "answer-1",
        content: "Yes"},
      
        {type: "answer-2",
        content: "No"}
      ],
      qtype: 'quiz',
      questionId: 73,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: -1},
       {max: 100}
      ]
  },


  {   
      question:"How many children do you have?", 

      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report', 
      questionId: 74,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: -1},
       {max: 20}
      ]
}, 


{   
      question:"At what age did you have your first child?", 
      answers: [
        {
          type: "answer-na",
          content: "Not applicable"}
        ],
      qtype: 'report-na',
      questionId: 75,
      surveytag: 'repdevelop',
      title: 'Reproductive development', 
      constraint: [
       {min: 10},
       {max: 99}
      ]
}, 

/*
  Part 5: HEALTH 
*/

{   
      question:"How is your health in general?", 

      answers: [{
        type: "answer-1",
        content: "Excellent"},
      
        {type: "answer-2",
        content: "Very Good"},

        {type: "answer-3",
        content: "Good"},

        {type: "answer-4",
        content: "Fair"}, 

        {type: "answer-5",
        content: "Poor"}, 

        {type: "answer-6",
        content: "Very poor"},

      ],
      qtype: 'quiz',
      questionId: 76,
      surveytag: 'health',
      title: 'Health', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


{   
      question:"How much effort do you make to look after your health and ensure your safety these days?", 

      answers: [{
        type: "answer-1",
        content: "A great deal"},
      
        {type: "answer-2",
        content: "A lot"},

        {type: "answer-3",
        content: "A moderate amount"},

        {type: "answer-4",
        content: "A little"},

        {type: "answer-5",
        content: "None at all"}
      ],
      qtype: 'quiz',
      questionId: 77,
      surveytag: 'health',
      title: 'Health', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


{   
      question:"Relative to your actual age, do you think you look:", 

      answers: [{
        type: "answer-1",
        content: "Way older"},
      
        {type: "answer-2",
        content: "Older"},

        {type: "answer-3",
        content: "Slightly older"},

        {type: "answer-4",
        content: "Neither older nor younger"},

        {type: "answer-5",
        content: "Slightly younger"}, 

        {type: "answer-6",
        content: "Younger"},

        {type: "answer-7",
        content: "Way younger"},

      ],
      qtype: 'quiz',
      questionId: 78,
      surveytag: 'health',
      title: 'Health', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },
  
  
{   
    question:"Could you please estimate your SUBJECTIVE AGE (in years)? i.e. the age you appear to be rather than the age you actually are?",

      answers: [
        {
          type: "",
          content: ""}
        ],
      qtype: 'report',
      questionId: 79,
      surveytag: 'repdevelop',
      title: 'Health', 
      constraint: [
       {min: 10},
       {max: 110}
      ]
}, 


// Added PVD scale 
{   
      question:"It really bothers me when people sneeze without covering their mouth", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 80,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  
  { question:"If an illness is 'going around', I will get it", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 81,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
    question:"I am comfortable sharing a watter bottle with a friend", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 82,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
    question:"I do not like to write with a pencil someone else has obviously chewed on", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 83,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "My past experiences make me believe I am not likely to get sick even when my friends are sick", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 84,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  { 
    question: "I have a history of susceptibility to infectious disease", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 85,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "I prefer to wash my hands pretty soon after shaking someone's hand", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 86,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "In general, I am very susceptible to colds, flu and other infectious diseases", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 87,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "Please answer 'Disagree somewhat' to this question to show your attention.",

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 88,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  { 
    question: "I dislike wearing used clothes because you do not know what the last person who wore it was like", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 89,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "I am more likely than the people around me to catch an infectious disease", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 90,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "My hands do not feel dirty after touching money", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 91,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "I am unlikely to catch a cold, flu, or other illness, even if it is 'going around'", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 92,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },


  { 
    question: "It does not make me anxious to be around sick people", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 93,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "My immune system protects me from most of illnesses that other people get", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 94,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  { 
    question: "I avoid using public telephones because of the risk that I may catch something from the previous user", 

      answers: [{
         type: "answer-1",
        content: "Agree strongly"},

        {type: "answer-2",
        content: "Agree somewhat"},

        {type: "answer-3",
        content: "Agree slightly"},

        {type: "answer-4",
        content: "Neither agree nor disagree"},

        {type: "answer-5",
        content: "Disagree slightly"},

        {type: "answer-6",
        content: "Disagree somewhat"},

        {type: "answer-7",
        content: "Disagree strongly"},
        
      ],
      qtype: 'quiz',
      questionId: 95,
      surveytag: 'pvd',
      title: 'Vulnerability', 
      constraint: [
       {min: ""},
       {max: ""}
      ]
  },

  {
      question: "Please, report your ACTUAL weight (lb)",
      answers: [],
      
      qtype: 'report',
      questionId: 96,
      surveytag: 'demo', 
      title: 'Demo',
      constraint: [

        // {min: "35"},
        // {max: "595"}

        {min: "77"},
        {max: "1312"}
      ]

  },
  {   
      question:"Are you sure about your previous answer?",
      
      answers: [{
        type: "answer-1",
        content: "Sure"},

        {
        type: "answer-2",
        content: "Not sure"}
      ],
      qtype: 'quiz',
      questionId: 97,
      surveytag: 'demo',
      title: 'Demo',
      constraint: [
       {min: ""},
      {max: ""}
      ]

  },


{
      question: "Please, report your ACTUAL height (inch)",
      answers: [],
      
      qtype: 'report',
      questionId: 98,
      surveytag: 'demo', 
      title: 'Demo',
      constraint: [

        // {min: "35"},
        // {max: "595"}

        {min: "19.0"},
        {max: "118.0"}
      ]

  },
  {   
      question:"Are you sure about your previous answer?",
      
      answers: [{
        type: "answer-1",
        content: "Sure"},

        {
        type: "answer-2",
        content: "Not sure"}
      ],
      qtype: 'quiz',
      questionId: 99,
      surveytag: 'demo',
      title: 'Demo',
      constraint: [
       {min: ""},
      {max: ""}
      ]

  },



  { 
    question: "How was your experience in this experiment? Did you have any troubles with completing the game or questionnaires?", 

    answers: [],

      qtype:'free-report', 
      questionId: 100,
      surveytag: 'feedback',
      title: 'Feedback', 
      constraint: [
       {min: ""},
       {max: "10000"}
      ]
  },

];

export default quizQuestions;

const questions = [
    {
      question: "I take time for myself every day.",
      options: {
        "Strongly Disagree": 1,
        Disagree: 2,
        Neutral: 3,
        Agree: 4,
        "Strongly Agree": 5,
      },
    },
    {
      question: "I make time for spirituality (in any form),mindfulness, or religious discipline",
      options: {
        "Strongly Disagree": 1,
        "Disagree": 2,
        "Neutral": 3,
        "Agree": 4,
        "Strongly Agree": 5,
      },
    },
    {
      question:"I limit the amount of Facebook/internet surfing I do each day. ",
      options: {
        "Strongly Disagree": 1,
        Disagree: 2,
        Neutral: 3,
        Agree: 4,
        "Strongly Agree": 5,
      },
    },
    {
      question:"I exercise at least 5 days a week for 30 minutes. ",
      options: {
          "Strongly Disagree": 1,
          Disagree: 2,
          Neutral: 3,
          Agree: 4,
          "Strongly Agree": 5,
        },
      },
    {
      question:"I drink 6-8 glasses of water each day.",
      options: {
          "Strongly Disagree": 1,
          Disagree: 2,
          Neutral: 3,
          Agree: 4,
          "Strongly Agree": 5,
        },},
    {
      question:"I get 7-8 hours of sleep every night",
      options: {
          "Strongly Disagree": 1,
          Disagree: 2,
          Neutral: 3,
          Agree: 4,
          "Strongly Agree": 5,
        },},
    { 
      question:"I brush and floss my teeth and practice good hygiene ",
      options: {
          "Strongly Disagree": 1,
          Disagree: 2,
          Neutral: 3,
          Agree: 4,
          "Strongly Agree": 5,
        },},
    {
      question:"I eat approximately 5 fruits & veggies a day",
      options: {
          "Strongly Disagree": 1,
          Disagree: 2,
          Neutral: 3,
          Agree: 4,
          "Strongly Agree": 5,
        },},
    {
      question:"My hair, nails and appearance are good and I like most things in my wardrobe. ",
      options: {
          "Strongly Disagree": 1,
          Disagree: 2,
          Neutral: 3,
          Agree: 4,
          "Strongly Agree": 5,
        },},
    {
      question:"I generally wear clean clothes ",
      options: {
          "Strongly Disagree": 1,
          Disagree: 2,
          Neutral: 3,
          Agree: 4,
          "Strongly Agree": 5,
        },},
    {
      question:". I get together with a friend at least once a month and enjoy hobbies regularly. ",
      options: {
          "Strongly Disagree": 1,
          Disagree: 2,
          Neutral: 3,
          Agree: 4,
          "Strongly Agree": 5,
        },},
        {question:" . I have a relaxing routine before bed and a nurturing morning routine. ",
        options: {
            "Strongly Disagree": 1,
            Disagree: 2,
            Neutral: 3,
            Agree: 4,
            "Strongly Agree": 5,
          },},
          {question:"I usually know what I need and what I am feeling. ",
          options: {
              "Strongly Disagree": 1,
              Disagree: 2,
              Neutral: 3,
              Agree: 4,
              "Strongly Agree": 5,
            },},
            {question:"My organized environment supports my goals.  ",
            options: {
                "Strongly Disagree": 1,
                Disagree: 2,
                Neutral: 3,
                Agree: 4,
                "Strongly Agree": 5,
              },},
              {question:". I take frequent breaks and have something to look forward to every evening. ",
              options: {
                  "Strongly Disagree": 1,
                  Disagree: 2,
                  Neutral: 3,
                  Agree: 4,
                  "Strongly Agree": 5,
                },},
                {question:" . I know what I am passionate about.",
                options: {
                    "Strongly Disagree": 1,
                    Disagree: 2,
                    Neutral: 3,
                    Agree: 4,
                    "Strongly Agree": 5,
                  },},
  ];
  
  const quizContainer = document.querySelector(".Quiz-container");
  const submitButton = document.getElementById("submit");
  const resultScore = document.querySelector(".score-result")
  const result = document.querySelector(".result")
  const resultConc = document.querySelector(".Result-conclusion")
  function CreateQuiz() {
    questions.forEach((question, index) => {
      const div = document.createElement("div");
      div.classList.add("question");
      div.innerHTML = `<p>Question ${index + 1}: ${question.question}</p>`;
      for (const option in question.options) {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `question_${index}`;
        radio.value = question.options[option];
        radio.addEventListener("change", function () {
          if (radio.checked) {
            const questionLabels = div.querySelectorAll("label");
            questionLabels.forEach((lbl) => {
              lbl.classList.remove("checked");
            });
            label.classList.add("checked");
          }
        });
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        div.appendChild(label);
      }
      quizContainer.appendChild(div);
    });
  }
  
  function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="question_${index}"]:checked`);
      if (selectedOption) {
        score += parseInt(selectedOption.value);
      }
    });
    return score;
  }
  function showResult() {
    const score = calculateScore();
    modal.style.display = "block";
    resultScore.textContent = score;
    if(score >= 0 && score <= 17){
      resultConc.textContent = "Your actions don’t seem to reflect that you prioritize taking care of yourself. What are you prioritizing instead? You need to realize that your family, friends, school and work don't want an empty vessel. They want a vibrant, authentic, energetic you. Talk with your family and friends about how you want to start taking better care of yourself. Remember, you are just as important as the other people in your life. Shine for them! Pick an easy, non-threatening action to start caring for yourself. Maybe you can drink one more glass of water or take 5 minutes alone. Start small and work your way up."
    }else if(score >= 18 && score <= 35){
      resultConc.textContent = "You feel guilty every time you take time for yourself. You need to realize that your family, friends, school and work don't want an empty vessel. They want a vibrant, authentic, energetic you. Talk with your family and friends about how you want to start taking better care of yourself. Is there a way you can use your friends and family to build in time for yourself care?  If they are supportive, see if they are open to having you be accountable to them. Which thing from the above checklist do you think would have the most impact on your energy and wellbeing? Work on that action until it becomes a habit."
    }else if(score >= 36 && score <= 53){
      resultConc.textContent = "You may value yourself, but can you prioritize self care a bit more? Set an evening just for you every week with no outside obligations. Examine your calendar to get rid of unimportant meetings, etc. Turn off the TV/Facebook/the internet after an hour of watching/surfing, etc. Put in a daily half hour for you in your appointment book. Let go of unrealistic standards of how much you can get done in a day. Cut your to do list for the day in half. Now use that time to work on one thing on the checklist above until you form a habit. Then move onto another one. "
    }else if(score >= 54 && score <= 71){
      resultConc.textContent = "You know how to take care of yourself. Now, do it consistently. Would it help to track  your daily self-care? What can you do that would allow for some of these self-care habits to  happen regularly?"
    }
    else{
      resultConc.textContent="Way to go! You are taking excellent care of yourself. Now you can delve further into   things like getting massages, simplifying your life, and getting rid of as many stressors as you   can."
    }
  }
  
  submitButton.addEventListener("click", showResult);
  
  CreateQuiz();
  
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
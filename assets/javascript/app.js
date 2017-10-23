// build a library of questions with true false answers 
// Guinness World Record theme
// ten questions
// time limit of 120 seconds -- game ends at 0 seconds and reports number of correct/incorrect answers
// include a countdown timer with a start timer (quiz) button.



$(document).ready(function() {

    //----------------------------------------------------------------------------------
    // countdown timer that uses .click function to begin. 
    // use jQuery .prop to disable button after click and .fadeTo to lighten the button once pressed.
    //----------------------------------------------------------------------------------
    $("#startButton").click(function(event) {

        $("#startButton").prop("disabled", "true");
        $("#startButton").fadeTo("fast", 0.50);
        (function() {
            var countDown = 120;
            setInterval(function() {
                countDown--;
                if (countDown >= 0) {
                    span = document.getElementById("count");
                    span.innerHTML = countDown;
                }
                if (countDown === 0) {
                    clearInterval(countDown);
                    // when time runs out call the finalScore function to display final score stats.
                    finalScore();
                }
            }, 1000);

            loadQuestion();

        })();


        var correctAnswers = 0,
            incorrectAnswers = 0;

        function loadQuestion(questionSelection) {

            var tenQuestions = [{
                    question: 'A man from the USA consumed his 26,000th Big Mac on 11th October 2012, after eating at least one a day for forty years. (11th October 2012)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'True',
                    facts: ''
                },

                {
                    question: 'The longest distance swam underwater in one breath is 200metres. (6th November 2008)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'True',
                    facts: ''
                },

                {
                    question: 'The fastest time to eat 15 Ferrero Rocher is 1 minute 10 seconds. (24th October 2014)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'False',
                    facts: 'it is 2 minutes 22 seconds'
                },

                {
                    question: 'The record for most needles inserted into the head is 15,000. (11th June 2013)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'False',
                    facts: 'it is 2,188'
                },

                {
                    question: 'The world’s longest legs belong to a Russian lady and measure 132cm (51.9 inches) (8th July 2003)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'True',
                    facts: ''
                },

                {
                    question: 'The heaviest aircraft pulled by a single man weighed 188.83 tonnes and was pulled 8.8 metres. (17th September 2009)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'True',
                    facts: ''
                },

                {
                    question: 'The record for the fastest time to solve a Rubik’s Cube one-handed is 37 seconds. (26th April 2014)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'False',
                    facts: 'it is 12.56 seconds'
                },

                {
                    question: 'The world’s tallest living man is 251cm / 8 ft 3 in. (9th February 2011)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'True',
                    facts: 'Sultan Kösen of Turkey'
                },

                {
                    question: 'The most expensive car number plate, showing only the number ‘1’, was bought in the United Arab Emirates for 52.2 million dirham, the approximate equivalent of £7.2 million. (16th February 2008)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'True',
                    facts: ''
                },

                {
                    question: 'The record for the longest rail tunnel is held by the Channel Tunnel between Britain and France. (15th October 2010)',
                    possibleAnswers: ['True', 'False'],
                    answer: 'False',
                    facts: 'it is held by the Gotthard Rail Tunnel, Switzerland, beneath the Alps and measures 35.42 miles. The Channel Tunnel is 31.4 miles'
                }
            ];

            for (i = 0; i < tenQuestions.length; i++) {

            }

            $("#questions").append(tenQuestions[i]);
            console.log(tenQuestions);
        }



        /*Each question should load to the screen individually. True or False button should be selected and 
        result would be appended to correctAnswers and incorrectAnswers. Once completed, the final tally of 
        answers will be displayed.*/




        //----------------------------------------------------------------------------------
        // final score function uses .empty() to clear the container and replace with stats.
        //----------------------------------------------------------------------------------

        function finalScore() {
            $("#questions").empty();

            $("#questions").append("<h2>Correct Answers: " + correctAnswers + "</h2>");
            $("#questions").append("<h2>Wrong Answers: " + incorrectAnswers + "</h2>");



        };

















    });

    // write code to look at .click event for all question buttons and increase correctAnswers and incorrectAnswers for each answer.
    // first .click event for questionButtons


    // jQuery .prop for buttons once selected -- do I need a new class for each question set of buttons?















});
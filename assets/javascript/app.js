// build a library of questions with true false answers 
// five questions
// time limit of 30 seconds -- game ends at 30 seconds and reports number of correct/incorrect answers
// include a countdown timer with a start timer (quiz) button.

correctAnswers = 0;
incorrectAnswers = 0;

$(document).ready(function() {


    $("#startButton").click(function(event) {

        $("#startButton").prop("disabled", "true");
        $("#startButton").fadeTo( "fast", 0.50 );
        (function() {
            var countDown = 30;

            setInterval(function() {
                countDown--;
                if (countDown >= 0) {
                    span = document.getElementById("count");
                    span.innerHTML = countDown;
                }
                if (countDown === 0) {
                    clearInterval(countDown);
                    // set alert when time runs out. replace this with a change to the question section to show final stats.
                    alert("Time's Up!");
                }

            }, 1000);

        })();





       

    });

// write code to look at .click event for all question buttons and increase correctAnswers and incorrectAnswers for each answer.
// first .click event for questionButtons


// jQuery .prop for buttons once selected -- do I need a new class for each question set of buttons?

// 













});
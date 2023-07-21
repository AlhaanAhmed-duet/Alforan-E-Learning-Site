document.addEventListener("DOMContentLoaded",
    function (event) {
        document.getElementById("responseBtn").onclick = function () {
        var inputFeed = document.querySelector("#inputQuery").value;
        
        // Creating a query message
        if ((inputFeed == "Who are you") || (inputFeed == "Who are u") || (inputFeed == "Who are you?") || (inputFeed == "who are you") || (inputFeed == "who r u")) {
            var sentence = "Hi, I am PenPeace and do you!!"
            document.getElementById("responseChat").innerHTML = sentence;
        }
        // Creating a greet message
        else if ((inputFeed == "Hi") || (inputFeed == "Hi, what's up") || (inputFeed == "hi"))
        {
            var greetSentence = "Hi, so good to see you";
            document.getElementById("responseChat").innerHTML = greetSentence;
        }
        else {
            var secondSentence = "This, is in Development Process, Please wait for the admin! Thank you...:)";
            document.getElementById("responseChat").innerHTML = secondSentence;
        }

        
        
        };
    }
);
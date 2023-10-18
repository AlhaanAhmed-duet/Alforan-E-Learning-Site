document.addEventListener("DOMContentLoaded", function () {
    var preLoaderShow = () => {
        preloader.style.display = "block";
    }
    var preloaderHide = () => {
        preloader.style.display = "none";
    }
    var preloader = document.getElementById("showloading");
    window.addEventListener("load", function() {
        preloaderHide(); // After loading loading screen will not display
    })
    document.querySelector(".linkfunc").addEventListener("click", function () {
        preLoaderShow(); // This is meant to show Loading Screen
        var xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {

                preloaderHide();   // This is meant to hide the preloader after http request reponse i.e AJAX Response               
                document.getElementById("main").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "snippets/snippets.html", true);
        xhttp.send();

})
        // Rest of the Code Goes Here






})
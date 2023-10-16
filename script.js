document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("showloading");
    window.addEventListener("load", function() {
        preloader.style.display = "none";
    })
    document.querySelector(".linkfunc").addEventListener("click", function () {
        preloader.style.display = "block";
        var xhttp = new XMLHttpRequest();
        
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {

                preloader.style.display = "none";                
                document.getElementById("main").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "snippets/snippets.html", true);
        xhttp.send();

}) })
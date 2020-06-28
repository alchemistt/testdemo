var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

function handler() {
    console.log('jquery added :)');
}
mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function toggle(i) {

    var burger = document.getElementById("togglebuttonburger");
    var close = document.getElementById("togglebuttonclose");
    var conatiner = document.getElementById("conatiner");

    if (i == 1) {
        console.log(false);
        burger.style.display = "none";
        conatiner.style.paddingTop = "175px"
        close.style.display = "block";

        // console.log(elmnt);


    } else {
        conatiner.style.paddingTop = "75px"

        close.style.display = "none";
        burger.style.display = "block";


        console.log(true);


    }

}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function skillset() {
    // var elmnt = document.getElementById("skillset");
    // console.log("element" + elmnt);
    // document.body.scrollTop = 0;
    // elmnt.scrollIntoView();

    console.log(window.scrollY);
    var w = window.innerWidth;
}
// window.onload = 
function graph() {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        backgroundColor: "transparent",

        title: {
            // text: "Desktop Search Engine Market Share - 2016"
        },


        data: [{
            type: "pie",
            // type: "doughnut",
            startAngle: 240,

            // yValueFormatString: "##0.00\"%\"",
            // indexLabel: "{label} {y}",
            dataPoints: [
                { y: 22.45, label: "HTML" },
                { y: 23.31, label: "CSS" },
                { y: 16.06, label: "Bootstrap" },
                { y: 20.91, label: "JavaScript " },
                { y: 16.26, label: "PHP" },
                { y: 10.26, label: "Angular " },
                { y: 18.26, label: "API " },


                // HTML, CSS, JS, Bootstrap 

            ]
        }]

    });
    chart.render();
}
window.addEventListener('scroll', function() {
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    // var w = window.innerWidth;

    progress = ((window.pageYOffset / height) * 100);
    document.getElementById('pageprogress').style.width = (progress) + "%"
    if (progress > 17 && progress < 19) {
        tablechange();
        graph();


    }
    if (progress > 45) {
        document.getElementById('pageprogress').style.width = (progress + 15) + "%"
    }
    if (progress > 70) {
        document.getElementById('pageprogress').style.width = (progress + 30) + "%"
    }
    // console.log(progress);


});

function tablechange() {

    var old = document.getElementById("old");
    var neww = document.getElementById("new");

    if (neww.style.display != "block") {
        bar();
    }
    neww.style.display = "block"
    old.style.display = "none"

}

function bar() {
    $(".python").animate({
        width: "70%"
    }, 2500);
    $(".php").animate({
        width: "75%"
    }, 3000);
    $(".java").animate({
        width: "80%"
    }, 3500);
    $(".c").animate({
        width: "60%"
    }, 1500);
}
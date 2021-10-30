function myFunction() {
    var body = document.body;
    var div = document.getElementById('background');
    var pa = document.getElementById('pa');

    body.classList.toggle("body-dmode");
    div.classList.toggle("square-dmode");
    pa.classList.toggle("dmode-text");

}

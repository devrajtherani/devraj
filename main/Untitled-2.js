// Set the date we're counting down to
var countDownDate = new Date("Aug 21, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").style.display = "none";
    document.getElementById("demo1").style.display = "block";
  }
  if (distance > 0){
    document.getElementById("demo").style.display = "block";
    document.getElementById("demo1").style.display = "none";
  }
}, 1000);
var myVar;

function myFunction(){
    myVar = setTimeout(showPage, 1500);
}
function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
    document.getElementById("content") .style.display = "block";
}

function myFunction(){
    myVar = setTimeout(showPage, 1500);
}
function showPage(){
    document.getElementById("loader-wrapper") .style.display = "none";
}
 
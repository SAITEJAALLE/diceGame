var randomnumber = Math.floor(Math.random() * 6 )+1;
var randomdice = "dice" + randomnumber + ".png";
var randomImage = "images/" + randomdice; 
var image1 = document.querySelector("img");
image1.setAttribute("src", randomImage);

function refreshPage(){
    window.location.reload();
}

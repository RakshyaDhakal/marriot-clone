// Get the modal
var modal = document.getElementById("loginModal");
var modal2 = document.getElementById("loginModal2");
var modal3 = document.getElementById("model");
// Get the link that opens the modal
var link = document.getElementById("openLoginLink");
var link2 = document.getElementById("openLoginLink2");
var link3 = document.getElementById("openLoginLink3");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];
var span2 = document.getElementsByClassName("close-btn")[1];
var span3 = document.getElementsByClassName("close-btn")[2];

// When the user clicks the link, open the modal
link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}


link2.onclick = function(event) {
    event.preventDefault();
    modal2.style.display = "block";
}


link3.onclick = function(event) {
    event.preventDefault();
    modal3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal3.style.display = "none";
}

span2.onclick = function() {
    modal.style.display = "none";
}

span3.onclick = function() {
    modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







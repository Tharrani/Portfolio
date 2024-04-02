var coll = document.getElementsByClassName("content");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    console.log("Hello");
    this.classList.toggle("active");
    var mydiv = this.getElementsByClassName("rolecontent");
    if(mydiv[0].style.display === "block"){
     mydiv[0].style.display = "none";   
    }
    else{
        mydiv[0].style.display = "block";
    }
  });
}
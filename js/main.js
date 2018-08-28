/*scrolling image*/
var images = document.getElementsByClassName("slider");
var index = 0;
images[index].style.display ="block";
function carousel(){

  if (index===images.length) {
    index=0;
    for (var i = 0; i < images.length; i++) {
      images[i].style.display="none";
    }
  }
  images[index].style.display ="block";
  index++;
}
var a = setInterval(carousel,1000);

function previewImg(){

  clearInterval(a);
  if (index == 1) {
    index = images.length;
    for (var i = 0; i < images.length; i++) {
      images[i].style.display ="block";
    }
  }
  images[index-1].style.display ="none";
  index += -1;
  }


function nextImg(){
  clearInterval(a);
  if (index == images.length) {
    index = 0;
    for (var i = 0; i < images.length; i++) {
      images[i].style.display ="none";
    }
  }
  images[index].style.display ="block";
  index ++;

}
/*add i element*/
function addElement () {
  for (var i = 1; i <= images.length; i++) {
    var newNode = document.createElement("i");
    var parentDiv = document.getElementById("caption").parentNode;
    var newI = document.getElementById("childElement");
    newNode.setAttribute('class', 'fas fa-circle hover');
    parentDiv.insertBefore(newNode, newI);
  }
}
addElement();

window.onscroll = function() {nav()};

const openSide = () => {
    document.getElementById("sideBar").style.width="150px"


}
const closeSide = () => {
    document.getElementById("sideBar").style.width="0"
}

const openModal = (element) => {
    document.getElementById("modal1").style.display = "block"
    document.getElementById("imgModal").src = element.src
    var captionText = document.getElementById("modalText")
    captionText.innerHTML = element.alt;
}   



var navbar = document.getElementById("navL");

var sticky = navbar.offsetTop;

function nav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
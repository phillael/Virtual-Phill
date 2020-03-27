var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  // Detecting button click
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press
document.addEventListener("keydown", function(event) {
  makeSound(event.key.toLowerCase());
  buttonAnimation(event.key.toLowerCase());
})

function makeSound(key) {

  switch (key) {
          // bottom keys
    case "z":
      var tom2 = new Audio('sounds/crash.mp3');
      tom2.play();
      break;

    case "x":
      var tom1 = new Audio('sounds/tom.mp3');
      tom1.play();
      break;

    case "c":
      var kick = new Audio('sounds/snare2.mp3');
      kick.play();
      break;

    case "v":
      var snare = new Audio('sounds/snare1.mp3');
      snare.play();
      break;

    case "b":
      var crash = new Audio('sounds/kick.mp3');
      crash.play();
      break;

    case "n":
      var tom3 = new Audio('sounds/hihat1.mp3');
      tom3.play();
      break;

    case "m":
      var tom4 = new Audio('sounds/skreep.mp3');
      tom4.play();
      break;

              // middle keys
    case "a":
      var chord1 = new Audio('sounds/chord1.mp3');
      chord1.play();
      break;

    case "s":
      var chord2 = new Audio('sounds/chord2.mp3');
      chord2.play();
      break;

    case "d":
      var chord3 = new Audio('sounds/chord3.mp3');
      chord3.play();
      break;

    case "f":
      var chord4 = new Audio('sounds/chord4.mp3');
      chord4.play();
      break;

    case "g":
      var chord5 = new Audio('sounds/chord5.mp3');
      chord5.play();
      break;

    case "h":
      var chord6 = new Audio('sounds/chord6.mp3');
      chord6.play();
      break;

    case "j":
      var chord7 = new Audio('sounds/chord7.mp3');
      chord7.play();
      break;

    case "k":
      var chord8 = new Audio('sounds/chord8.mp3');
      chord8.play();
      break;

    case "l":
      var chord9 = new Audio('sounds/chord9.mp3');
      chord9.play();
      break;

            // top keys

    case "q":
      var singer1 = new Audio('sounds/singer1.mp3');
      singer1.play();
      break;

    case "w":
      var singer2 = new Audio('sounds/singer2.mp3');
      singer2.play();
      break;

    case "e":
      var singer3 = new Audio('sounds/singer3.mp3');
      singer3.play();
      break;

    case "r":
      var singer4 = new Audio('sounds/singer4.mp3');
      singer4.play();
      break;

    case "t":
      var singer5 = new Audio('sounds/singer5.mp3');
      singer5.play();
      break;

    case "y":
      var singer6 = new Audio('sounds/singer6.mp3');
      singer6.play();
      break;

    case "u":
      var singer7 = new Audio('sounds/singer7.mp3');
      singer7.play();
      break;

    case "i":
      var singer8 = new Audio('sounds/singer8.mp3');
      singer8.play();
      break;

    case "o":
      var singer9 = new Audio('sounds/singer9.mp3');
      singer9.play();
      break;

    case "p":
      var singer10 = new Audio('sounds/singer10.mp3');
      singer10.play();
      break;

    default:
    console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

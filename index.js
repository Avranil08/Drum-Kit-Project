// document.querySelector('button').addEventListener('click', handleClick);
// function handleClick() {
//   alert('I got clicked');
// }

//Or
// document
//   .querySelector('button')
//   .addEventListener('click', function () {
//     alert('I got clicked');
//   });

//Javascript object
// var housekeeper1 = {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoire: ["bathroom","lobby","bedroom"];
// moveSuitcase: function() {
//     alert("Mai I take your suitcase");
//     pickUpSuitcase();
//     move();
// }
// }
// Call Method
// housekeeper1.moveSuitcase();

//Constructor Functions
// function BellBoy(name,age,hasWorkPermit,languages)
// {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// this.moveSuitcase = function() {
//     alert("Mai I take your suitcase");
//     pickUpSuitcase();
//         move();
// }
// }

//Creating object
// var bellBoy1 = new BellBoy("Timmy",19,true,["French","English"]);

//Detecting button click
for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var btnInnerHTML = this.innerHTML;
    makeSound(btnInnerHTML);
    buttonAninmation(btnInnerHTML);
  });
}

//detecting keyboard button press
document.addEventListener('keydown', function (event) {
  console.log(event);
  makeSound(event.key);
  buttonAninmation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log(key);
      break;
  }
}

function buttonAninmation(currentKey) {
  var activeBtn = document.querySelector('.' + currentKey);
  activeBtn.classList.add('pressed');

  setTimeout(function () {
    activeBtn.classList.remove('pressed');
  }, 100);
}

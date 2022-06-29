function PointOne() {
  var x = document.querySelector(".pointone");
  if (x.style.display === "none") {
    x,
    y.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function PointOnes() {
  var x = document.querySelector(".pointones");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function PointOness() {
  var x = document.querySelector(".pointoness");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}




function PointTwo() {
  var x = document.querySelector(".pointtwo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function PointTwos() {
  var x = document.querySelector(".pointtwos");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function PointTwoss() {
  var x = document.querySelector(".pointtwoss");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function PointThree() {
  var x = document.querySelector(".pointthree");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function PointThrees() {
  var x = document.querySelector(".pointthrees");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function PointThreess() {
  var x = document.querySelector(".pointthreess");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function EndPoint() {
  var x = document.querySelector(".endpoint");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


! function (e) {
  "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) {
    for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;) ++n;
    return Boolean(o[n])
  }), "function" != typeof e.closest && (e.closest = function (e) {
    for (var t = this; t && 1 === t.nodeType;) {
      if (t.matches(e)) return t;
      t = t.parentNode
    }
    return null
  })
}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {

 
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');



  modalButtons.forEach(function (item) {

    item.addEventListener('click', function (e) {

  
      e.preventDefault();

      
      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


  
      modalElem.classList.add('active');
      overlay.classList.add('active');
    }); 

  }); 


  closeButtons.forEach(function (item) {

    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });

  }); // end foreach


  document.body.addEventListener('keyup', function (e) {
    var key = e.keyCode;

    if (key == 27) {

      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay').classList.remove('active');
    };
  }, false);


  overlay.addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });
});


const reser = document.getElementById("results")

function SaveResalt() {
  const reser = confirm('Вы уверенны ,что хотите сохранить изминения', '');
  if (reser) {
    alert('Поздравляю вы сохранили данные ');
  } else {
    alert('Вы отменили сохранения ');
  }
}


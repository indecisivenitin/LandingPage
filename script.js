var cursor = document.getElementById("cursor");
var body = document.querySelector("body");
var buttonEle = document.querySelectorAll("button");
var logo = document.getElementById("logo");
var wizard = document.getElementById("Wizard");

logo.addEventListener("mouseenter", function () {
  gsap.to("#logo", {
    rotate: 360,
    duration: 0.8,
    sclae: 1.5,
  });
});
logo.addEventListener("mouseleave", function () {
  gsap.to("#logo", {
    rotate: 45,
    duration: 0.8,
    sclae: 1,
  });
});

wizard.addEventListener("mouseenter", function () {
  wizard.style.color = "lightblue";
  wizard.style.letterSpacing = "3px";
});
wizard.addEventListener("mouseleave", function () {
  wizard.style.color = "black";
  wizard.style.letterSpacing = "0px";
});

body.addEventListener("mousemove", function (e) {
  gsap.to("#cursor", {
    x: e.x,
    y: e.y,
    duration: 0.8,
    opacity: 0.7,
    ease: "power3.out",
  });
});
for (let i = 0; i < buttonEle.length; i++) {
  buttonEle[i].addEventListener("mouseenter", function () {
    buttonEle[i].style.color = "black";
    buttonEle[i].style.backgroundColor = "white";
    cursor.innerHTML = "Click me";
    cursor.style.backgroundColor = "lightblue";
    gsap.to("#cursor", {
      scale: 2,
      opacity: 1,
    });
  });
}
for (let i = 0; i < buttonEle.length; i++) {
  buttonEle[i].addEventListener("mouseleave", function () {
    buttonEle[i].style.color = "white";
    buttonEle[i].style.backgroundColor = "black";
    cursor.innerHTML = "";
    cursor.style.backgroundColor = "";
    gsap.to("#cursor", {
      scale: 1,
      opacity: 1,
    });
  });
}
var initialPath = `M 75 100 Q 500 100 1400 100`;
var finalPath = `M 75 100 Q 500 100 1400 100`;
var string = document.querySelector("#string");
string.addEventListener("mousemove", function (dets) {
  initialPath = `M 75 100 Q ${dets.x} ${dets.y} 1400 100`;
  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.3,
    ease: "power4.out",
  });
});
string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
function themeChanger() {
  var fourh2 = document.getElementsByClassName("fourh2");
  var midH1 = document.querySelector(".midH1");
  var theme = document.querySelector(".theme");
  var illustration = document.querySelector("#hero-Illustration");
  var completeBody = document.querySelector(".complete");
  var page2 = document.getElementById("page2");
  var arrowImage = document.getElementsByClassName("arrow-image");
  var white = document.getElementsByClassName("white");
  theme.addEventListener("click", function () {
    body.style.backgroundColor = "black";
    body.style.color = "orange";
    illustration.style.backgroundColor = "orange";
    for (let i = 0; i < buttonEle.length; i++) {
      buttonEle[i].style.backgroundColor = "orange";
    }
    wizard.style.color = "orange";
    page2.style.backgroundColor = "black";
    page2.style.color = "orange";
    cursor.style.backgroundColor = "orange";
    midH1.style.backgroundColor = "orange";
    midH1.style.color = "black";
    for (let i = 0; i < fourh2.length; i++) {
      fourh2[i].style.backgroundColor = "orange";
      fourh2[i].style.color = "black";
    }
    for (let i = 0; i < arrowImage.length; i++) {
      arrowImage[i].style.backgroundColor = "orange";
    }
    for (let i = 0; i < white.length; i++) {
      white[i].style.backgroundColor = "rgb(67, 97, 30)";
    }
    wizard.addEventListener("mouseenter", function () {
      wizard.style.color = "orange";
      wizard.style.letterSpacing = "3px";
    });
    wizard.addEventListener("mouseleave", function () {
      wizard.style.color = "orange";
      wizard.style.letterSpacing = "0px";
    });
    for (let i = 0; i < buttonEle.length; i++) {
      buttonEle[i].addEventListener("mouseenter", function () {
        buttonEle[i].style.color = "black";
        buttonEle[i].style.backgroundColor = "orange";
        cursor.innerHTML = "Click me";
        cursor.style.backgroundColor = "orange";
        gsap.to("#cursor", {
          scale: 2,
          opacity: 1,
        });
      });
    }
    for (let i = 0; i < buttonEle.length; i++) {
      buttonEle[i].addEventListener("mouseleave", function () {
        buttonEle[i].style.color = "black";
        buttonEle[i].style.backgroundColor = "orange";
        cursor.innerHTML = "";
        cursor.style.backgroundColor = "";
        gsap.to("#cursor", {
          scale: 1,
          opacity: 1,
        });
      });
    }
  });
  theme.addEventListener("dblclick", function () {
    body.style.backgroundColor = "beige";
    body.style.color = "black";
    illustration.style.backgroundColor = "";
    for (let i = 0; i < buttonEle.length; i++) {
      buttonEle[i].style.backgroundColor = "black";
    }
    wizard.style.color = "black";
    page2.style.backgroundColor = "beige";
    page2.style.color = "black";
    cursor.style.backgroundColor = "lightblue";
    midH1.style.backgroundColor = "lightblue";
    midH1.style.color = "black";
    for (let i = 0; i < fourh2.length; i++) {
      fourh2[i].style.backgroundColor = "lightblue";
      fourh2[i].style.color = "black";
    }
    for (let i = 0; i < arrowImage.length; i++) {
      arrowImage[i].style.backgroundColor = "lightblue";
    }
    for (let i = 0; i < white.length; i++) {
      white[i].style.backgroundColor = "white";
    }
    wizard.addEventListener("mouseenter", function () {
      wizard.style.color = "lightblue";
      wizard.style.letterSpacing = "3px";
    });
    wizard.addEventListener("mouseleave", function () {
      wizard.style.color = "black";
      wizard.style.letterSpacing = "0px";
    });
    for (let i = 0; i < buttonEle.length; i++) {
      buttonEle[i].addEventListener("mouseenter", function () {
        buttonEle[i].style.color = "white";
        buttonEle[i].style.backgroundColor = "black";
        cursor.innerHTML = "Click me";
        cursor.style.backgroundColor = "orange";
        gsap.to("#cursor", {
          scale: 2,
          opacity: 1,
        });
      });
    }
    for (let i = 0; i < buttonEle.length; i++) {
      buttonEle[i].addEventListener("mouseleave", function () {
        buttonEle[i].style.color = "white";
        buttonEle[i].style.backgroundColor = "black";
        cursor.innerHTML = "";
        cursor.style.backgroundColor = "";
        gsap.to("#cursor", {
          scale: 1,
          opacity: 1,
        });
      });
    }
  });
}
themeChanger();

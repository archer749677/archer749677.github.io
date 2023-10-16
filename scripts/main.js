// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

let myImage = document.querySelector("img");

// 切换图片
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/archer.jpeg") {
    myImage.setAttribute("src", "images/saber.jpeg");
  } else {
    myImage.setAttribute("src", "images/archer.jpeg");
  }
};

// 欢迎语
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla 酷毙了，" + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};

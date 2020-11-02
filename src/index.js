const ferretPic = document.getElementById("ferretPic");
const bigButton = document.getElementById("bigButton");
const smallButton = document.getElementById("smallButton");
const moveRightButton = document.getElementById("moveRight");
const moveLeftButton = document.getElementById("moveLeft");
const resetButton = document.getElementById("reset");

const getDims = () => ferretPic.getBoundingClientRect();

let picInfo = getDims();

bigButton.addEventListener("click", function () {
  ferretPic.height = ferretPic.height + 10;
});

smallButton.addEventListener("click", function () {
  ferretPic.height = ferretPic.height - 10;
});

moveRightButton.addEventListener("click", function () {
  picInfo.x = picInfo.x + 10;
  ferretPic.style = `margin-left: ${picInfo.x}px`;
});

moveLeftButton.addEventListener("click", function () {
  picInfo.x = picInfo.x - 10;
  ferretPic.style = `margin-left: ${picInfo.x}px`;
});

resetButton.addEventListener("click", () => {
  ferretPic.style = "margin-left: 0";
  ferretPic.height = 200;
  picInfo = getDims();
});

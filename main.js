var body = document.body;
var deng = document.getElementById("deng");
var light = true;
var els = document.querySelectorAll("li");

var switchLight = function() {
  if (light) {
    body.className = "night";
    light = false;
    setRandomColor();
  } else {
    body.removeAttribute("class");
    light = true;
    clearRandomColor();
  }
};

deng.onclick = switchLight;

function setRandomColor() {
  els.forEach((el, index) => {
    var r = (Math.random() * 256) | 0;
    var g = (Math.random() * 256) | 0;
    var b = (Math.random() * 256) | 0;
    el.style.color = `rgba(${r},${g},${b})`;
  });
}

function clearRandomColor() {
  els.forEach((el, index) => {
    el.style.color = null;
  });
}



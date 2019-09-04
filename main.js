var body = document.body;
var deng = document.getElementById('deng');
var light = true;

var switchLight = function(){
  if (light){
    body.className = 'night';
    light = false;
  }
  else {
    body.removeAttribute('class');
    light = true;
  }
}

deng.onclick = switchLight;



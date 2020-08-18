function insertJS() {
  // eslint-disable-next-line
  var body = document.body;

  var jsScriptNode0 = document.createElement('script');
  jsScriptNode0.setAttribute('type', 'text/javascript');
  jsScriptNode0.setAttribute('src', 'https://connect.podium.com/static/js/main.da68835e.chunk.js');
  body.appendChild(jsScriptNode0);

  var jsScriptNode1 = document.createElement('script');
  jsScriptNode1.setAttribute('type', 'text/javascript');
  jsScriptNode1.setAttribute('src', 'https://connect.podium.com/static/js/runtime-main.a2bed477.js');
  body.appendChild(jsScriptNode1);

  var jsScriptNode2 = document.createElement('script');
  jsScriptNode2.setAttribute('type', 'text/javascript');
  jsScriptNode2.setAttribute('src', 'https://connect.podium.com/static/js/2.ed7577f8.chunk.js');
  body.appendChild(jsScriptNode2);
}

var start = Date.now();
var interval = 9;

function main() {
  var body = document.body;
  if (body) {
    insertJS();
  } else if (Date.now() - start > 10000) {
    return null;
  } else {
    setTimeout(function() {
      main();
    }, interval);
    interval *= 2;
  }
}

main();

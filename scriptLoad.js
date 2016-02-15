//this is the load function for additional scripts
console.log('scriptLoader start');
var loadFile = function(filename){
  var script = document.createElement('script');
  script.src = filename;
  document.head.appendChild(script);
  console.log('>>load '+filename);
};
//this loads all subfiles with the loadfile function
document.onLoad = loadFile('namespace.js');
document.onLoad = loadFile('info.js');
document.onLoad = loadFile('charSheet.js');
document.onLoad = loadFile('content.js');
document.onLoad = loadFile('listener.js');
console.log('scriptLoader success');
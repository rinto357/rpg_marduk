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
window.onLoad = loadFile('info.js');
window.onLoad = loadFile('charSheet.js');
window.onLoad = loadFile('screens.js')
window.onLoad = loadFile('readWrite.js');
window.onLoad = loadFile('listenLoad.js');
//sets up the ajax requests
if(window.XMLHttpRequest){
  console.log('>>>>ajax able')
} else {window.alert('please download a modern browser')};
console.log('scriptLoader: end');
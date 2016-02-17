//this is the load function for additional scripts
console.log('scriptLoader start');
var loadFile = function(filename){
  var script = document.createElement('script');
  script.src = filename;
  document.head.appendChild(script);
  console.log('>>load '+filename);
};
//this loads all subfiles with the loadfile function
loadFile('namespace.js');
loadFile('info.js');
loadFile('charSheet.js');
loadFile('screens.js');
loadFile('listenLoad.js');
loadFile('readWrite.js');
//checks if ajax is a thing
if(window.XMLHttpRequest){
  console.log('>>>>ajax able')
} else {window.alert('please download a modern browser')};
console.log('scriptLoader: end');
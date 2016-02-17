document.version = '0.1.1';
console.log('namespace: start');
//namespace
var project = new function(){
  this.nTag = 'Marduk Character Creator'
  this.author = 'Torin Snow';
};
var scrn = function(id,clas,container,navable){
  var div = document.createElement('div');
  div.id = id;
  div.className = clas;
  document.getElementById(container).appendChild(div);
  console.log('>>load '+id);
  if(navable == true){
    var button = document.createElement('div');
    button.className += 'navBlock';
    button.id = id+'Nav';
    document.getElementById('nav').appendChild(button);
    console.log('>>>>navagatable')};
};
var flowTag = 0;
var btn = function(id,clas,container){
  var but = document.createElement('button');
  but.id = id;
  but.className = clas;
  document.getElementById(container).appendChild(but);
  console.log('>>load '+id);
};
var character = function(){};
var stat = function(name,description,x){
  this.nam = name;
  this.des = description;
  this.val = x;
};
var rng = function(min,max){
  Math.floor((Math.random()*max)+min);
};
var grab = function(filename,target){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (xhttp.readyState == 4 && xhttp.status == 200){
      document.getElementById(target).innerHTML = xhttp.responseText;
    };
  };
  xhttp.open("GET",filename+'?t='+Math.random(),true);
  xhttp.send();
}; // performs an noncashed ajax GET request
var sticker = function(id,filepath,target){
  var div = document.createElement('div');
  var img = document.createElement('img');
  div.id = id+'Container'
  img.id = id;
  img.src = filename;
  document.getElementById(div).appendChild(img)
  if(document.getElementById(target) !== null){
    document.getElementById(target).appendChild(div);
  };
  console.log(id+' - '+filename+' stuck to '+target);
};
var nam = 'name'; //dependancies exist - string
var des = 'description';
var val;
//rp variables - often strings
var gnd = 'gender';
var age = 'age';
var rac = 'race';
var hmt = 'hometown';
var bgs = 'background story';
var upb = 'upbringing and mannerisms';
var qrk = 'character quark';
//stat variables constructed from stat func
var str = 'how physically strong a character is';
var spd = 'how quickly a character can move';
var stm = 'how long a character can remain active';
var grt = 'how quickly the character gains skill';
var wis = 'how well the character retains and applies their memories';
var kno = 'how easily the character comes to understand concepts';
var mnp = 'how well the character causes change';
var jud = 'how capable the character is at making strict judgements';
var dsr = 'how deeply the character is motivated by their desires';
var job = 'the class or calling of the character. Based on their two primary mental stats';
var skl = 'aptitude of an action'
var ptn = 'potency of an action atack etc'
var dip = 'diplomatic equivilent of skill'
//world and event variables
console.log('namespace: end');
//this is the load function for additional scripts
console.log('scriptLoader start');
var loadFile = function(filename){
  var script = document.createElement('script');
  script.src = filename;
  document.head.appendChild(script);
  console.log('>>load '+filename);
};
//this loads all subfiles with the loadfile function
window.onLoad = 
  loadFile('charSheet.js');
  loadFile('screens.js');
  loadFile('scribe.js');
//checks if ajax is a thing
if(window.XMLHttpRequest){
  console.log('>>>>ajax able')
} else {window.alert('please download a modern browser')};
console.log('scriptLoader: end');
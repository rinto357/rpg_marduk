document.version = '0.1.1';
console.log('namespace: start');
//tnamespace
var project = function(){};
var display = function(width,height){};
var character = new project;
var stat = function(name,description,x){
  this.nam = name;
  this.des = description;
  this.val = x;
};
var nam; //dependancies exist - string
var des;
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
var grt = 'how quickly the character learns from experience';
var wis = 'how well the character retains and applies their memories';
var kno = 'how easily the character comes to understand concepts';
var mnp = 'how well the character causes change';
var jud = 'how capable the character is at making strict judgements';
var dsr = 'how deeply the character is motivated by their desires';

var job = 'the class or calling of the character. Based on their two primary mental stats';
//world and event variables
console.log('namespace: success');
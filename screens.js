console.log('screens: start');
//constructing the character window
var charWin = function(tag){
  flowTag = tag;
  //the character window itself
  new scrn('charWin',null,'display',true);
  //all the peices of the character window
  new scrn('charStat',null,'charWin',false);
  new btn('grtBtn','accordion','charStat');
  new scrn('grtStat','panel','charStat',false);
  new btn('wisBtn','accordion','charStat');
  new scrn('wisStat','panel','charStat',false);
  new btn('mnpBtn','accordion','charStat');
  new scrn('mnpStat','panel','charStat',false);
  new btn('knoBtn','accordion','charStat');
  new scrn('knoStat','panel','charStat',false);
  new btn('judBtn','accordion','charStat');
  new scrn('judStat','panel','charStat',false);
  new btn('dsrBtn','accordion','charStat');
  new scrn('dsrStat','panel','charStat',false);
  console.log('>>loaded screen '+flowTag);
};


console.log('screens: end');
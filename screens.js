console.log('screens: start');
//constructing the character window
var charWin = function(tag){
  console.log('scrnTag '+flowTag)
  flowTag = tag;
  //the character window itself
  new scrn('charWin',null,'display',true);
  //all the peices of the character window
  new scrn('charStat',null,'charWin',false);
  new btn('grtBtn','overAccord','charStat');
  new btn('wisBtn','overAccord','charStat');
  new btn('mnpBtn','overAccord','charStat');
  new btn('knoBtn','overAccord','charStat');
  new btn('judBtn','overAccord','charStat');
  new btn('dsrBtn','overAccord','charStat');
  new scrn('statExplain','panel allTarg','charStat',false);
  console.log('>>loaded screen '+flowTag);
};


console.log('screens: end');
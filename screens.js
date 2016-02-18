console.log('screens: start');
//constructing the character window
var charWin = function(tag){
  console.log('scrnTag '+flowTag)
  flowTag = tag;
  //the character window itself
  new scrn('charWin','','display',true);
  //all the peices of the character window
  new scrn('charStat','','charWin',false);
  new scrn('btnHolder','','charStat',false)
  new btn('grtBtn','overAccord','btnHolder');
  new btn('wisBtn','overAccord','btnHolder');
  new btn('mnpBtn','overAccord','btnHolder');
  new btn('knoBtn','overAccord','btnHolder');
  new btn('judBtn','overAccord','btnHolder');
  new btn('dsrBtn','overAccord','btnHolder');
  new scrn('explain','panel allTarg','charStat',false,'400px','100px');
  console.log('>>loaded screen '+flowTag);
};


console.log('screens: end');
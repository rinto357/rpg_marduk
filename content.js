console.log('content: start');
//this function is for replacing inner html with new content via id
var writeOver = function(where,what){
  if((document.getElementById(where) !== null) && (what !== undefined)){
    document.getElementById(where).innerHTML = what;
  };
};
//footer info content
writeOver('info','version '+document.version+' | by '+project.author+' | '+document.lastModified);
//character related stuff
writeOver('name',character.nam);
writeOver('description',character.des);
writeOver('gender',character.gnd);
writeOver('age',character.age);
writeOver('race',character.rac);
writeOver('job',character.job);
writeOver('hometown',character.hmt);
writeOver('background',character.bgs);
writeOver('upbringing',character.upb);
writeOver('quarks',character.qrk);
writeOver('strength',character.str.val);
writeOver('speed',character.spd.val);
writeOver('stamina',character.stm.val);
writeOver('growth',character.grt.val);
writeOver('wisdom',character.wis.val);
writeOver('manipulation',character.mnp.val);
writeOver('knowledge',character.kno.val);
writeOver('jud',character.jud.val);
writeOver('desire',character.dsr.val);
console.log('content: success');
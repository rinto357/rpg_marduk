console.log('scribe: start');
//this function is for replacing inner html with new content via id
var writeOver = function(where,what){
  if((document.getElementById(where) !== null) && (what !== undefined)){
    document.getElementById(where).innerHTML = what;
  };
};
//this handles interactive elements
charWin(1);
//accordion handling js pulled from w3 schools, may be modified from original
new function(){
  // Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel //
  var acrd = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acrd.length; i++) {
    acrd[i].onclick = function(){
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    };
  };
  //not sure how useful this is, but it gives more freedom at the cost of more work
  var trga = document.getElementsByClassName("targAccord");
  for (i = 0; i < trga.length; i++) {
    trga[i].onclick = function(){
      this.classList.toggle("active");
      mate = document.getElementsByClassName(this.id+'Target');
      for (i = 0; i < mate.length; i++) {
        mate[i].classList.toggle("show");
      };
    };
  };
  //use this when many buttons activate the same target(s)
  var lastClicked = 'none';
  var resetClicked = false;
  var ovra = document.getElementsByClassName("overAccord");
  for (i = 0; i < ovra.length; i++) {
    ovra[i].onclick = function() {
      //toggles off the last selection
      if(lastClicked !== 'none') {
        document.getElementById(lastClicked).classList.toggle('active');
      };
      //makes sure it doesn't toggle off without hitting proper triggers
      if(lastClicked !== this.id){
        this.classList.toggle('active')
      } else {
        resetClicked = true
      };
      //shows target if one thing is toggled on
      mate = document.getElementsByClassName('allTarg');
      for (i = 0; i < mate.length; i++) {
        if ((lastClicked == 'none')||(lastClicked == this.id)) {
          mate[i].classList.toggle("show");
        };
      };
      //sets this as last clicked or triggers toggling off behavior
      if(resetClicked !== true){
        lastClicked = this.id
      } else {
        lastClicked = 'none'
        resetClicked = false
      };
    };
  };
};

//footer info content
writeOver('info','version '+document.version+' | by '+project.author+' | '+document.lastModified);
//add text to stat accordian on character window
writeOver('grtBtn','Growth');
writeOver('wisBtn','Wisdom');
writeOver('mnpBtn','Manipulation');
writeOver('knoBtn','Knowledge');
writeOver('judBtn','Judgement');
writeOver('dsrBtn','Desire');
grab('text/test.txt','statExplain')
console.log('scribe: end');
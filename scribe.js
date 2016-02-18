console.log('scribe: start');
//this handles interactive elements
//this is where screens are loaded after being built
new function(){
  charWin(1);
};
//accordion handling js pulled from w3 schools, may be modified from original
new function(){
  // Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel //
  acrd = document.getElementsByClassName("accordion");
  var i;
  for (i = 0; i < acrd.length; i++) {
    acrd[i].onclick = function(){
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    };
  };
  //not sure how useful this is, but it gives more freedom at the cost of more work
  trga = document.getElementsByClassName("targAccord");
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
  lastClicked = 'none';
  resetClicked = false;
  ovra = document.getElementsByClassName("overAccord");
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
//add text to character window
writeOver('grtBtn','Growth');
writeOver('wisBtn','Wisdom');
writeOver('mnpBtn','Manipulation');
writeOver('knoBtn','Knowledge');
writeOver('judBtn','Judgement');
writeOver('dsrBtn','Desire');
writeOver('explain','blarg');
//the particular update function for the listeners to call
actate.grtBtn = function() {
  update('explain','writeOver',grt,'a');
};
actate.wisBtn = function() {
  update('explain','writeOver',wis,'a');
};
actate.mnpBtn = function() {
  update('explain','writeOver',mnp,'a');
};
actate.knoBtn = function() {
  update('explain','writeOver',kno,'a');
};
actate.judBtn = function() {
  update('explain','writeOver',jud,'a');
};
actate.dsrBtn = function() {
  update('explain','writeOver',dsr,'a');
};
//event listeners
document.getElementById('grtBtn').addEventListener(
  'click',actate.grtBtn,false);
document.getElementById('wisBtn').addEventListener(
  'click',actate.wisBtn,false);
document.getElementById('mnpBtn').addEventListener(
  'click',actate.mnpBtn,false);
document.getElementById('knoBtn').addEventListener(
  'click',actate.knoBtn,false);
document.getElementById('judBtn').addEventListener(
  'click',actate.judBtn,false);
document.getElementById('dsrBtn').addEventListener(
  'click',actate.dsrBtn,false);
console.log('scribe: end');
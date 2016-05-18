statsView = function () {
  var stats = [
    ['growth', 'grt', 'growth is cool', 0],
    ['wisdom', 'wis', 'wisdom is cool', 0],
    ['manipulation', 'mnp', 'manipulation is cool', 0],
    ['knowledge', 'kno', 'knowledge is cool', 0],
    ['judgement', 'jdg', 'judgement is cool', 0],
    ['desire', 'dsr', 'desire is cool', 0],
    ['strength', 'str', 'strength is cool', 0],
    ['speed', 'spd', 'speed is cool', 0],
    ['stamina', 'sta', 'stamina is cool', 0]
  ];

  for (x=0; x < stats.length; x++) {
    var abbr = stats[x][1];
    var name = abbr + 'Btn';
    var $statTemplate = $('.stat-button.none');
    var currentStat = $statTemplate.clone().appendTo('#stat-buttons');

    currentStat.removeClass('none').html(stats[x][0]);
    currentStat.mousedown(function(){
      console.log($(this).text());
      $('.right-column').load('text/' + $(this).text() + 'Intro.txt');
    })
  }
}

 


$(document).ready(function(){
  statsView();
});
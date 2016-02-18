$(document).ready(function(){
  $('#display').load('screenInfo.html', function(){
    $('#grtBtn').click(function(){
      $('#csExplain').load('tex/grtIntro.txt', function(){
        $('#csExplain').toggle();
      });
    });
  });
});
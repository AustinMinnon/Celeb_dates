$(document).ready(function() {

  $('form#formg').submit(function(event) {
  var gender = $('select#gender').val();
  var child = $('select#childHood').val();
  var astro = $('select#astro').val();
    if (gender === "male" && astro === "mars") {
        $(".male").show();
        $('.opt1').addClass('hilite');
    } else if (gender === "male" && astro === "pluto") {
            $(".male").show();
            $('.opt2').addClass('hilite');
    } else if (gender === "male" && astro === "venus") {
            $(".male").show();
            $('.opt3').addClass('hilite');
    } else if (gender === "female" && astro === "venus") {
            $(".female").show();
            $('.opt2').addClass('hilite');
    } else if (gender === "female" && astro === "mars") {
            $(".female").show();
            $('.opt1').addClass('hilite');
    } else if (gender === "female" && astro === "pluto") {
            $(".female").show();
            $('.opt3').addClass('hilite');
    } else alert('You might not be ready for love')
    event.preventDefault();
  });
});

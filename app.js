
$("h1").hover(
  function() {
    $(".exclam").toggleClass("lit");
})

$(".interest").hover(
  function() {
    $(this).children().eq(0).toggleClass("ofinterest");
  }
)

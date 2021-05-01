$(".image-selector-wrapper").addClass("selected");

$(".image-selector").click(function (e) {
  $(".image-selector-wrapper").addClass("selected");
  $(".video-selector-wrapper").removeClass("selected");
});

$(".video-selector").click(function (e) {
  $(".image-selector-wrapper").removeClass("selected");
  $(".video-selector-wrapper").addClass("selected");
});

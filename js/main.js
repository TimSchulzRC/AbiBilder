$(".gallery").addClass("fade-in");
$(".heading").addClass("fade-in");
$(".mottowoche").addClass("fade-in");
$(".gallery-img").addClass("fade-in");
$(".media-selector").addClass("fade-in");

year = new Date().getFullYear();
let copyright = `Copyright © ${year} Tim Schulz`;
document.querySelector("footer").innerHTML += copyright;
// Remove fade-in when not visibleW

function download() {
  let img = $(".lb-image").attr("src");

  splitImgName = img.split("/")[img.split("/").length - 1].split("-");
  console.log(splitImgName);

  if (splitImgName.length > 1) {
    url = "images/originals/" + splitImgName[0] + ".jpg";
  } else {
    url = "images/" + splitImgName[0];
  }

  console.log(url);

  $("#download").attr("href", url);
  $("#download")[0].click();
}

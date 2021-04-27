$(".gallery").addClass("fade-in");
$(".heading").addClass("fade-in");
$(".mottowoche").addClass("fade-in");
$(".gallery-img").addClass("fade-in");

year = new Date().getFullYear();
let copyright = `Copyright © ${year} Tim Schulz`;
document.querySelector("footer").innerHTML += copyright;
// Remove fade-in when not visibleW

function download() {
  let img = $(".lb-image").attr("src");
  console.log(img);
  console.log(img.split("/")[img.split("/").length - 1]);
  console.log("download");
  $("#download").attr("href", img);
  document.getElementById("download").click();
}

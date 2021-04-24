$(".gallery").addClass("fade-in");
$(".heading").addClass("fade-in");
$(".mottowoche").addClass("fade-in");
$(".gallery-img").addClass("fade-in");

year = new Date().getFullYear();
let copyright = `Copyright © ${year} Tim Schulz`;
document.querySelector("footer").innerHTML += copyright;
// Remove fade-in when not visibleW

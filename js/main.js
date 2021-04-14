$(".gallery").addClass("fade-in");
$(".jahrgang").addClass("fade-in");

year = new Date().getFullYear();
let copyright = `Copyright © ${year} Tim Schulz`;
document.querySelector("footer").innerHTML += copyright;
// Remove fade-in when not visible

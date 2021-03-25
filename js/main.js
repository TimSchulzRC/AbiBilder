$(".images").addClass("fade-in");
$(".jahrgang").addClass("fade-in");

// const options = {
//   threshold: 0,
//   rootMargin: "0px 0px 10px 0px",
// };

// const appearOnScroll = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("hello");
//       entry.target.classList.add("fade-in");
//       observer.unobserve(entry.target);
//     } else {
//       return;
//     }
//   });
// }, options);

// appearOnScroll.observe(allImages);

year = new Date().getFullYear();
let copyright = `Copyright © ${year} Tim Schulz`;
document.querySelector("footer").innerHTML += copyright;
// Remove fade-in when not visible

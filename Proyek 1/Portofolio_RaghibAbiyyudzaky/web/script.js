let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");

  if (prevScrollpos > currentScrollPos) {
    // Scroll ke atas: tampilkan navbar
    navbar.classList.remove("navbar-hidden");
  } else {
    // Scroll ke bawah: sembunyikan navbar
    navbar.classList.add("navbar-hidden");
  }

  prevScrollpos = currentScrollPos;
};

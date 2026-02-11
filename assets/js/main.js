document.addEventListener("DOMContentLoaded", () => {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");

  if (!photo) return;

  let homeVisible = true;
  let aboutVisible = false;
  let skillsVisible = false;

  const update = () => {
    if (skillsVisible) {
      photo.classList.add("is-hidden");
      return;
    }
    // visible only during Home or About
    photo.classList.toggle("is-hidden", !(homeVisible || aboutVisible));
  };

  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.target.id === "home") homeVisible = e.isIntersecting;
        if (e.target.id === "about") aboutVisible = e.isIntersecting;
        if (e.target.id === "skills") skillsVisible = e.isIntersecting;
      }
      update();
    },
    { threshold: 0.05, rootMargin: "0px 0px -15% 0px" }
  );

  if (home) obs.observe(home);
  if (about) obs.observe(about);
  if (skills) obs.observe(skills);

  update();
});

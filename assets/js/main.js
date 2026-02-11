@media (max-width: 968px) {
  .hero {
    min-height: auto;
    padding: var(--spacing-lg) 0;
  }
  
  .hero-container {
    grid-template-columns: 1fr;
    text-align: left;
    gap: var(--spacing-md);
  }
  
  /* Keep image and content side by side on mobile */
  .hero-content {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  /* Move image next to name, LinkedIn style */
  .hero-image {
    float: right;
    margin-left: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
  }
  
  .hero-buttons {
    justify-content: flex-start;
    clear: both;
  }
  
  .quick-stats {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    clear: both;
  }
  
  .oval-frame {
    width: 120px;
    height: 150px;
  }
}

/* Even smaller screens */
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 0.9rem;
  }
  
  .hero-value-prop {
    font-size: 0.95rem;
    clear: both;
  }
  
  .oval-frame {
    width: 100px;
    height: 125px;
  }
  
  .quick-stats {
    gap: var(--spacing-sm);
  }
  
  .stat-item strong {
    font-size: 1.1rem;
  }
  
  .stat-item span {
    font-size: 0.75rem;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const photo = document.getElementById("floatingPhoto");
  const about = document.getElementById("about");
  const skills = document.getElementById("skills");

  if (!photo) return;

  // Add "is-about" while About section is in view (optional sizing/position tweak)
  if (about) {
    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          photo.classList.toggle("is-about", e.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );
    aboutObserver.observe(about);
  }

  // Hide the photo when Skills / Technical Expertise is reached
  if (skills) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          photo.classList.toggle("is-hidden", e.isIntersecting);
        });
      },
      { threshold: 0.05 }
    );
    skillsObserver.observe(skills);
  }
});

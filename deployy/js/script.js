document.addEventListener("DOMContentLoaded", function () {
  // === HERO CAROUSEL ===
  const emblaNode = document.querySelector(".hero-embla");
  const embla = EmblaCarousel(emblaNode, { loop: true, align: "start" });
  let autoplay = setInterval(() => embla.scrollNext(), 4000);
  emblaNode.addEventListener("mouseenter", () => clearInterval(autoplay));
  emblaNode.addEventListener("mouseleave", () => {
    autoplay = setInterval(() => embla.scrollNext(), 4000);
  });

  // === TESTIMONIALS CAROUSEL ===
  const testimonialNode = document.querySelector(".testimonial-embla");
  if (testimonialNode) {
    const testimonialEmbla = EmblaCarousel(testimonialNode, {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    });
    const prevBtn = document.getElementById("testimonialPrev");
    const nextBtn = document.getElementById("testimonialNext");
    if (prevBtn)
      prevBtn.addEventListener("click", () => testimonialEmbla.scrollPrev());
    if (nextBtn)
      nextBtn.addEventListener("click", () => testimonialEmbla.scrollNext());
    let testimonialAutoplay = setInterval(
      () => testimonialEmbla.scrollNext(),
      5000,
    );
    testimonialNode.addEventListener("mouseenter", () =>
      clearInterval(testimonialAutoplay),
    );
    testimonialNode.addEventListener("mouseleave", () => {
      testimonialAutoplay = setInterval(
        () => testimonialEmbla.scrollNext(),
        5000,
      );
    });
  }

  // === AWARDS CAROUSEL ===
  const awardsNode = document.querySelector(".awards-embla");
  if (awardsNode) {
    const awardsEmbla = EmblaCarousel(awardsNode, {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    });
    const aPrev = document.getElementById("awardsPrev");
    const aNext = document.getElementById("awardsNext");
    if (aPrev) aPrev.addEventListener("click", () => awardsEmbla.scrollPrev());
    if (aNext) aNext.addEventListener("click", () => awardsEmbla.scrollNext());
    let awardsAutoplay = setInterval(() => awardsEmbla.scrollNext(), 5000);
    awardsNode.addEventListener("mouseenter", () =>
      clearInterval(awardsAutoplay),
    );
    awardsNode.addEventListener("mouseleave", () => {
      awardsAutoplay = setInterval(() => awardsEmbla.scrollNext(), 5000);
    });
  }

  // === SCROLL REVEAL ===
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));

  // === ACCORDIONS ===
  function initAccordion(containerSel, btnSel, contentSel, iconSel) {
    const container = document.querySelector(containerSel);
    if (!container) return;
    container.querySelectorAll(btnSel).forEach((btn) => {
      btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector(iconSel);
        const isOpen = btn.getAttribute("aria-expanded") === "true";
        container.querySelectorAll(btnSel).forEach((b) => {
          b.setAttribute("aria-expanded", "false");
          b.nextElementSibling.style.maxHeight = null;
          const i = b.querySelector(iconSel);
          if (i) i.style.transform = "";
        });
        if (!isOpen) {
          btn.setAttribute("aria-expanded", "true");
          content.style.maxHeight = content.scrollHeight + "px";
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    });
  }
  initAccordion(
    "#featuresAccordion",
    ".accordion-btn",
    ".accordion-content",
    ".acc-icon",
  );
  initAccordion(
    "#programsAccordion",
    ".prog-btn",
    ".prog-content",
    ".prog-icon",
  );

  // === LAZY IFRAME: Scholarship Calculator ===
  var scSec = document.getElementById("scholarshipSection");
  if (scSec) {
    new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var f = document.createElement("iframe");
            f.src = "https://geetauniversity.edu.in/predictor_iframe";
            f.setAttribute("allowfullscreen", "");
            f.setAttribute("loading", "lazy");
            f.className = "w-full h-full border-0";
            f.title = "Scholarship Calculator";
            scSec.innerHTML = "";
            scSec.appendChild(f);
            scSec.classList.remove("iframe-lazy");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "200px 0px" },
    ).observe(scSec);
  }
});

function openVideoModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  iframe.src =
    "https://www.youtube.com/embed/arnFS6rf454?si=hjHgCKy7HD4cFFzb&autoplay=1";
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");
  document.body.style.overflow = "hidden";
}
function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoIframe");
  modal.classList.remove("opacity-100", "pointer-events-auto");
  modal.classList.add("opacity-0", "pointer-events-none");
  iframe.src = "";
  document.body.style.overflow = "";
}
document.getElementById("videoModal").addEventListener("click", function (e) {
  if (e.target === this) closeVideoModal();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeVideoModal();
});

function openVideoModal2() {
  const modal = document.getElementById("videoModal2");
  const iframe = document.getElementById("videoIframe2");
  iframe.src =
    "https://www.youtube.com/embed/D-TW0dcqMDA?si=4Wk5DoHZye5GWS-7&autoplay=1";
  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");
  document.body.style.overflow = "hidden";
}
function closeVideoModal2() {
  const modal = document.getElementById("videoModal2");
  const iframe = document.getElementById("videoIframe2");
  modal.classList.remove("opacity-100", "pointer-events-auto");
  modal.classList.add("opacity-0", "pointer-events-none");
  iframe.src = "";
  document.body.style.overflow = "";
}
document.getElementById("videoModal2").addEventListener("click", function (e) {
  if (e.target === this) closeVideoModal2();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeVideoModal2();
});

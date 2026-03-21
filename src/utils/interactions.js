import {dateConfig} from "../config/date-section.js";

function getCountdownParts(targetDate) {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function initCountdown() {
  const container = document.querySelector("[data-countdown]");
  if (!container) return;

  const targetYear = String(dateConfig.weddingDate.year)
  const targetMonth = String(dateConfig.weddingDate.month.numeric).padStart(2, '0')
  const targetDay = String(dateConfig.weddingDate.day).padStart(2, '0')
  const targetDate = new Date(`${targetYear}-${targetMonth}-${targetDay}T17:00:00`).getTime();
  const daysEl = container.querySelector("[data-days]");
  const hoursEl = container.querySelector("[data-hours]");
  const minutesEl = container.querySelector("[data-minutes]");
  const secondsEl = container.querySelector("[data-seconds]");

  const render = () => {
    const parts = getCountdownParts(targetDate);
    daysEl.textContent = String(parts.days);
    hoursEl.textContent = String(parts.hours).padStart(2, "0");
    minutesEl.textContent = String(parts.minutes).padStart(2, "0");
    secondsEl.textContent = String(parts.seconds).padStart(2, "0");
  };

  render();
  window.setInterval(render, 1000);
}

export function initRSVPForm() {
  const form = document.querySelector("[data-rsvp-form]");
  const extra = document.querySelector("[data-rsvp-extra]");
  const success = document.querySelector("[data-rsvp-success]");
  if (!form || !extra || !success) return;
  let hideExtraTimer = null;
  let submitStateTimer = null;
  const submitButton = form.querySelector(".rsvp-form__submit");

  const toggleExtra = () => {
    const attendance = form.querySelector('input[name="attendance"]:checked')?.value;
    if (hideExtraTimer) {
      window.clearTimeout(hideExtraTimer);
      hideExtraTimer = null;
    }
    if (attendance === "yes") {
      extra.hidden = false;
      return;
    }
    // Wait for CSS transition before hiding content semantically.
    extra.setAttribute("data-collapsing", "true");
    hideExtraTimer = window.setTimeout(() => {
      extra.hidden = true;
      extra.removeAttribute("data-collapsing");
      hideExtraTimer = null;
    }, 350);
  };

  form.addEventListener("change", toggleExtra);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (submitStateTimer) {
      window.clearTimeout(submitStateTimer);
      submitStateTimer = null;
    }
    submitButton?.classList.add("is-pressed");
    submitStateTimer = window.setTimeout(() => {
      if (success.hidden) {
        submitButton?.classList.remove("is-pressed");
      }
      submitStateTimer = null;
    }, 1400);
    form.classList.add("is-submitting");
    form.hidden = true;
    success.hidden = false;
  });

  toggleExtra();
}

export function initVenuePinScale() {
  const image = document.querySelector(".venue__image");
  const pin = image?.querySelector(".venue__pin");
  if (!image || !pin) return;

  let scaleTimer = null;
  pin.addEventListener("click", () => {
    image.classList.add("is-scaled");
    if (scaleTimer) {
      window.clearTimeout(scaleTimer);
    }
    scaleTimer = window.setTimeout(() => {
      image.classList.remove("is-scaled");
      scaleTimer = null;
    }, 260);
  });
}

export function initParallaxEffects() {
  const sections = Array.from(document.querySelectorAll(".section"));
  const parallaxSections = sections.map((section, index) => {
    const speed = 0.055 + (index % 3) * 0.015;
    section.dataset.parallaxSpeed = String(speed);
    section.classList.add("parallax-section");
    return section;
  });

  let rafId = 0;
  const updateParallax = () => {
    const viewportMid = window.innerHeight * 0.5;
    parallaxSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const speed = Number(section.dataset.parallaxSpeed || 0.06);
      const sectionMid = rect.top + rect.height * 0.5;
      const distance = sectionMid - viewportMid;
      const offset = Math.max(-28, Math.min(28, -distance * speed * 0.12));
      section.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
    });
    rafId = 0;
  };

  const requestParallaxUpdate = () => {
    if (rafId) return;
    rafId = window.requestAnimationFrame(updateParallax);
  };

  requestParallaxUpdate();
  window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
  window.addEventListener("resize", requestParallaxUpdate);

  const revealTargets = [
    ...document.querySelectorAll("[data-anim-invite-photo]"),
    ...document.querySelectorAll("[data-anim-invite-label]"),
    ...document.querySelectorAll("[data-anim-invite-text]"),
    ...document.querySelectorAll("[data-anim-timeline-item]"),
    ...document.querySelectorAll("[data-anim-dress-text]"),
    ...document.querySelectorAll("[data-anim-dress-swatch]"),
    ...document.querySelectorAll("[data-anim-fade-up]"),
  ];

  revealTargets.forEach((item) => item.classList.add("anim-pending"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("anim-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
  );

  revealTargets.forEach((item) => observer.observe(item));
}

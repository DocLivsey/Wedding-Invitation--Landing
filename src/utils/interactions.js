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
    form.classList.add("is-submitting");
    form.hidden = true;
    success.hidden = false;
  });

  toggleExtra();
}

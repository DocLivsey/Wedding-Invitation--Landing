import { renderHero } from "./hero.js";
import { renderInvitation } from "./invitation.js";
import { renderDateSection } from "./date-section.js";
import { renderSchedule } from "./schedule.js";
import { renderVenue } from "./venue.js";
import { renderDressCode } from "./dress-code.js";
import { renderWishes } from "./wishes.js";
import { renderRSVPForm } from "./rsvp-form.js";
import { renderContacts } from "./contacts.js";

export function renderLandingPage(config) {
  return `
    <main class="page">
      ${renderHero(config)}
      ${renderInvitation(config)}
      ${renderDateSection()}
      ${renderSchedule()}
      ${renderVenue()}
      ${renderDressCode()}
      ${renderWishes()}
      ${renderRSVPForm()}
      ${renderContacts(config)}
    </main>
  `;
}

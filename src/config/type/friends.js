import {renderHero} from "/src/components/hero.js";
import {renderInvitation} from "/src/components/invitation.js";
import {renderDateSection} from "/src/components/date-section.js";
import {renderSchedule} from "/src/components/schedule.js";
import {renderVenue} from "/src/components/venue.js";
import {renderDressCode} from "/src/components/dress-code.js";
import {renderWishes} from "/src/components/wishes.js";
import {renderGuestForm} from "/src/components/guest-form.js";
import {renderContacts} from "/src/components/contacts.js";
import {heroConfig} from "/src/config/hero.js";
import {invitiationConfig} from "/src/config/invitation.js";
import {dateConfig} from "../date-section.js";
import {venueConfig} from "../venue.js";
import {contactsConfig} from "/src/config/contacts.js";

export const friends = [
  renderHero(heroConfig),
  renderInvitation(invitiationConfig),
  renderDateSection(dateConfig),
  renderSchedule(),
  renderVenue(venueConfig),
  renderDressCode(),
  renderWishes(),
  renderGuestForm(),
  renderContacts(contactsConfig),
];
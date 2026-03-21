import {renderHero} from "../../components/hero.js";
import {renderInvitation} from "../../components/invitation.js";
import {renderDateSection} from "../../components/date-section.js";
import {renderSchedule} from "../../components/schedule.js";
import {renderVenue} from "../../components/venue.js";
import {renderDressCode} from "../../components/dress-code.js";
import {renderWishes} from "../../components/wishes.js";
import {renderGuestForm} from "../../components/guest-form.js";
import {renderContacts} from "../../components/contacts.js";
import {heroConfig} from "../hero.js";
import {invitiationConfig} from "../invitation.js";
import {dateConfig} from "../date-section.js";
import {venueConfig} from "../venue.js";
import {contactsConfig} from "../contacts.js";

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
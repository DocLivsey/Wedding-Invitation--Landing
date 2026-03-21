import { getType } from "./utils/router.js";
import { configs } from "./config/type/index.js";
import { renderLandingPage } from "./components/landing.js";
import { initCountdown, initParallaxEffects, initRSVPForm, initVenuePinScale } from "./utils/interactions.js";

const type = getType();
const config = configs[type] ?? configs.default;
const app = document.querySelector("#app");

if (app) {
  app.innerHTML = renderLandingPage(config);
  initParallaxEffects();
  initCountdown();
  initRSVPForm();
  initVenuePinScale();
}

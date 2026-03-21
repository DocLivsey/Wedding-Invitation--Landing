export function renderContacts(config) {
  return `
    <footer class="section section--white contacts" data-parallax-section>
      <div class="container">
        <h2 class="contacts__title" data-anim-fade-up>До встречи на нашем торжестве!</h2>
        <div class="contacts__heart" data-anim-fade-up style="--anim-delay:120ms;">❤</div>
        <div class="contacts__grid" data-anim-fade-up style="--anim-delay:240ms;">
          <div data-anim-fade-up style="--anim-delay:360ms;">
            <span class="contacts__name">Жених ${config.groomName}</span>
            <a href="tel:${config.groomPhoneLink}" class="contacts__phone">${config.groomPhone}</a>
          </div>
          <div class="contacts__line"></div>
          <div data-anim-fade-up style="--anim-delay:480ms;">
            <span class="contacts__name">Невеста ${config.brideName}</span>
            <a href="tel:${config.bridePhoneLink}" class="contacts__phone">${config.bridePhone}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function renderContacts(config) {
  return `
    <footer class="section section--white contacts">
      <div class="container">
        <h2 class="contacts__title">До встречи на нашем торжестве!</h2>
        <div class="contacts__heart">❤</div>
        <div class="contacts__grid">
          <div>
            <span class="contacts__name">Жених ${config.groomName}</span>
            <a href="tel:${config.groomPhoneLink}" class="contacts__phone">${config.groomPhone}</a>
          </div>
          <div class="contacts__line"></div>
          <div>
            <span class="contacts__name">Невеста ${config.brideName}</span>
            <a href="tel:${config.bridePhoneLink}" class="contacts__phone">${config.bridePhone}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

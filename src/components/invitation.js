export function renderInvitation(config) {
  return `
    <section class="section section--white invitation">
      <div class="container invitation__container">
        <div class="invitation__photos">
          <div class="person-card person-card--left">
            <div class="person-card__photo person-card__photo--groom"></div>
            <span class="person-card__role">Жених</span>
            <span class="person-card__name">${config.groomName}</span>
          </div>
          <div class="person-card person-card--right">
            <div class="person-card__photo person-card__photo--bride"></div>
            <span class="person-card__role">Невеста</span>
            <span class="person-card__name">${config.brideName}</span>
          </div>
        </div>
        <div class="invitation__text">
          <p class="invitation__lead">Да-да, это мы!</p>
          <p>
            Когда-то мы были детьми, беззаботными и веселыми.
            <br />
            А потом выросли, нашли друг друга...
            <br />
            и поняли, что хотим быть вместе навсегда!
          </p>
          <p>Мы приглашаем вас разделить с нами главный день в начале нашей истории любви.</p>
        </div>
      </div>
    </section>
  `;
}

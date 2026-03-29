export function renderInvitation(config) {
  return `
    <section class="section section--white invitation" data-parallax-section data-anim-invitation>
<!--      <div class="absolute inset-0 z-0 opacity-40">-->
<!--        <img src="../../public/assets/background/classic_wedding_background.jpeg" alt="" class="w-full h-full object-cover" />-->
<!--      </div>-->
      <div class="container invitation__container">
        <div class="invitation__photos">
          <div class="person-card person-card--left" data-anim-invite-photo style="--invite-delay: 0ms;">
            <div class="person-card__photo person-card__photo--groom"></div>
            <span class="person-card__role" data-anim-invite-label style="--invite-delay: 300ms;">Жених</span>
            <span class="person-card__name" data-anim-invite-label style="--invite-delay: 420ms;">${config.groomName}</span>
          </div>
          <div class="person-card person-card--right" data-anim-invite-photo style="--invite-delay: 140ms;">
            <div class="person-card__photo person-card__photo--bride"></div>
            <span class="person-card__role" data-anim-invite-label style="--invite-delay: 540ms;">Невеста</span>
            <span class="person-card__name" data-anim-invite-label style="--invite-delay: 660ms;">${config.brideName}</span>
          </div>
        </div>
        <div class="invitation__text">
          <p class="invitation__lead" data-anim-invite-text>Да-да, это мы!</p>
          <p data-anim-invite-text style="--invite-delay: 940ms;">
            Когда-то мы были детьми, беззаботными и веселыми.
            <br />
            А потом выросли, нашли друг друга...
            <br />
            и поняли, что хотим быть вместе навсегда!
          </p>
          <p data-anim-invite-text style="--invite-delay: 1080ms;">Мы приглашаем вас разделить с нами главный день в начале нашей истории любви.</p>
        </div>
      </div>
    </section>
  `;
}

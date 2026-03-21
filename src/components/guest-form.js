export function renderGuestForm() {
  return `
    <section class="section section--cream rsvp" data-parallax-section>
      <div class="container container--narrow">
        <h2 class="section-title" data-anim-fade-up>Анкета гостя</h2>
        <div class="divider" data-anim-fade-up style="--anim-delay:100ms;"></div>
        <p class="rsvp__description" data-anim-fade-up style="--anim-delay:220ms;">
          Пожалуйста, подтвердите свое присутствие до 1 июня 2026 года, чтобы мы могли планировать наше
          торжество наилучшим образом.
        </p>

        <div class="rsvp__success" hidden data-rsvp-success>
          <h3>Спасибо за ваш ответ!</h3>
          <p>Ваша анкета успешно отправлена</p>
        </div>

        <form class="rsvp-form" data-rsvp-form data-anim-fade-up style="--anim-delay:340ms;">
          <div class="rsvp-field rsvp-field--text">
            <input id="rsvp-fullname" name="fullName" placeholder=" " required />
            <label for="rsvp-fullname">Ваши Фамилия и Имя</label>
          </div>

          <fieldset class="rsvp-attendance">
            <legend>Присутствие</legend>
            <label class="radio-line">
              <input type="radio" name="attendance" value="yes" checked />
              <span class="radio-line__dot" aria-hidden="true"></span>
              <span>Я приду с удовольствием</span>
            </label>
            <label class="radio-line">
              <input type="radio" name="attendance" value="no" />
              <span class="radio-line__dot" aria-hidden="true"></span>
              <span>К сожалению, не смогу быть</span>
            </label>
          </fieldset>

          <div class="rsvp-form__extra" data-rsvp-extra>
            <label class="rsvp-field">
              <span>Сколько человек будет с вами?</span>
              <select name="peopleCount">
                <option value="1">Только я</option>
                <option value="2">Нас будет двое</option>
                <option value="3">Нас будет трое</option>
                <option value="4">Нас будет четверо</option>
                <option value="5+">5 и более</option>
              </select>
            </label>

            <div class="rsvp-field rsvp-field--text rsvp-field--textarea">
              <textarea id="rsvp-guests" name="guestNames" placeholder=" "></textarea>
              <label for="rsvp-guests">Имена ваших спутников (муж/жена, дети)</label>
            </div>
          </div>

          <button type="submit" class="button button--block rsvp-form__submit">
            <span>Отправить ответ</span>
          </button>
        </form>
      </div>
    </section>
  `;
}

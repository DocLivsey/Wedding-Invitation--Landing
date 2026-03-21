export function renderGuestForm() {
  return `
    <section class="section section--cream rsvp">
      <div class="container container--narrow">
        <h2 class="section-title">Анкета гостя</h2>
        <div class="divider"></div>
        <p class="rsvp__description">
          Пожалуйста, подтвердите свое присутствие до 1 июня 2026 года, чтобы мы могли планировать наше
          торжество наилучшим образом.
        </p>

        <div class="rsvp__success" hidden data-rsvp-success>
          <h3>Спасибо за ваш ответ!</h3>
          <p>Ваша анкета успешно отправлена</p>
        </div>

        <form class="rsvp-form" data-rsvp-form>
          <label>
            <span>Ваши Фамилия и Имя</span>
            <input name="fullName" placeholder="Иванов Иван" required />
          </label>

          <fieldset>
            <legend>Присутствие</legend>
            <label class="radio-line"><input type="radio" name="attendance" value="yes" checked /> Я приду с удовольствием</label>
            <label class="radio-line"><input type="radio" name="attendance" value="no" /> К сожалению, не смогу быть</label>
          </fieldset>

          <div class="rsvp-form__extra" data-rsvp-extra>
            <label>
              <span>Сколько человек будет с вами?</span>
              <select name="peopleCount">
                <option value="1">Только я</option>
                <option value="2">Нас будет двое</option>
                <option value="3">Нас будет трое</option>
                <option value="4">Нас будет четверо</option>
                <option value="5+">5 и более</option>
              </select>
            </label>

            <label>
              <span>Имена ваших спутников (муж/жена, дети)</span>
              <textarea name="guestNames" placeholder="Например: Мария (жена), Саша (сын, 5 лет)"></textarea>
            </label>
          </div>

          <button type="submit" class="button button--block">Отправить ответ</button>
        </form>
      </div>
    </section>
  `;
}

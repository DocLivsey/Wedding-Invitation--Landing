export function renderHero(config) {
  return `
    <section class="hero">
      <h1>${config.title}</h1>
      <p>${config.subtitle}</p>
    </section>
  `;
}

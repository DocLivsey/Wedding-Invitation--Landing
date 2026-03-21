export function renderLandingPage(config) {
  return `
    <main class="page">
      ${config.map(component => component).join('')}
    </main>
  `;
}

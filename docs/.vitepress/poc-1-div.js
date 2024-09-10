class Poc1Div extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });


    this.shadowRoot.innerHTML = `
    <style>
    @unocss-placeholder
    </style>
      <link href='https://assets.finn.no/pkg/@warp-ds/css/v1/tokens/tori-fi.css' rel='stylesheet'>
      <div class="s-bg-secondary s-text-inverted t2 m-4">
        <span class="text-xs">Tori theme (inside shadow DOM)</span>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.append(...this.childNodes);
  }
}

customElements.define('poc-1-div', Poc1Div);
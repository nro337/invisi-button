import { html, css, LitElement } from 'lit';

export class InvisiButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 25px;
        color: var(--invisi-button-text-color, #000);
        --invisibuttonBackgroundColor: #000;
        --invisibuttonTextColor: #ffffff;
        --invisibuttonFont: 'Inter', sans-serif;
        --disabledBackground: rgba(0, 0, 0, 0.4);
        --buttonActive: #ffdada;
      }

      @media (prefers-color-scheme: light) {
        --invisibuttonBackgroundColor: blue;
      }

      @media (prefers-color-scheme: dark) {
        --invisibuttonBackgroundColor: red;
      }

      button {
        display: inline-block;
        text-align: center;
        color: var(--invisibuttonTextColor);
        background-color: var(--invisibuttonBackgroundColor);
        padding: 0.5rem 2rem;
        border: 2px solid var(--invisibuttonBackgroundColor);
        border-radius: 5px;
        whitespace: nowrap;
        font-family: var(--invisibuttonFont);
        text-decoration: none;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
      }

      button:hover {
        color: var(--invisibuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
        cursor: pointer;
      }

      button:focus {
        color: var(--invisibuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
      }

      button:disabled {
        color: var(--invisibuttonTextColor);
        background-color: var(--disabledBackground);
        cursor: not-allowed;
      }

      button:active {
        background-color: var(--buttonActive);
      }

      a {
        font-family: var(--invisibuttonFont);
        color: var(--invisibuttonTextColor);
        text-decoration: none;
      }

      a:hover {
        color: var(--invisibuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
      }

      a:focus {
        color: var(--invisibuttonBackgroundColor);
        background-color: transparent;
        text-decoration: none;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      buttonState: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.buttonTitle = 'Join';
    this.buttonState = false;
  }

  __toggleDisabled() {
    if (this.buttonState === false) {
      this.buttonState = true;
    } else {
      this.buttonState = false;
    }
  }

  render() {
    return html`
      <a
        tabindex="-1"
        id="invisiButton"
        href="https://teuxdeux.com/signup"
        target="_blank"
        rel="noopener"
        ><button id="test" .disabled="${this.buttonState}">
          ${this.buttonTitle}
        </button></a
      >
      <br />
      <label for="disableCheck">Check to disable button</label>
      <input
        id="disableCheck"
        type="checkbox"
        name="disableCheck"
        @click=${this.__toggleDisabled}
      />
    `;
  }
}

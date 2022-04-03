const template = document.createElement("template")
template.innerHTML = /*html*/`

  <style>
    .modal-background {
      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      visibility: hidden;
      opacity: 0;
      transform: scale(1.2);
      transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    }

    .modal-background.active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }

    .modal {
      position: relative;
      background-color: white;
      width: 90%;
      height: 90%;
      border-radius: 3px;
      overflow-y: auto;
    }

    .close-button {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }

    .content {
      position: relative;
      top: 5%;
      display: flex;
      flex-direction: column;
      padding: 5%;
    }
  </style>

  <div class="modal-background">
    <div class="modal">
      <img class="close-button" src="./close.svg" alt="Schließen" />
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
`

export class GetyourModal extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.shadowRoot.querySelector(".close-button").addEventListener("click", () => {
      this.shadowRoot.querySelector(".modal-background").classList.remove("active")
    })
  }

  open() {
    this.shadowRoot.querySelector('.modal-background').classList.add('active')
  }
}

window.customElements.define("getyour-modal", GetyourModal)

class pageContainer extends HTMLElement {

  static get observedAttributes() {return ['title', 'invis']}
  
  constructor() {
    super()

    var shadow = this.attachShadow({mode: "open"})

    var style = document.createElement("style")
    style.textContent = `
      :host {
        display: block;
        width: 100%;
        position: absolute;

        animation-name: ingress;
        animation-duration: 1000ms;
        animation-iteration-count: 1;
      }

      :host([invis]) {
        opacity: 0;
        transform: scaleY(0);
        animation-name: egress;
        animation-duration: 300ms;
        animation-iteration-count: 1;
      }

      @keyframes ingress {
        0% {
          left: 100vw;
          opacity: 0;
        }
        50% {
          left: 10vw;
          opacity: 0;
        }
        100% {
          left: 0;
          opacity: 1;
        }
      }

      @keyframes egress {
        0% {
        }
        100% {
          opacity: 0;
        }
      }

      div {
        width: calc(100% - 40px);
        max-width: 750px;
        margin: 250px auto;
      }
    `

    this.slotEl = document.createElement("slot")
    this.contentDiv = document.createElement("div")
    this.contentDiv.appendChild(this.slotEl)


    shadow.appendChild(style)
    shadow.appendChild(this.contentDiv)
  }

  attributeChangedCallback(name, oldVal, newVal) {

  }
}

customElements.define("page-container", pageContainer)
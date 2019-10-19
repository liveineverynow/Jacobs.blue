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
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
        transition: transform 1ms, left 300ms ease-out 1ms, opacity 300ms;
      }

      :host([invis]) {
        transform: scaleY(0.1);
        left: 100vw;
        opacity: 0;
        overflow: hidden;
        transition: left 300ms ease-out, transform 1ms 300ms, opacity 300ms;

      }

      div {
        width: calc(100% - 40px);
        max-width: 750px;
        margin: 350px auto;
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
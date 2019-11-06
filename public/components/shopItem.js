class shopItem extends HTMLElement {
  constructor() {
    super()
    
    var shadow = this.attachShadow({mode: "open"})
    var style = document.createElement("style")
    style.textContent = `
      :host {
        display: block;
        background: #eee;
        width: 300px;
        height: 300px;
      }
    `

    shadow.appendChild(style)
  }
}

customElements.define("shop-item", shopItem)
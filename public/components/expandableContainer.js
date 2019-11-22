class expandableContainer extends HTMLElement {

  // Attributes
  static get observedAttributes() {return ['open']}

  // Constructor
  constructor() {
    super()

    var shadow = this.attachShadow({mode: "open"})


    var style = document.createElement("style")
    style.textContent = `

      :host {
        display: block;
        margin: 20px;
      }

      #main {
        background-color: #fff;
        width: 300px;
        height: 300px;
        border-radius: 10px;
        box-shadow: 3px 3px 1px 3px #00000022;
        transition: width 300ms, height 300ms;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      #main:hover {
        box-shadow: 4px 4px 2px 4px #00000033;
        width: 310px;
        height: 310px;
      }

      ::slotted(img) {
        width: 60%;
      }

    `

    


    let mainContainer = document.createElement("div")
    let mainSlot = document.createElement("slot")
    mainSlot.name = "main"
    mainContainer.appendChild(mainSlot)
    mainContainer.id = "main"

    let hiddenContainer = document.createElement("div")
    let hiddenSlot = document.createElement("slot")
    hiddenContainer.appendChild(hiddenSlot)
    hiddenContainer.id = "hidden"


    shadow.appendChild(style)
    shadow.appendChild(mainContainer)
    shadow.appendChild(hiddenContainer)
  }

}

customElements.define("expandable-container", expandableContainer)
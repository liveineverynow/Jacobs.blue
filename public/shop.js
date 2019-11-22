// Shop element
var shopDiv = document.getElementById("shop-items")


// get the store items
fetch('api/products')
// turn data into json
.then(data => data.json())
// do something with the data
.then(function(data) {
  data.forEach(item => {
    var newItem = buildItemElement(item.name, item.price, item.images[0], item.description)
    shopDiv.appendChild(newItem)
  })
})
// handle errors
.catch(function(error) {
  console.error(error)
})


// Functions

function buildItemElement(name, price, image, description) {
  let container = document.createElement("expandable-container")

  let imageEl = document.createElement("img")
  imageEl.src = image
  imageEl.slot = "main"

  /*
  let nameEl = document.createElement("h2")
  nameEl.textContent = name

  let priceEl = document.createElement("h3")
  priceEl.textContent = `$${price / 100}`

  let buyButton = document.createElement("button")
  buyButton.textContent = "Add to Cart"

  container.appendChild(nameEl)
  container.appendChild(priceEl)
  container.appendChild(buyButton)
  */
  container.appendChild(imageEl)

  return container
}
function changePage(pageName) {
  window.history.pushState(pageName, pageName, '/' + pageName);

  let oldPage = document.querySelector("page-container:not([invis])")
  let newPage = document.querySelector(`page-container[title=${pageName}]`)

  oldPage.setAttribute("invis", "")
  newPage.removeAttribute("invis")

  document.body.style.backgroundColor = newPage.getAttribute("color")
  document.querySelectorAll("nav button").forEach((el) => {el.style.color = "black"})
  document.getElementById(pageName + "-nav").style.color = "white"

  window.scrollTo(0, 0)

  if (pageName !== "home") {
    let logo = document.getElementById("logo")
    logo.classList.remove("jumbo")
    logo.classList.add("no-jumbo")
  } else {
    let logo = document.getElementById("logo")
    logo.classList.add("jumbo")
    logo.classList.remove("no-jumbo")
  }
}

let intendedURL = window.location.href.split("/")
intendedURL = intendedURL[intendedURL.length - 1]
let validUrls = ['home', 'shop', 'music', 'video', 'events', 'more']
if (validUrls.indexOf(intendedURL) > -1) {
  changePage(intendedURL)
}
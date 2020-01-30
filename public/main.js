function changePage(pageName) {
  let oldPage = document.querySelector("page-container:not([invis])")
  let newPage = document.querySelector(`page-container[title=${pageName}]`)


  document.querySelectorAll("nav button").forEach((el) => {el.style.color = "black"})
  document.getElementById(pageName + "-nav").style.color = "white"

  document.body.style.backgroundColor = newPage.getAttribute("color")

  window.history.pushState(pageName, pageName, '/' + pageName);


  oldPage.setAttribute("invis", "")
  newPage.removeAttribute("invis")



  window.scrollTo(0, 0)

  let logo = document.querySelector("header")
  if (pageName !== "home") {
    logo.classList.remove("jumbo")
    logo.classList.add("no-jumbo")
  } else {
    logo.classList.add("jumbo")
    logo.classList.remove("no-jumbo")
  }
}

let intendedURL = window.location.href.split("/")
intendedURL = intendedURL[intendedURL.length - 1]
let validUrls = ['home', 'shop', 'music', 'video', 'events', 'song01', 'song02', 'song03', 'song04', 'song05', 'song06']
if (validUrls.indexOf(intendedURL) > -1) {
  changePage(intendedURL)
}

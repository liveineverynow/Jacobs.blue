function changePage(pageName) {
  let oldPage = document.querySelector("page-container:not([invis])")
  let newPage = document.querySelector(`page-container[title=${pageName}]`)

  oldPage.setAttribute("invis", "")
  newPage.removeAttribute("invis")

  document.body.style.backgroundColor = newPage.getAttribute("color")
  document.querySelectorAll("nav button").forEach((el) => {el.style.color = "black"})
  document.getElementById(pageName + "-nav").style.color = "white"

  if (pageName !== "home") {
    let logo = document.getElementById("logo")
    logo.classList.remove("jumbo")
    logo.classList.add("no-jumbo")
  } else {
    window.scrollTo(0, 0)
    let logo = document.getElementById("logo")
    logo.classList.add("jumbo")
    logo.classList.remove("no-jumbo")
  }
}
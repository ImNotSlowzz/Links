function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*PEGAR A TAG*/
  const img = document.querySelector("#profile img")

  /*substituir imagem*/

  if (html.classList.contains("light")) {
    //se tiver light mode
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se estiver sem
    img.setAttribute("src", "./assets/avatar.png")
  }
}

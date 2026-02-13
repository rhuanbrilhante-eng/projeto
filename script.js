function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de cachorro caramelo com oculos,chocado")
  } else {
    img.setAttribute("alt", "Foto de gato chocado")
  }
  //pegar a tag img
  //substituir a imagem
  //se tiver light mode,adicionar a imagem light
  //se tiver sem light mode,manter a imagem normmal
}

const span = document.querySelector("#situaçao");
const img = document.querySelector("#img");
function alterar() {
  if (span.innerHTML === "FELIZ") {
    span.innerHTML = "TRISTE";
    img.setAttribute("src", "./asset/img/002.jpg")
  } else if (span.innerHTML === "TRISTE") {
    span.innerHTML = "CHORANDO";
    img.setAttribute("src", "./asset/img/003.jpg")
  } else if (span.innerHTML === "CHORANDO") {
    span.innerHTML = "FELIZ";
    img.setAttribute("src", "./asset/img/001.jpg")
  }
}

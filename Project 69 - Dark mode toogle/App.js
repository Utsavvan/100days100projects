function toogleClick() {
  let body = document.querySelector("body");
  let toogle = document.querySelector(".toogle");
  let circle = document.querySelector(".circle");

  body.classList.toggle("body-right");
  toogle.classList.toggle("toogle-right");
  circle.classList.toggle("right");
}

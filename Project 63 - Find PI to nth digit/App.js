function generatepi() {

  let input = document.querySelector(".inputfield");
  let answer = document.querySelector(".answer");

  let value = Number(input.value);

  if(value > 48){
      answer.innerHTML =  "value must not be greater than 48";
      return;
  }

  const pi = Math.PI.toFixed(value);
  answer.innerHTML =  pi;
}

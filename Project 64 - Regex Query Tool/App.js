function getAnswer() {
  let getString = document.querySelector(".string").value;

  let getRegx = document.querySelector(".regx").value;

  let answer = document.querySelector(".answer");

  try {
    let makeRegx = new RegExp(getRegx);
    let result = getString.match(makeRegx);

    if(result){
        answer.innerHTML = result.join(",");
    }else{
        answer.innerHTML = "No match found";
    }

  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

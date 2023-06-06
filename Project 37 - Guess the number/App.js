const handleChange = () => {
  const number = Math.floor(Math.random() * 20) + 1;

  let result = 0;

  function guessFunction(e) {

    let resultvalue = document.getElementsByClassName("result")[0];

    const guessNumber = Number(e.value);
    
    if (guessNumber > number) {
      result = "You guessed higher";
    } else if (guessNumber < number) {
      result = "You guessed Lower";
    } else if(guessNumber === number){
      result = "You guessed it right";
    }

    resultvalue.innerHTML = result;

    return e;
  }

  return {
    guessFunction,
  };
};

let { guessFunction } = handleChange();

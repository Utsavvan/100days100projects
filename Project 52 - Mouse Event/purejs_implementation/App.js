function getPosition(e){
    let positionX = e.clientX;
    let positionY = e.clientY;

    document.getElementsByClassName("x-position")[0].innerHTML = positionX;
    document.getElementsByClassName("y-position")[0].innerHTML = positionY;
}

window.addEventListener("mousemove",getPosition);
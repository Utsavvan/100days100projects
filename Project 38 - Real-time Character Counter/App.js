function handleKeyUp(e){
    let inputText = e.value ;
    
    let maxLength = e.getAttribute('maxlength');

    total.innerHTML = "Total characters : " + inputText.length ; 

    remaining.innerHTML = "Remaining characters : " + (maxLength - inputText.length);
    
}
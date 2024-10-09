function dicerolling() {
    const dicenumber=document.getElementById("dicenumber").value;
    const diceresult=document.getElementById("diceresult");
    const diceimage=document.getElementById("diceimage");
    const values=[];
    const images=[];
    for(let i=0;i<dicenumber;i++){
        const value= Math.floor(Math.random()* 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">`)
    }
    diceresult.textContent =` dice: ${values.join(', ')}`;
    diceimage.innerHTML= images.join('');



}
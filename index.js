
const generateButton = document.querySelector('.data-generate');

generateButton.addEventListener('click',randomNumGenerator);


function randomNumGenerator(){
    const minNum = document.querySelector('.data-min').value;
    const maxNum = document.querySelector('.data-max').value;
    randomNumber = Math.floor(Math.random() * parseInt(maxNum));
    if(randomNumber >= parseInt(minNum))
    {
        const randNum = document.querySelector(".output");
        randNum.innerHTML = randomNumber;
    }
}
function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none')
       e.style.display = 'block';
    else
       e.style.display = 'block';
 }
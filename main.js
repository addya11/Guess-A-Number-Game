let btn=document.getElementById('btn');
let index=0;
const colors=['salmon','green','blue','purple'];

let output=document.getElementById('outputtext');
let number=[Math.floor(Math.random()*100)]
btn.addEventListener('click',function onClick(){
    btn.style.backgroundColor=colors[index];
    btn.style.color='white';
    index=index>=colors.length-1?0:index+1;

    let input=document.getElementById('userInput').value;
    if(input==number){
        output.innerHTML='YOU GUESSED RIGHT, YOUR NUMBER WAS ${number}'
    }
    else if(input<number){
        output.innerHTML="YOU GUESSED TOO LOW!"
    };
    if(input>number){
        output.innerHTML="YOU GUESSED TOO HIGH!"
    }

});


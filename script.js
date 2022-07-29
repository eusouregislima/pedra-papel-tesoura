const firstButton = document.getElementById('buttonStone')
const secondButton = document.getElementById('buttonPaper')
const thirdButton = document.getElementById('buttonScissors')
const startButton = document.getElementById('start')
const input = document.getElementById('input');
const statusOne = document.getElementById('status');

document.getElementById('buttonStone').disabled = true;
document.getElementById('buttonPaper').disabled = true;
document.getElementById('buttonScissors').disabled = true;
document.getElementById('start').disabled = true;

document.getElementById('input').addEventListener('input', function(event){
    var conteudo = document.getElementById("input").value;
    
    if (conteudo !== null && conteudo !== ''){
        document.getElementById('buttonStone').disabled = false;
        document.getElementById('buttonPaper').disabled = false;
        document.getElementById('buttonScissors').disabled = false;
        document.getElementById('start').disabled = false;
    } else {
        document.getElementById('buttonStone').disabled = true;
        document.getElementById('buttonPaper').disabled = true;
        document.getElementById('buttonScissors').disabled = true;
        document.getElementById('start').disabled = true;
    }

});

const insertName = () => {
    document.getElementById('start').disabled = true;
    const myName = document.getElementById('myName');

    myName.innerHTML = input.value;
    input.value="";

    statusOne.innerHTML = '🍀 Faça a sua escolha 🍀';

}


const changeImg = () => {
     
  
    

    document.getElementById('start').disabled = true;

    const changeImgOne = document.getElementById("firstImg");
    changeImgOne.src = "./Assets/pedra.png";

    const pcImg = document.getElementById('secondImg');
    const statusOne = document.getElementById('status');
    const myResult = document.getElementById('zeroMy');
    const pcResult = document.getElementById('zeroPc');

    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)));

    
    if (number === 1) {
        pcImg.src = "./Assets/pedra.png";
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente';

    } 
    if (number === 2) {
        pcImg.src = "./Assets/papel.png";
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente';

        pcResult.innerHTML = `${pcResult.innerHTML} +1`;
        pcResult.innerHTML = eval(pcResult.innerHTML);
    } 

    if (number === 3) {
        pcImg.src = "./Assets/tesouraPc.png";
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente';

        myResult.innerHTML = `${myResult.innerHTML} +1`;
        myResult.innerHTML = eval(myResult.innerHTML);
    };

    
 }



const changeSecondImg = () => {
    document.getElementById('start').disabled = true;
    const changeImgOne = document.getElementById("firstImg");
    changeImgOne.src = "./Assets/papel.png";

    const pcImg = document.getElementById('secondImg');
    const statusOne = document.getElementById('status');
    const myResult = document.getElementById('zeroMy');
    const pcResult = document.getElementById('zeroPc');

    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)));


    if (number === 1) {
        pcImg.src = "./Assets/pedra.png";
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente';

        myResult.innerHTML = `${myResult.innerHTML} +1`;
        myResult.innerHTML = eval(myResult.innerHTML);
    } 

    if (number === 2) {
        pcImg.src = "./Assets/papel.png";
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente';        
    }

     if (number === 3) {
        pcImg.src = "./Assets/tesouraPc.png";
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente';

        pcResult.innerHTML = `${pcResult.innerHTML} +1`;
        pcResult.innerHTML = eval(pcResult.innerHTML);
    };

   

}

const changeThirdButton = () => {
    document.getElementById('start').disabled = true;
    const changeImgOne = document.getElementById("firstImg");
    changeImgOne.src = "./Assets/tesoura.png";

    const pcImg = document.getElementById('secondImg');
    const statusOne = document.getElementById('status');
    const myResult = document.getElementById('zeroMy');
    const pcResult = document.getElementById('zeroPc');

    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)));

    if (number === 1) {
        pcImg.src = "./Assets/pedra.png";
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente';

        pcResult.innerHTML = `${pcResult.innerHTML} +1`;
        pcResult.innerHTML = eval(pcResult.innerHTML);
    } 

    if (number === 2) {
        pcImg.src = "./Assets/papel.png"
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente'

        myResult.innerHTML = `${myResult.innerHTML} +1`;
        myResult.innerHTML = eval(myResult.innerHTML);
    } 
    
    if(number === 3) {
        pcImg.src = "./Assets/tesouraPc.png"
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente'
    };

      
}




firstButton.addEventListener('click', changeImg)
secondButton.addEventListener('click', changeSecondImg)
thirdButton.addEventListener('click', changeThirdButton)
startButton.addEventListener('click', insertName)

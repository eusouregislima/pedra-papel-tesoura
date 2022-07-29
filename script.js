const changeImgOne = document.getElementById("firstImg")
const pcImg = document.getElementById('secondImg')
const firstButton = document.getElementById('buttonStone')
const secondButton = document.getElementById('buttonPaper')
const thirdButton = document.getElementById('buttonScissors')
const statusOne = document.getElementById('status')

const scoreboardMy = document.getElementById('zeroMy')
const scoreboardPc = document.getElementById('zeroPc')

const teste = 'Parabéns - Você ganhou 🏆'
const testeteste = 'Perdeu 🤬 Tente Novamente'


const changeImg = () => {
    changeImgOne.src = "./Assets/pedra.png"

    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)));

    

    if (number === 1) {
        pcImg.src = "./Assets/pedra.png"

    } else if (number === 2) {
        pcImg.src = "./Assets/papel.png"

    } else {
        pcImg.src = "./Assets/tesoura.png"
    };


    if (number === 1) {
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente'
    } else if (number === 2) {
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente'

    } else {
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente'
    };
    
            
    
    if (number === 1) {
        
    } else if (number === 2) {
        scoreboardPc.innerHTML = '1'

    } else {
        scoreboardMy.innerHTML = '1'
    };

}

const changeSecondImg = () => {
    const changeSecondImg = document.getElementById("firstImg")
    changeSecondImg.src = "./Assets/papel.png"


    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)));

    if (number === 1) {
        pcImg.src = "./Assets/pedra.png"

    } else if (number === 2) {
        pcImg.src = "./Assets/papel.png"

    } else {
        pcImg.src = "./Assets/tesoura.png"
    };

    if (number === 2) {
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente'
    } else if (number === 1) {
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente'
    } else {
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente'
    }

    if (number === 2) {
        
    } else if (number === 1) {
        scoreboardMy.innerHTML = '1'

    } else {
        scoreboardPc.innerHTML = '1'
    };
}

const changeThirdButton = () => {
    const changeThirdButton = document.getElementById("firstImg")
    changeThirdButton.src = "./Assets/tesoura.png"

    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)));

    if (number === 1) {
        pcImg.src = "./Assets/pedra.png"

    } else if (number === 2) {
        pcImg.src = "./Assets/papel.png"

    } else {
        pcImg.src = "./Assets/tesoura.png"
    };


    if (number === 3) {
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente'
    } else if (number === 1) {
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente'
    } else {
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente'
    }


    if (number === 3) {
        
    } else if (number === 1) {
        scoreboardPc.innerHTML = '1'

    } else {
        scoreboardMy.innerHTML = '1'
    };

}




firstButton.addEventListener('click', changeImg)
secondButton.addEventListener('click', changeSecondImg)
thirdButton.addEventListener('click', changeThirdButton)
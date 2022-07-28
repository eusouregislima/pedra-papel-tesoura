const pcImg = document.getElementById('secondImg')
const firstButton = document.getElementById('buttonStone')
const secondButton = document.getElementById('buttonPaper')
const thirdButton = document.getElementById('buttonScissors')
const statusOne = document.getElementById('status')

const scoreboardMy = document.getElementById('zeroMy')
const scoreboardPc = document.getElementById('zeroPc')



const changeImg = () => {
    const changeImgOne = document.getElementById("firstImg")
    changeImgOne.src = "./Assets/pedra.png"


    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)))

    
    if (number === 1) {
        pcImg.src = "./Assets/pedra.png"

    } else if (number === 2) {
        pcImg.src = "./Assets/papel.png"

    } else {
        pcImg.src = "./Assets/tesoura.png"
    };

    

    if (number === 1) {
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente' 
    } else if (number === 2){
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente'
        
    } else {
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente'
        
    };
  
       
}

const changeSecondImg = () => {
    const changeSecondImg = document.getElementById("firstImg")
    changeSecondImg.src = "./Assets/papel.png"


    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)))

    if (number === 1) {
        pcImg.src = "./Assets/pedra.png"

    } else if (number === 2) {
        pcImg.src = "./Assets/papel.png"

    } else {
        pcImg.src = "./Assets/tesoura.png"
    };
    
    if (number === 2) {
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente' 
    } else if (number === 1){
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente' 
    }else {
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente' 
    }

}

const changeThirdButton = () => {
    const changeThirdButton = document.getElementById("firstImg")
    changeThirdButton.src = "./Assets/tesoura.png"

    const randon = Math.random()
    const number = (Math.ceil(randon * ((3 - 1) + 1)))

    if (number === 1) {
        pcImg.src = "./Assets/pedra.png"

    } else if (number === 2) {
        pcImg.src = "./Assets/papel.png"

    } else {
        pcImg.src = "./Assets/tesoura.png"
    };
    

    if (number === 3) {
        statusOne.innerHTML = 'Empate 🙄 Jogue Novamente' 
    }else if (number === 1){
        statusOne.innerHTML = 'Derrota 😕 Jogue Novamente'
    }else {
        statusOne.innerHTML = 'Vitória 😁 Jogue Novamente' 
    }
}




firstButton.addEventListener('click', changeImg)
secondButton.addEventListener('click', changeSecondImg)
thirdButton.addEventListener('click', changeThirdButton)



const header = document.querySelector('.header')
const main = document.querySelector('.main');
const but = document.querySelector('.button')

function changeColor(){
    
    whatColorMain();
    whatColorHeader()
}

function whatColorMain(){

    if(main.style.background == "black"){
        main.style.background = "wheat"
        main.style.color = "black"
        console.log("1")
    }else{
        main.style.background = "black"
        main.style.color = "white"
        console.log("2")
    }
}
function whatColorHeader(){

    if(header.style.background == "black"){
        header.style.background = "wheat"
        header.style.color = "black"
        console.log("1")
    }else{
        header.style.background = "black"
        header.style.color = "white"
        console.log("2")
    }
}
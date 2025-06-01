const button = document.querySelector('#btn');

const image = document.querySelector('#image');

button.addEventListener('click',()=>{
    console.log(image.src);
    if(image.src.match('off')){
        image.src='./assets/pic_bulbon.png';
        button.innerHTML='turn off';
    }
    else{
        image.src='./assets/pic_bulboff.png';
        button.innerHTML='turn on';
    }
})
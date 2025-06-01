const heading = document.querySelector('#heading');

const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    heading.style.color = 'red';
    console.log('button clicked')
})
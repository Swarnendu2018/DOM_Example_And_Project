//possible way to get DOM Element

//getting Element

console.log(document);

const H1heading = document.getElementById('heading');

console.log(H1heading);

const H2heading = document.getElementsByClassName('heading');

console.log(H2heading);//output is colllection type

console.log(H2heading[0]);

const tagHeading = document.getElementsByTagName('h1');

console.log(tagHeading);//output is colllection type

console.log(tagHeading[0]);
console.log(tagHeading[1]);


const quaryHeadingClass = document.querySelector('.heading'); //using query selector we can access class

console.log(quaryHeadingClass);

const quaryHeadingId = document.querySelector('#heading'); //using query selector we can access id

console.log(quaryHeadingId);

const parent = quaryHeadingClass.parentNode; //accesing parent node

console.log(parent);
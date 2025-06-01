//creating nodes

const paragraph = document.createElement('p');

paragraph.innerHTML = 'I am learning Javascript';

paragraph.classList.add('paraghaph');

const parent = document.querySelector('.parent');

parent.appendChild(paragraph);

console.log(paragraph);

const ul = document.createElement('ul');

parent.appendChild(ul);

paragraph.insertAdjacentElement('beforebegin',ul);

// beforebegin: it added before the target element itself
// afterbegin: it added just inside the target element, before its first child
// beforeend: it added just inside the target element, after its first child
// afterend: it added after the target element itself

const li = document.createElement('li');

li.innerHTML = 'don';

ul.appendChild(li);
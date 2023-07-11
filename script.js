const paraElement = document.createElement('p');

const innerTEXT = document.createTextNode('This is a para created by js');
paraElement.appendChild(innerTEXT);

document.querySelector('.heading').appendChild(paraElement);


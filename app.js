
// let documento = document;

// console.log (documento.body)



 

// console.log(documento);

// OBTENER ELEMENTOS

// document

// getElementById

// querySelector

// querySelectorAll

 
// // 1ra forma de como seleccionar una etiqueta "getElementById" Para llamar por id

// const elementTitle = document.getElementById('elementTitle');

 
// // 2da forma mediante "querySelector" para llamar por class, id, y etiquetas como tal

// const elementTitleByClass = document.querySelector('.title');

// const elementTitleById = document.querySelector('#elementTitle');

// const elementTitleByTag = document.querySelector('h1');

 

// const elementByContainer = document.querySelector('.container .child');

 

// const elementsNavBar = Array.from(document.querySelectorAll('nav ul li a'));

 

// console.log(elementTitle);

// console.log(elementTitleByClass);

// console.log(elementTitleById);

// console.log(elementTitleByTag);

// console.log(elementByContainer);

// console.log(Array.from(elementsNavBar));

 

// elementsNavBar.forEach((element) => {
// //   console.log(element);
// });

//  //.......................................................................................


// const element = document.getElementById('elementTitle');

 

// element.textContent = 'Modificando mi title';

 

// const elements = Array.from(document.querySelectorAll('nav ul li a'));

 

// elements.forEach((element, index) => {

//   element.textContent = `elemento # - ${index}`;

//   // console.log(element);

// });

 

// console.log(elements);

 //..............................................................................


// const element = document.getElementById('elementTitle');

 

// element.textContent = '';

// element.innerHTML = `<div> <section>hola mundo</section></div>`;

 
 //..............................................................................


// OBJECT DOCUMENT

// OBTENER ELEMENTOS

// document

// getElementById

// querySelector

// querySelectorAll

// MODIFICAR ELEMENTO

// textContent

// innerHTML

// ESTILOS

// .style

// classList



 //..............................................................................


// const element = document.getElementById('elementTitle');

// element.classList.add('card' ,'card2');

// // element.className('card')

// // background-color : 'red

 

// element.style.backgroundColor = 'red';

// element.style.fontSize = '40px';

 

// console.log(element);

 
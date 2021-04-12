//More methods and properties in Dom
//innerText :> this return text in between tags
const h1 = document.querySelector('h1');
const p =document.querySelector('p');


console.log(h1.innerText);
console.log(p.innerText);
console.log(document.body.innerText);

// textContent : this also return all text in between tags that also shows more spaces, hidden text and script between text

console.log(p.textContent);
console.log(document.body.textContent);

//innerHTML
// this return the all html tags and text in between tags

console.log(document.body.innerHTML);
p.innerHTML ='<b>Hello Bold</b>'

//value, src, href and more

// value return the value in tag

const inputs = document.querySelectorAll('input')
console.log(inputs[0].value);

//getAttribute
  // this return the attribute value
  console.log(inputs[2].getAttribute('type'));


//setAttribute 
    //this set the value in attribute
inputs[2].setAttribute('type', 'radio');

// Finding Paraent, children and siblings element
const firstLi = document.querySelector('li');
console.log(firstLi);
console.log(firstLi.parentElement);
const thirdLi = firstLi.nextElementSibling.nextElementSibling ;
console.log(thirdLi.previousElementSibling);

//changing multiple elements by example
const allLis = document.querySelectorAll('li');
// for(li of allLis){
//     li.innerText ='We all new li'
// }

//Altering Style
    //style property is use for manupulating css properties
    //this style property is only read inline style not seprate css style
    h1.style.color ='teal';
    p.style.backgroundColor = 'gold'


// getComputedStyle
    //this return all current applied css properites on element
    // this only read css current applied property
const compStyle = getComputedStyle(h1);
console.log(compStyle.color);

//manupulating classes
    //classList
        //classList help to easily manupulating css classes
const firstTodos = document.querySelector('.todo');
firstTodos.classList.toggle('done')
//firstTodos.classList.remove('todo')

//creatingElements
    //from the method createElement we create new HTML empty elements
    const newH2 = document.createElement('h2');

    //add something in h2
    newH2.innerText ='New created H2 Heading'

    //insert this created element in out HTML file from the method appendChild
    p.appendChild(newH2);

    //insertBefore
      //this provides where to insert new created element
      const newH3 = document.createElement('h3');
    newH3.innerText ='New created H3 Heading'
    const ul =document.querySelector('ul')

    //insertBefore
    ul.insertBefore(newH3, thirdLi);

    //insertAdjacentElement
        //targetElement.insertAdjacentElement(position, element)
        //beforebegin
        //afterbegin
        //beforeend
        //afterend
        ul.insertAdjacentElement('beforebegin', newH3);

        //append()
            //this method insert multiple elements at the end(after) of target element
            p.append(newH3,newH2);

        //prepend()
            //this method insert multiple elements at the start(before) the target Element 
        p.prepend(newH2,newH3);

    //removeChild()
      //this method remove chid element of target element
      //parentElement.removeChild(removingElement)
     
      //ul.removeChild(thirdLi)

      //remove()
        //this method remove elements
        //removingElement.remove()
       
        // thirdLi.remove();


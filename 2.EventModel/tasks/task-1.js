/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve(){
  function eventModelHomework(selector){
    var getElement,
        getButtons,
        root;

    //take the element or throw the exception
    if (selector == null) {
      throw new Error('Give parameter to function');
    }
    if (typeof(selector) === 'string') {
      getElement = document.getElementById(selector);
    }
    if (selector instanceof HTMLElement){
      getElement = document.getElementById(selector.id)
    }
    if (getElement === null) {
      throw new Error('Give as function parameter valid string id or dom element');
    }

    getButtons = document.getElementsByClassName('button');
    root = document.getElementById('root');

    for (i = 0; i < getButtons.length; i++) {
      getButtons[i].innerHTML = 'hide';
    }

    //add even listener on container
    root.addEventListener('click', toggleElements, false);
  }

  function toggleElements(ev){
    var target,
        next;
      if (ev.target.className === 'button') { 
        target = ev.target;
        next = target;  
      }
      while(next){
          if (next.className === 'content') {
            break;
          }
          next = next.nextElementSibling;
      }
      if (next.style.display === '') {
          target.innerHTML = 'show';
          next.style.display = 'none';
      } else if (next.style.display === 'none') {
          target.innerHTML = 'hide';
          next.style.display = '';
      }
  }
  return eventModelHomework;

 // eventModelHomework('root');
};

module.exports = solve;
/* globals $ */

/*

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {
    //var divEl = document.getElementById('container');
    return function (element, contents) {
      var getElement,
          i,
          div = document.createElement('div'),
          dFrag = document.createDocumentFragment(),
          clonedDiv,
          firstElementChild;

      //validations on element
      if (typeof(element) === 'string') {
        getElement = document.getElementById(element);
      } else if (element instanceof HTMLElement) {
        getElement = document.getElementById(element.id);
      } else {
        throw new Error('You must give valid id or dom element!');
      }

      //validation on contents array
      if (!contents || contents.some(function (item) {
            return (typeof(item) !== 'string' && typeof(item) !== 'number');
          })) {
        throw new Error('Content must be string or number!'); //in my example is ul element
      }

      //removing previous elements from getElement
      firstElementChild = getElement.firstElementChild;
      //use firstElementChild instead firstChild
      while (firstElementChild) {
        getElement.removeChild(firstElementChild);
        firstElementChild = firstElementChild.nextElementSibling;
      }

      //adding divs with content from array to getElement
      for (i = 0; i < contents.length; i++) {
        clonedDiv = div.cloneNode(true);
        clonedDiv.innerHTML = contents[i];
        dFrag.appendChild(clonedDiv);
      }
      getElement.appendChild(dFrag);
    };
    /*manipulateDivs(divEl, [ '<ul>' +
     '<li><a href="#">Test 6</a></li>' +
     '<li><a href="#">Test 7</a></li>' +
     '<li><a href="#">Test 8</a></li>' +
     '<li><a href="#">Test 9</a></li>' +
     '<li><a href="#">Test 10</a></li>' +
     '</ul>', '<ul>' +
     '<li><a href="#">Test 11</a></li>' +
     '<li><a href="#">Test 12</a></li>' +
     '<li><a href="#">Test 13</a></li>' +
     '<li><a href="#">Test 14</a></li>' +
     '<li><a href="#">Test 15</a></li>' +
     '</ul>'
     ]);*/
};
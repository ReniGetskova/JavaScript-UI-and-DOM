/* globals $ */

/*
Create a function that takes a selector and:
* Finds all elements with class `button` or `content` within the provided element
  * Change the content of all `.button` elements with "hide"
* When a `.button` is clicked:
  * Find the topmost `.content` element, that is before another `.button` and:
    * If the `.content` is visible:
      * Hide the `.content`
      * Change the content of the `.button` to "show"       
    * If the `.content` is hidden:
      * Show the `.content`
      * Change the content of the `.button` to "hide"
    * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
* Throws if:
  * The provided ID is not a **jQuery object** or a `string` 

*/
function solve() {
  return function (selector) {
    if (typeof(selector) !== 'string' || $(selector).length === 0) {
       throw new Error('invalid selector');
    }
    var $element = $(selector),
        $buttons = $('.button'),
        $contents = $('.content');

      $buttons.text('hide');
      $element.on('click', toggleElements);

      function toggleElements(ev) {
          if ($(ev.target).hasClass('button')) {
              var $target = $(ev.target),//use ev.target because gives exactly clicked element
                  $nextElement = $target;

              while($nextElement) {
                  if ($nextElement.hasClass('content')) {
                      break;
                  }
                  $nextElement = $nextElement.next();
              }

              if ($nextElement.css('display') === 'none') {
                  $target.text('hide'); //change the text
                  $nextElement.css('display','');
              } else {
                  $target.text('show'); //change the text
                  $nextElement.css('display','none');
              }
          }
      }
  };
}

module.exports = solve;
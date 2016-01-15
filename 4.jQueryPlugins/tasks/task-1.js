function solve(){
  return function(selector) {
    var $selector = $(selector),
        $dropdownList = $('<div />').addClass('dropdown-list'),
        $optionsContainer = $('<div class="options-container" style="position: absolute; display: none;"></div>'),
        $currentContainer = $('<div class="current" data-value="">Option 1</div>'),
        $numberOfOptions = $(selector).find('option').length,
        $options = $selector.find('option');

    $selector.hide().appendTo($dropdownList);
    $currentContainer.appendTo($dropdownList)

    for (var i = 0; i < $numberOfOptions; i++) {
      $('<div class="dropdown-item" data-value="' + $($options[i]).val() +'" data-index="' + i + '">Option' + (i+1) + '</div>').appendTo($optionsContainer);
    }

    $optionsContainer.appendTo($dropdownList);
    $dropdownList.appendTo('body');

    $currentContainer.on('click', function(){
      var $this = $(this);
      $optionsContainer.show();
      $this.text('Select a value');
    });

    $optionsContainer.on('click', '.dropdown-item', function(){
      $optionsContainer.hide();
      $selector.val($(this).attr('data-value'));
      $('.current').html($(this).html());
    });
  }

};

//module.exports = solve;
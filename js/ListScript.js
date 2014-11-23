$(document).ready(function() {

    var addItem = function() {
      $('.mainList').append('<li class="listItem"><input class="checkBox" type="checkbox"><input class="textInp" type="text" placeholder="..."></li>');
    };

    var remItem = function() {
      var isChecked = $("input[type='checkbox']:checked");
      isChecked.parent().remove();
    };

    $('.addItem').click(addItem);

    $('.updateList').click(remItem);
    
});
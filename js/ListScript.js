$(document).ready(function() {

    var addItem = function() {
      $('.mainList').append('<li class="listItem"><input id="check" class="checkBox" type="checkbox"><input class="textInp" type="text" placeholder="..."></li>');
    };

    $('.addItem').click(addItem);
});
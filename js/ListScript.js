$(document).ready(function() {

    var addItem = function() {
      $('.mainList').append('<li class="listItem"><input id="check" class="checkBox" type="checkbox"><input class="textInp" type="text" placeholder="..."></li>');
    };
    
    var itemDone = function() {
        if ($(this).is(':checked')) {
            alert("Checked!");
        } else {
            alert("Unchecked!");
        }
    };
    
    $('.mainList').on('click', '#check', itemDone);
    $('.addItem').click(addItem);
});
$(document).ready(function() {

    var addItem = function() {
      $('.mainList').append('<li class="listItem"><input id="check" class="checkBox" type="checkbox"><input class="textInp" type="text" placeholder="..."></li>');
    };
    
    /*var donE = function() {
        var checkED = $("input[type='checkbox']");
        if (checkED.is(':checked')) {
            checkED.parent().remove();
        }
    };*/
    
    var Massage = function() {
        if ($(this).is(':checked')) {
            alert("Checked!");
        } else {
            alert("Unchecked!");
        }
    };
    
    $('.mainList').on('click', '#check', Massage);
    $('.addItem').click(addItem);
});
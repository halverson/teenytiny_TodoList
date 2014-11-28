$(document).ready(function() {

    var addItem = function() {
      $('.mainList').append('<li class="listItem"><input class="checkBox" type="checkbox"><input class="textInp" type="text" placeholder="Add Item..."><p class="remItem myBtn">-</p></li>');
    };
    
    var delItem = function() {
      $(this).parent().remove();  
    };
    
    var itemDone = function() {
        var itemDone = $(this).parent();
        $('.doneList').append(itemDone);
    };
    
    var unDone = function() {
        var notDone = $(this).parent();
        $('.mainList').append(notDone);
    };
    
    $('.mainList').on('click', '.checkBox', itemDone);
    $('.doneList').on('click', '.checkBox', unDone);
    $('.mainList').on('focus', 'li:last-child', addItem);
    $('.mainList, .doneList').on('click', '.remItem', delItem);
});
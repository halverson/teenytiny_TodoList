$(document).ready(function() {

    var addItem = function() {
        var newItem = $('<li class="listItemA"><input class="checkBox" type="checkbox"><input class="textInp" type="text" placeholder="Add Item..."><p class="remItem myBtn">-</p></li>');
        $('.mainList').append(newItem);
        newItem.fadeIn(500);
    };
    
    var delItem = function() {
        var gonner = $(this).parent(),
            goneInp = gonner.find(':text').val();
        
        if (gonner.is(':only-child')) {
            gonner.fadeOut(100);
            gonner.fadeIn(100);
        } else if (goneInp === "") {
            gonner.fadeOut(100);
            gonner.fadeIn(100);
        } else {
            gonner.fadeOut(500, function() {
                gonner.remove();
            });
        }
    };
    
    var itemDone = function() {
        var itemDone = $(this).parent(),
            doneInp = itemDone.find(':text').val();
        if (doneInp === "") {
            itemDone.fadeOut(100);
            itemDone.fadeIn(100);
        } else {
            itemDone.fadeOut(500, function() {
                $('.doneList').append(itemDone);
                itemDone.fadeIn(500);
            });
        }
    };
    
    var unDone = function() {
        var notDone = $(this).parent(),
            lastItem = $('.mainList li').last();
        notDone.fadeOut(500, function() {
            lastItem.before(notDone);
            notDone.fadeIn(500);
        })
    };
    
    $('.mainList').on('keydown', 'li:last-child', addItem);
    $('.mainList').on('click', '.checkBox', itemDone);
    $('.mainList').on('click', '.remItem', delItem);
    $('.doneList').on('click', '.checkBox', unDone);
});
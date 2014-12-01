$(document).ready(function() {

    var addItem = function() {
        var newItem = $('<li class="listItem"><input class="checkBox" type="checkbox"><input class="textInp" type="text" placeholder="Add Item..."><p class="remItem myBtn">-</p></li>');
        $('.mainList').append(newItem);
    };
    
    var delItem = function() {
        var gonner = $(this).parent(),
            goneInp = gonner.find(':text').val();
        
        if (gonner.is(':last-child')) {
            gonner.fadeOut(50);
            gonner.fadeIn(50);
        } else {
            gonner.fadeOut(300, function() {
                gonner.remove();
            });
        }
    };
    
    var itemDone = function() {
        var itemDone = $(this).parent(),
            doneInp = itemDone.find(':text').val();
        if (doneInp === "") {
            itemDone.fadeOut(50);
            itemDone.fadeIn(50);
            $(this).attr("checked", false);
        } else {
            itemDone.fadeOut(300, function() {
                $('.doneList').append(itemDone);
                itemDone.fadeIn(300);
            });
        }
    };
    
    var unDone = function() {
        var notDone = $(this).parent(),
            lastItem = $('.mainList li').last();
        notDone.fadeOut(300, function() {
            lastItem.before(notDone);
            notDone.fadeIn(300);
        })
    };
    
    $('.mainList').on('keydown', 'li:last-child', addItem);
    $('.mainList').on('click', '.checkBox', itemDone);
    $('.mainList').on('click', '.remItem', delItem);
    $('.doneList').on('click', '.checkBox', unDone);
});
$(document).ready(function() {

    var addItem = function() {
      $('.mainList').append('<li class="listItem"><div class="checkbox"><input id="check" class="checkBox" type="checkbox"><label for="check"></label></div><input class="textInp" type="text" placeholder="Add Item..."></li>');
    };
    
    var itemDone = function() {
        var $this = $(this);
        $this.parent().fadeOut(600, function() {
            $this.parent().remove();
        });
    };
    
    $('.mainList').on('click', '#check', itemDone);
    $('.addItem').click(addItem);
});
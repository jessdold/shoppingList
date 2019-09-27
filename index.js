  //function to add item to the list

  $(document).ready(function() { 
    $('#js-shopping-list-form').on('submit', function(event) {
        event.preventDefault();
        //grab the value of what got typed in the form
        var item = $('#shopping-list-entry').val();
        // insert list item with that value
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
        $('#shopping-list-entry').val('');
        
      })

  //function to line-through or undo line-through when check is pushed
  $('.shopping-item-toggle').on('click', function () {
    $(this).parents('li').find('.shopping-item').toggleClass("shopping-item__checked")
  })

// function to delete a list item when delete is pushed

$('.shopping-item-delete').on('submit', function(event) {
  // delete that whole <li>...but how do i tell it to grab/delete only that particular li?
  $(this).parents("li").remove();
})


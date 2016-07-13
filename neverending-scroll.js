/*!
 * Video Embed Swap - V.1.0.1
 * Dain Blodorn / db13.us
 * Duplicates elements in a parent container for an endless scroll experience.
 * License: MIT
 *
 * Dependencies: Jquery
 *
 * | USAGE:
 * | Require / Import / and then initialize on your loading config: 
 * | neverEndingScroll('#parent-continer-id');
 *
 */

define('neverEndingScroll', function() {
  
  var neverEndingScroll = function(item){
    setInterval(appendContent, 10);
    
    var container = $(item),
        content = container.html(),
        counter = 0;
    
    function appendContent() {
      if($(window).scrollTop() + $(window).height() * 2 > $(document).height()) {
        container.html(container.html() + container.html());
        counter = counter + 1;
        if(counter == 3) {
          counter = 0;
          $(container).empty();
          $(container).append(content);
        }
      }
    }
  }

  return neverEndingScroll;

});
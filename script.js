(function(document, window, $) {
  &#39;use strict&#39;;

  var $toggles = $(&#39;.toggle&#39;);

  $toggles.each(function() {
    var $this = $(this);
    var $head = $this.find(&#39;.toggle-head&#39;);
    var $content = $this.find(&#39;.toggle-content&#39;);
    var $icon = $head.find(&#39;.fa-angle-down&#39;);

    if ($this.hasClass(&#39;tie-sc-open&#39;)) {
      $icon.addClass(&#39;rotate&#39;);
    }

    $head.click(function() {
      $content.slideToggle();
      $icon.toggleClass(&#39;rotate&#39;);
    });
  });

})(document, window, jQuery);

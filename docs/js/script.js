(function () {
  hljs.initHighlightingOnLoad();
  $(document).on('click', 'a[href^="#"]', function (e) {
    var OFFSET = 10;
    var target = $($(this).attr('href'));
    if (target.length !== 0) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top - OFFSET
      });
    }
  });
})();

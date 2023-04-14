// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    e.preventDefault()

    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    
    //scroll to top
    if(id == '#title'){
        $('body, html').animate({scrollTop: 0});
    }
    else {
        //scroll to element
        var pos = $id.offset().top;

        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    }  
});
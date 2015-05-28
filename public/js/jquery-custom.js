$(document).on('click','.navbar-collapse.in',function(e) {
 event.preventDefault();
if( $(e.target).is('a') ) {
$(this).collapse('hide');
 }
 });



$(".page-scroll").on('click', function (e) {

//Set active menu item

//first remove active status for the currently selected

//menu item


$(this).parent().find('.active').removeClass('active');

$('.nav').find('.active').removeClass('active');

//Then set the current menu item to acive

$(this).parent().addClass('active');
});


// var hamburgerMenu = $(".hamburger-menu");
// var hamburgerBtn = $(".header-right a i");
//
// hamburgerBtn.click(function(){
//   hamburgerMenu.show();
// });
//
// var crossClose = $(".hamburger-menu a i");
// crossClose.click(function(){
//   hamburgerMenu.hide();
// });

var hambActive = $(".hamburger-menu");
var hamburgerBtn = $(".header-right a i");
var crossClose = $(".hamburger-menu a i");

hamburgerBtn.click(function(){
  hambActive.addClass("active");
})

crossClose.click(function(){
  hambActive.removeClass("active");
});

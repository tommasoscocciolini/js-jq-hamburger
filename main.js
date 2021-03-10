var hamburgerMenu = $(".hamburger-menu");
var hamburgerBtn = $(".header-right a i");

hamburgerBtn.click(function(){
  hamburgerMenu.show();
});

var crossClose = $(".hamburger-menu a i");
crossClose.click(function(){
  hamburgerMenu.hide();
});

let real_headbackground =  "linear-gradient(#6698D9, white)";
let real_background = "#cf8f65   ";
let real_text = "#000";
let laser_headbackground = "linear-gradient(90deg, #996fd6, #d0c9ea)";
let laser_background = "#806a7e  ";
let laser_text = "#fffdd0";
let white = '#fff';
let black = '#000';
let pink_orange = '#ed5d66';
let red_orange = '#C27A4A';
let r0 = Math.floor(Math.random() * 2);

let goReal = function() {
  setProp('--mod-head-background', real_headbackground);
  setProp('--mod-background', real_background);
  setProp('--mod-color', real_text);
  setProp('--submit-color', white);
  setProp('--hover-color', red_orange);
  $("#front_image").attr('src', ('images/real.png'));
  $("#screenshot1").attr('src', ('images/screenshots/t1.png'));
  $("#screenshot2").attr('src', ('images/screenshots/t2.png'));
  $("#screenshot3").attr('src', ('images/screenshots/t3.png'));
  $("#screenshot1").attr('link', ('images/screenshots/w1.png'));
  $("#screenshot2").attr('link', ('images/screenshots/w2.png'));
  $("#screenshot3").attr('link', ('images/screenshots/w3.png'));
}

let goLaser = function() {
  setProp('--mod-head-background', laser_headbackground);
  setProp('--mod-background', laser_background);
  setProp('--mod-color', laser_text);
  setProp('--submit-color', black);
  setProp('--hover-color', pink_orange);
  $("#front_image").attr('src', ('images/laser.png'));
  $("#screenshot1").attr('src', ('images/screenshots/t1.png'));
  $("#screenshot2").attr('src', ('images/screenshots/t2.png'));
  $("#screenshot3").attr('src', ('images/screenshots/t3.png'));
  $("#screenshot1").attr('link', ('images/screenshots/w1.png'));
  $("#screenshot2").attr('link', ('images/screenshots/w2.png'));
  $("#screenshot3").attr('link', ('images/screenshots/w3.png'));
}

let startFlip = function() {
  $("#black-fade").fadeIn(600, flip);
}

let flip = function() {
    switch (r0)
    {
        case 0: {
            goLaser();
            r0 = 1;
            break;
        }

        case 1:{
            goReal();
            r0 = 0;
            break;
        }
    }

      $("#black-fade").fadeOut();
}

let setProp = function(prop, setTo) {
  document.documentElement.style.setProperty(prop, setTo);
}

let getProp = function(prop){
  return getComputedStyle(document.documentElement).getPropertyValue(prop);
}

let randomize = function () {
    switch (r0) {
        case 0:
            goReal();
            break;
        case 1:
            goLaser();
            break;
    }
};

$(document).ready(function(){
    randomize();
});

window.onload = function () { $("#black-fade").fadeOut(600); };
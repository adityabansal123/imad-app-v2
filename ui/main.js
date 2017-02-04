console.log('Loaded!');

//change the text of main-tect div
var element = document.getElementById('main-text');
element.innerHTML = 'Aditya Bansal';

//move the image
var img = document.getElementById('madi');
img.onclick = function(){
  img.style.marginLeft = '100px';  
};